import React from "react";
import Header from "./Header";
import { NavLinks } from "../types/types";

type LayoutProps = {
  children: React.ReactNode;
  navLinks: NavLinks;
};

export default function Layout({ children, navLinks }: LayoutProps) {
  return (
    <div>
      <Header navLinks={navLinks} />
      {children}
    </div>
  );
}
