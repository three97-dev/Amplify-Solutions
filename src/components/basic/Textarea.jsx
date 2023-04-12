import React from "react";
import classNames from "classnames";

const Textarea = ({ className, placeholder, isError, type, title, name, id, onChange, value, onBlur, disabled }) => {
  return (
    <div className={className}>
      <textarea
        id={id}
        type={type}
        name={name}
        title={title}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        onBlur={onBlur}
        className={classNames(
          "w-full min-h-[100px] resize-none px-4 md:px-8 py-[19px] rounded-2xl text-[16px] bg-white border shadow-[0_1px_43px_rgba(103,142,201,0.21)]",
          {
            "border-red-primary": isError,
            "border-transparent": !isError,
            "hover:border-blue-secondary focus-visible:border-blue-secondary focus-visible:outline-none": !disabled,
            "opacity-60": disabled,
          }
        )}
      />
    </div>
  );
};

export default Textarea;
