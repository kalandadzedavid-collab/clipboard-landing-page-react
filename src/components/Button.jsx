import React from "react";

const Button = ({content, color}) => {
  
const buttonColor = {
  backgroundColor: color,
  boxShadow: `0px 10px 20px 0px color-mix(in srgb, ${color}, transparent 50%)`
  
}

  return (
    <button style={buttonColor}
      className=" w-80 h-14  rounded-3xl 
    text-white
text-lg
font-semibold
font-['Bai_Jamjuree']
leading-8
tracking-wide
    hover:cursor-pointer
    hover:opacity-75
    "
    
    >
      {content}
    </button>
  );
};

export default Button;

