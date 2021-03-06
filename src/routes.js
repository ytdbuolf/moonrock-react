/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================


=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/** 
  All of the routes for the Vision UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Moonbridge from "layouts/moonbridge";
import Portfolio from "layouts/portfolio";
// import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";

// Vision UI Dashboard React icons

import { IoMan } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoSync } from "react-icons/io5";

import homeIcon from "assets/images/Risorsa 6Ufficiale.svg";
import portfolioIcon from "assets/images/Risorsa 5Ufficiale.svg";
import moonbridgeIcon from "assets/images/Risorsa 1Ufficiale.svg";

const routes = [
  {
    type: "collapse",
    name: "CONSOLE",
    key: "",
    route: "/",
    icon: <img src={homeIcon}  height="20px" />,
    component: Dashboard,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "MOONBOARD",
  //   key: "dashboard",
  //   route: "/dashboard",
  //   icon: <IoHome size="15px" color="inherit" />,
  //   component: Dashboard,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "COMMUNITY TREASURY",
    key: "portfolio",
    route: "/portfolio",
    icon: <img src={portfolioIcon}  height="20px" />,
    component: Portfolio,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "MOONSWAP",
    key: "moonbridge",
    route: "/moonbridge",
    icon: <img src={moonbridgeIcon}  height="20px" />,
    component: Moonbridge,
    noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Tables",
    // key: "tables",
    // route: "/tables",
    // icon: <IoStatsChart size="15px" color="inherit" />,
    // component: Tables,
    // noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Billing",
    // key: "billing",
    // route: "/billing",
    // icon: <BsCreditCardFill size="15px" color="inherit" />,
    // component: Billing,
    // noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "RTL",
    // key: "rtl",
    // route: "/rtl",
    // icon: <IoBuild size="15px" color="inherit" />,
    // component: RTL,
    // noCollapse: true,
  },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  {
    // type: "collapse",
    // name: "Profile",
    // key: "profile",
    // route: "/profile",
    // icon: <BsFillPersonFill size="15px" color="inherit" />,
    // component: Profile,
    // noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Sign In",
    // key: "sign-in",
    // route: "/authentication/sign-in",
    // icon: <IoIosDocument size="15px" color="inherit" />,
    // component: SignIn,
    // noCollapse: true,
  },
  {
    // type: "collapse",
    // name: "Sign Up",
    // key: "sign-up",
    // route: "/authentication/sign-up",
    // icon: <IoRocketSharp size="15px" color="inherit" />,
    // component: SignUp,
    // noCollapse: true,
  },
];

export default routes;
