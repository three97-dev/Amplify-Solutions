import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

const Button = ({ link, onClick, children, type, form, disabled, className, px = "px-[26px]", variant }) => {
  if (link) {
    return (
      <Link
        className={classNames(
          "block w-full md:w-fit py-[11px] text-[16px] leading-[24px] font-poppins font-medium text-center uppercase rounded-[50px]",
          {
            "bg-transparent text-center text-dark-blue border border-blue-secondary": variant === "outline-grey",
            "bg-transparent text-red-primary border border-red-primary": variant === "outline-red",
            "bg-red-primary text-center text-white": !variant,
          },
          className,
          px
        )}
        to={link}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      type={type || "text"}
      form={form}
      disabled={disabled}
      className={classNames(
        "w-full md:w-fit py-[11px] px-[26px] text-[16px] leading-[24px] font-poppins font-medium text-center uppercase rounded-[50px]",
        {
          "bg-transparent text-dark-blue border border-blue-secondary": variant === "outline-grey",
          "bg-transparent text-red-primary border border-red-primary": variant === "outline-red",
          "bg-red-primary text-white": !variant,
          "opacity-50 cursor-default": disabled,
        },
        className,
        px
      )}
    >
      {children}
    </button>
  );
};

export default Button;
