import Layout from "../components/Layout";
import item from "../utils/images/homepagebanner.png"
import { makeStyles } from "@material-ui/core";
import Image from 'next/image';

const useStyles = makeStyles({
    image: {
      height: "100vh !important",
    },
   
  });

const portfolio = () => {
    const classes = useStyles();
  return (
    <>
      <Layout title="Home" >
      <Image src={item} alt="Picture of the author"/>
        <h1> Homepage page </h1>

      </Layout>
    </>
  );
};

export default portfolio;