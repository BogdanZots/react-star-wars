import React from "react";
import PropTypes from "prop-types";
import s from "./UiButton.module.css";
import "../index.css";
import cn from "classnames";

const UiButton = ({ text, handleChange, disabled, theme  }) => {
  return (
    <div className={s.buttons}>
      <button
        onClick={handleChange}
        disabled={disabled}
        className={cn(s.button, s[theme])}
      >
        {text}
      </button>
    </div>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
};

export default UiButton;
