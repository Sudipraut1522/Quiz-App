import React from "react";

type ButtonProps = {
  onClick?: () => void;
  buttonName: string;
  buttonClassName?: string;
  type?: string;
  icone?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  icone,
  onClick,
  buttonName,
  buttonClassName,
  type = "button",
  ...props
}) => {
  return (
    <div className="flex w-full">
      <button
        onClick={onClick}
        className={`bg-blue-600 text-white p-3 rounded-md cursor-pointer   ${buttonClassName}`}
        {...props}
      >
        {icone && <span>{icone}</span>}
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
