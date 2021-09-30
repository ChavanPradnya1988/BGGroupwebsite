import {makeStyles} from "@material-ui/core";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#f7F7F7',
    height: '65px',
    padding: '0 20px',
    '& a': {
      color: 'black',
      margin: '0px 15px',
    },
  },
  mainbar: {
    flexGrow: 1,
  },
  logo: {
    width: '55px',
    height: '55px',

    // margingBottom: '-30px',
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up("md") ]: {
      display: 'flex',
    }
  },
  mobileDesktop: {
    display: 'none',
    [ theme.breakpoints.down("sm") ]: {
      display: 'flex',
    },
  },
  mobilemenu: {
    color: "black"
  },
  nabarItem: {
    listStyle: 'none',
    marginTop: '8px',
  },
  mobilemeuDesign: {
    height: 'auto',
    [ theme.breakpoints.up("md") ]: {
      display: 'none',
    },
  },
  dropdownIcon: {
    marginTop: '3px',
  },
  // drawer
  drawer: {
    width: drawerWidth,
    textAlign: 'center',
    '& ul': {
      listStyle: 'none',
      '& li': {
        margin: '10px 0px',
      },
    },
  },

}));
export default useStyles;