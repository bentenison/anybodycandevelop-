import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../styles/GlobalStyles";
import preset from "@rebass/preset";
import Navbar from "../src/components/Navbar/Navbar";
import Layout from "../src/components/Layout/Layout";
import { Footer } from "../src/components/Footer/Footer";


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={preset}>
        <GlobalStyles />
        <Navbar />
        
        <Layout>
          <Component {...pageProps} />;
        </Layout>
       <Footer/>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
