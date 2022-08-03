import React from "react";
import { Rate } from "rsuite";

const Rateing = ({ rate, size }) => {
  return (
    <>
      {/* size	'lg' | 'md' | 'sm' | 'xs' ('md') */}
      <Rate defaultValue={rate} allowHalf readOnly size={size} />
    </>
  );
};

export default Rateing;
