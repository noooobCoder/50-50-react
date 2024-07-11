import React from "react";
import { useLocation } from "react-router-dom";
import loadable from "@loadable/component";

const requirePage = require.context("./pages", true, /index\.js$/);

const pages = requirePage.keys().reduce((pages, file) => {
  const page = file.replace("./", "").replace("/index.js", "");
  pages[page] = loadable(() => import(`./pages/${page}/index.js`));
  return pages;
}, {});

const PageLoader = () => {
  const location = useLocation();
  const path = location.pathname
    .replace("/", "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const Page = pages[`${path}Page`];

  // console.log(pages);
  // console.log(Page);

  return Page ? <Page /> : <></>;
};

export default PageLoader;
