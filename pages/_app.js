import InfoCard from "../components/InfoCard";
import Layout from "../components/Layout";
import GlobalStyle from "../styles/Global";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
