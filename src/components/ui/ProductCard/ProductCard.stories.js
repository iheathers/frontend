import React from "react";
import ProductCard from "./ProductCard";
import camera from "../../../assets/Product-image-3.png";
import headphone from "../../../assets/Product-image-2.png";

export default {
  title: "Cards/ProductCard",
  component: ProductCard,
};

export const CameraProductCard = () => (
  <ProductCard
    name="Nixon Camera"
    rating={5}
    price={12000}
    productImg={camera}
  />
);

export const HeadphoneProductCard = () => (
  <ProductCard
    name="Sony Headphone"
    rating={4}
    price={5000}
    productImg={headphone}
  />
);
