import React from "react";

const Loader = React.forwardRef(({ size }, ref) => {
  return (
    <div ref={ref} className={`load-wrapper ${size}`}>
       <svg className="loader" viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill = "none" strokeWidth="5" />
      </svg> 
    </div>
  );
});

Loader.defaultProps = {
  size: "big",
};

export default Loader;
