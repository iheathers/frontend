import React from "react";
import GoToButton from "./GoToButton";

export default {
  title: "Buttons/GoToButton",
  component: GoToButton,
};

export const GoToStoreButton = () => <GoToButton>Go To Store</GoToButton>;

export const GoToVendorButton = () => <GoToButton>Go To Vendor</GoToButton>;
