import { Button } from "@geist-ui/core";
import React from "react";

function BaseButton({
  onClick,
  typeSet = "secondary-light",
  children,
  className,
}) {
  return (
    <Button
      type={typeSet}
      className={className} // Directly use typeSet without any string conversion
      onClick={onClick}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}} // You can handle events here if necessary
      placeholder="" // Provide an empty string or a default value
    >
      {children}
    </Button>
  );
}

export default BaseButton;
