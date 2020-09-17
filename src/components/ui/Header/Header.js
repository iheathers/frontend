import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import compyLogo from "../../../assets/COMPY-LOGO.svg";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Button disableRipple>
            <img src={compyLogo} alt="compy-logo" />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
