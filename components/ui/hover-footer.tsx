import React from "react";

export const FooterBackgroundGradient = () => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 10%, rgba(59, 22, 143, 0.95) 45%, rgba(91, 33, 217, 0.25) 100%)",
      }}
    />
  );
};
