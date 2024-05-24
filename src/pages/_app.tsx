import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import "../styles/custom.scss";
import Customlayout from "../component/Customlayout";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Customlayout>
      <Component {...pageProps} />
    </Customlayout>
  );
}
export default MyApp;
