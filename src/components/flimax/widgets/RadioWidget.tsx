import React from "react";
import { WidgetProps } from "@rjsf/core";
import classNames from "classnames/bind";
import styles from "./RadioWidget.module.scss";

const cx = classNames.bind(styles);

export default (props: WidgetProps) => {
  const {
    options,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onBlur,
    onFocus,
    onChange,
    id
  } = props;
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, enumDisabled, inline } = options;
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  return (
    <div className={cx("field-radio-group--default")} id={id}>
      {enumOptions.map((option, i) => {
        const checked = option.value === value;
        const itemDisabled =
          enumDisabled && enumDisabled.indexOf(option.value) != -1;
        const disabledCls =
          disabled || itemDisabled || readonly ? "disabled" : "";
        const radio = (
          <span className={cx("inner-radio")}>
            <input
              type="radio"
              checked={checked}
              name={name}
              required={required}
              value={option.value}
              disabled={disabled || itemDisabled || readonly}
              autoFocus={autofocus && i === 0}
              onChange={(_) => onChange(option.value)}
              onBlur={onBlur && ((event) => onBlur(id, event.target.value))}
              onFocus={onFocus && ((event) => onFocus(id, event.target.value))}
            />
            <span>{option.label}</span>
          </span>
        );

        return inline ? (
          <label key={i} className={cx("radio-inline", disabledCls)}>
            {radio}
          </label>
        ) : (
          <div key={i} className={cx("radio", disabledCls)}>
            <label>{radio}</label>
          </div>
        );
      })}
    </div>
  );
};
