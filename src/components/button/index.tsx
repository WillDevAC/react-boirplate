import React from "react";

interface IProps {
  option: boolean;
  description: string
}

const Button: React.FC<IProps> = ({ option, description }) => {
  return (
    <>
      {option && <button>{description}</button>}
      {!option && <button>Falso</button>}
    </>
  );
};

export default Button;
