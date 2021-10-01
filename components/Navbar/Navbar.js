import {
  AppBar, IconButton, Toolbar,  Drawer } from "@material-ui/core";
import NextLink from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaAngleDown , FaBattleNet} from "react-icons/fa";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import useStyles from "./NavbarStyle";
import bgLogo from "../../utils/images/logo.png";
// import Bglogo from "../../public/home/logo.png";
// import Image from "material-ui-image";
import Image from 'next/image'

{/* <Image src={bgLogo} /> */}

const Navbar = () => {

  const classes = useStyles();

  const [ dropdown, setDropdown ] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  // mobile menu
  const [ mobileMenu, setMobileMenu ] = useState(null);

  const openMobileMenuOpen = (event) => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(null);
  };

  const [ drawerOpen, setDraweropen ] = useState(false);


  return (
    <>
    
      <Drawer style={{ width: 400, }} className={classes.mobilemeuDesign} open={drawerOpen} onClose={() => setDraweropen(false)}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', }}>
          <li className={classes.nabarItem} >
            <NextLink href="/" >
              <a> <Image src={bgLogo} alt="Picture of the author" height="70%" width="70%" /> </a>
            </NextLink>
            
            
          </li>
          <IconButton onClick={() => setDraweropen(false)} >
            <FaTimes />
          </IconButton>
        </div>
        <div className={classes.drawer}>
          <ul>
            <li
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <NextLink
                href='/services'
              >
                <a> Business Verticals</a>
              </NextLink>
            </li>
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/Home" >
                <a> Home </a>
              </NextLink>
            </li>
           
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/aboutus" >
                <a> ABOUT US </a>
              </NextLink>
            </li>
            <li  >
              <NextLink onClick={() => setDraweropen(false)} href="/contact" >
                <a> Contact Us</a>
              </NextLink>
            </li>
            
          </ul>
        </div>
      </Drawer>
      {/* main app bar */}
      <AppBar position="fixed" className={classes.navbar} >
        <Toolbar>
          <div className={classes.mainbar} >
            <li className={classes.nabarItem} >
              <NextLink href="/" >
                <a> <Image src={bgLogo} alt="Picture of the author" height="70%" width="70%" /> </a>
              </NextLink>
            </li>
          </div>
          <div className={classes.sectionDesktop}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center', }} >
            <li >
                <NextLink href="/Home" >
                  <a> Home </a>
                </NextLink>
              </li>
              <li >
                <NextLink href="/Aboutus" >
                  <a> About Us </a>
                </NextLink>
              </li>
             
              <li
                className='nav-item'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                <NextLink
                  href='/Businessverticals'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  <a > Business Verticals<FaAngleDown className={classes.dropdownIcon} /> </a>
                </NextLink>
                {dropdown && <Dropdown />}
              </li>
              
              <li  >
                <NextLink href="/contact" >
                  <a> Contact Us </a>
                </NextLink>
              </li>
             
            </ul>
          </div>
          <div className={classes.mobileDesktop}>
            <IconButton onClick={() => setDraweropen(true)} >
              <FaBars className={classes.mobilemenu} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;















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
