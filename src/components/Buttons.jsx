import React from "react";
import { Button } from "@nextui-org/react";

export const PrincipalButton = ({text, background, textColor, shadow, onClick}) => {
  return(
    <>
      <Button 
        className={`${background} ${textColor} ${shadow} w-16 py-1 rounded-full`}
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  )
}