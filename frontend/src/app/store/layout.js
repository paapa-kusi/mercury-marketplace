// Layout component for the store section of the application
import Layout from "@/components/layouts/Layout";
import React from "react";

// Wraps store pages with the main layout component
const StoreFrontLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default StoreFrontLayout;
