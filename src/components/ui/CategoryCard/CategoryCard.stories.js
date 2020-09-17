import React from "react";
import CategoryCard from "./CategoryCard";

import smartphonesImg from "../../../assets/Smartphones-category.svg";
import electronicsImg from "../../../assets/Electronics-category.svg";
import fashionImg from "../../../assets/Fashion&Beauty-category.svg";
import kidsImg from "../../../assets/Kids&Toys-category.svg";
import musicImg from "../../../assets/MusicalInstruments-category.svg";
import gamingImg from "../../../assets/Gaming-category.svg";

export default {
  title: "Cards/CategoryCard",
  component: CategoryCard,
};

export const ElectronicsCard = () => (
  <CategoryCard
    categoryText="Electronics"
    categoryImg={electronicsImg}
    background="#FF007C"
  />
);

export const SmartphonesCard = () => (
  <CategoryCard
    categoryText="Smartphones"
    categoryImg={smartphonesImg}
    background="#39D5CF"
  />
);

export const FashionCard = () => (
  <CategoryCard
    categoryText="Fashion & Beauty"
    categoryImg={fashionImg}
    background="#7D00B5"
  />
);

export const KidsCard = () => (
  <CategoryCard
    categoryText="Kids & Toys"
    categoryImg={kidsImg}
    background="#FF00E6"
  />
);

export const MusicCard = () => (
  <CategoryCard
    categoryText="Musical Instruments"
    categoryImg={musicImg}
    background="#D56939"
  />
);

export const GamingCard = () => (
  <CategoryCard
    categoryText="Gaming"
    categoryImg={gamingImg}
    background="#459A1C"
  />
);
