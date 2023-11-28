import { Metadata } from "next";
import React from "react";

export const metdata: Metadata = {
  title: {
    absolute: "Blog",
  },
};
const page = () => {
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};

export default page;
