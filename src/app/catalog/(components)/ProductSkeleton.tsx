"use client";

import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const ProductSkeleton: FC = (props) => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={288}
      height={460}
      viewBox="0 0 288 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="8" ry="8" width="288" height="300" />
      <rect x="0" y="317" rx="8" ry="8" width="288" height="28" />
      <rect x="0" y="367" rx="8" ry="8" width="286" height="71" />
      <rect x="0" y="460" rx="8" ry="8" width="288" height="28" />
    </ContentLoader>
  );
};

export default ProductSkeleton;
