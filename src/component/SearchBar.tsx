import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { buildWeatherApiUrl } from "src/utils";
import { Alert, FormControl, InputGroup, ListGroup } from "react-bootstrap";
const SearchComponent = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [apiError, setApiError] = useState({ error: false, message: "" });
  useEffect(() => {
    if (router.asPath === "/weather") {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position,"position")
        const qureyParams = buildWeatherApiUrl({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        router.push(qureyParams);
      });
    }
  }, [router]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length === 0) return;
    try {
      // Debouncing logic
      setTimeout(async () => {
        const response = await axios(
          `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
        );

        if (!response.data.results) {
          setApiError({
            error: true,
            message: "Failed to fetch location data",
          });
        } else if (response.data.results) {
          setApiError({ error: false, message: "" });
          setSearchResults(response.data.results);
        }
      }, 500); // Adjust debounce delay as needed
    } catch (error) {
      setApiError({
        error: true,
        message: "Failed to fetch location data",
      });
      setSearchResults([]);
    }
  };

  const handleSelect = (event: any) => {
    setQuery(event.target.value);
    const selectedLocation = searchResults.find((result) => result.name === event.target.value);
    if (selectedLocation) {
      const { latitude, longitude,name } = selectedLocation;
      const qureyParams = buildWeatherApiUrl({ latitude, longitude,name });
      router.push(qureyParams);
      setSearchResults([]);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      {apiError.error && (
        <Alert variant="danger">
          Error fetching weather data: {apiError.message}
        </Alert>
      )}

      <InputGroup className="mb-3">
        <FormControl
          type="text"
          value={query}
          onChange={handleChange}
          list="locations"
          placeholder="Enter location name"
        />
      </InputGroup>
      {searchResults.length > 0 && (
        <ListGroup
          style={{ position: "absolute", width: "50%", zIndex: 10 }}
          className="search-results"
        >
          {searchResults.map((result, index) => (
            <ListGroup.Item
              onClick={() => handleSelect({ target: { value: result.name } })}
              key={result.id}
            >
              {" "}
              {result.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SearchComponent;
