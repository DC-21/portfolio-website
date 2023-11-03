import React from 'react';

interface ButtonProps {
  content: string;
  primary?: boolean;
  secondary?: boolean;
  mobileWidthFull?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  content,
  primary,
  secondary,
  mobileWidthFull,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${primary ? "bg-[#1c1c1c]" : ""} ${
        secondary ? "bg-[#f6f7f8]" : ""
      } p-3 rounded-xl active:scale-95 cursor-pointer md:p-4 text-center gap-2 justify-center flex items-center hover:bg-opacity-60 transition-all transform${
        mobileWidthFull ? "md:w-fit w-full" : ""
      }`}
    >
      {content}
      <span>{icon}</span>
    </div>
  );
};

export default Button;
