import React from "react";
import classNames from "classnames";

const Container = ({ outerContainerClassName, innerContainerClassName, children }) => {
  return (
    <div className={classNames("relative w-full overflow-hidden z-0", outerContainerClassName)}>
      <div className={classNames("w-full max-w-[1440px] mx-auto px-6 md:px-16", innerContainerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
