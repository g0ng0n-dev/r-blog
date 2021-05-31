import React from "react";

import Header from "../Header/Header";
import Drawer from "../Drawer/Drawer";
import Footer from "../Footer/Footer";
import Toolbar from "@material-ui/core/Toolbar";
import { useStyles } from "./styles";

import { DrawerProvider } from "../Drawer/drawer-context";

function Layout({ children }) {
  const classes = useStyles();
  return (
    <DrawerProvider>
      <div className={classes.root}>
        <Header />
        <Toolbar />
        <div className={classes.container}>
          <Drawer />
          <main className={classes.main}>{children}</main>
        </div>
        <Footer />
      </div>
    </DrawerProvider>
  );
}

export default Layout;
