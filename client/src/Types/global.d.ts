import { ReactNode } from "react";

export type children = {
  children: ReactNode;
};
export type headingTypes = {
  title?: string;
  desc?: string;
};

export type ProductCardProps = {
  name?: string;
  image?: string;
  price?: number;
  discount?: number;
};
