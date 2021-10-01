import Head from "next/head";
import { AppBar, Container, Toolbar, Typography, CssBaseline } from "@material-ui/core";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Navbar from "./Navbar/Navbar";
import useStyles from "../utils/styles";
import Footer from "./Footer/footer";

const Layout = ({ title, description, children }) => {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1: {
        fontWeight: 'normal',
      },
    },
    palette: {
      type: 'light',
      primary: {
        main: '#f2f2f2',
      },
      secondary: {
        main: '#f7f7f7'
      },
    },

  });



  const classes = useStyles();
  return (
    <>
      {/* SEO */}
      <Head>
        <title>{title ? `${title} - BG Group` : 'BG Group'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme} >
        <CssBaseline />
       
        < Navbar />
        <Container   className={classes.main} >
          {children}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
