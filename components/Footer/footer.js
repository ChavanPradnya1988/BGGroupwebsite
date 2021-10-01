import {
    Button, Stack,Paper } from "@material-ui/core";

import { styled } from '@material-ui/core';

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
  
  const Footer = () => {
  
   
  
  
    return (
      <>
     fhhhnh
      </>
    );
  };
  
  export default Footer;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // import {
  //   AppBar, IconButton, Toolbar,  Drawer} from "@material-ui/core";
  // import NextLink from "next/link";
  // import { useState } from "react";
  // import { FaBars, FaTimes, FaAngleDown , FaBattleNet} from "react-icons/fa";
  // import { Button } from "./Button";
  // import Dropdown from "./Dropdown";
  // import useStyles from "./NavbarStyle";
  // import bgLogo from "../../public/home/logo.png";
  // import { navMenu } from './NavMenu';
  
  // const Navbar = () => {
  
  //   const classes = useStyles();
  
  //   const [ dropdown, setDropdown ] = useState(false);
  
  //   const onMouseEnter = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(true);
  //     }
  //   };
  
  //   const onMouseLeave = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(false);
  //     }
  //   };
  
  
  //   // mobile menu
  //   const [ mobileMenu, setMobileMenu ] = useState(null);
  
  //   const openMobileMenuOpen = (event) => {
  //     setMobileMenu(true);
  //   };
  //   const closeMobileMenu = () => {
  //     setMobileMenu(null);
  //   };
  
  //   const [ drawerOpen, setDraweropen ] = useState(false);
  
  
  //   return (
  //     <>
  //       <Drawer style={{ width: 400, }} className={classes.mobilemeuDesign} open={drawerOpen} onClose={() => setDraweropen(false)}>
  //         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', }}>
  //           <li className={classes.nabarItem} >
  //             <NextLink href="/" >
  //               <a> <img src="../../public/home/logo.png" className={classes.logo} /> </a>
  //             </NextLink>
  //           </li>
  //           <IconButton onClick={() => setDraweropen(false)} >
  //             <FaTimes />
  //           </IconButton>
  //         </div>
  //         <div className={classes.drawer}>
  //         {navMenu.map(nav => (
  //           <ul key={nav.id}>
  //             <li> <NextLink href={nav.path} >
  //                   <a>{nav.title}</a>
  //                 </NextLink></li>
  //           </ul>
              
  //           ))}
        
  //         </div>
  //       </Drawer>
  //       {/* main app bar */}
  //       <AppBar position="fixed" className={classes.navbar} >
  //         <Toolbar>
  //           <div className={classes.mainbar} >
  //             <li className={classes.nabarItem} >
  //               <NextLink href="/" >
  //                 <a> <img src="../../public/home/logo.png" className={classes.logo} /> </a>
  //               </NextLink>
  //             </li>
  //           </div>
  //           <div className={classes.sectionDesktop}>
  //           {navMenu.map(nav => (
  //           <ul key={nav.id}>
  //             <li> 
  //               <NextLink href={nav.path} >
  //                 <a>{nav.title}</a>
  //               </NextLink>
  //             </li>
  //          </ul>
  //             ))}
  //           </div>
  //           <div className={classes.mobileDesktop}>
  //             <IconButton onClick={() => setDraweropen(true)} >
  //               <FaBars className={classes.mobilemenu} />
  //             </IconButton>
  //           </div>
  //         </Toolbar>
  //       </AppBar>
  //     </>
  //   );
  // };
  
  // export default Navbar;
  