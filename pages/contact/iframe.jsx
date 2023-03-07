import React, { useState } from "react";
export default function IframeComponent({ id }) {
  return (
    <iframe
      id={id}
      src="https://docs.google.com/forms/d/e/1FAIpQLSfpxRcaPx-c5wtdJ2Z9T8TeIgbOc22-S6BTj7osloKzKX1hsg/viewform?embedded=true"
      title="Contact Us"
      width={"100%"}
    />
  );
}
