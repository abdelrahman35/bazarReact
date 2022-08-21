import React from "react";
import { Rate } from "rsuite";

const Rateing = ({ rate, size, read }) => {
  return (
    <>
      {/* size	'lg' | 'md' | 'sm' | 'xs' ('md') */}
      <Rate defaultValue={rate} allowHalf readOnly={read} size={size} />
    </>
  );
};

export default Rateing;
