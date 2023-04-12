import React from "react";
import classNames from "classnames";
import PhoneInput from "react-phone-input-2";

const InputPhone = ({ id, name, title, placeholder, value, onBlur, onChange, isError, className, disabled }) => {
  return (
    <div className={classNames("phone-input", className)}>
      <PhoneInput
        inputProps={{
          id: id,
          name: name,
          title: title,
          onBlur: onBlur,
        }}
        country={"us"}
        onlyCountries={["us"]}
        onChange={onChange}
        value={value}
        disabled={disabled}
        disableCountryCode={true}
        disableDropdown={true}
        specialLabel=""
        masks={{ us: "...-...-...." }}
        placeholder={placeholder}
        inputClass={classNames(
          "w-full h-16 px-4 md:px-8 rounded-2xl text-[16px] bg-white border shadow-[0_1px_43px_rgba(103,142,201,0.21)]",
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

export default InputPhone;
