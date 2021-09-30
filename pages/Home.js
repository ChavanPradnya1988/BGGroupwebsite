import Layout from "../components/Layout";
import item from "../public/home/homepagebanner.png"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    image: {
      width: "100%",
      height: "80vh",
    },
   
  });

const portfolio = () => {
    const classes = useStyles();
  return (
    <>
      <Layout title="Home" >
      <img src={item} alt="" className={classes.image} />
        <h1> Homepage page </h1>

      </Layout>
    </>
  );
};

export default portfolio;