import React from "react";
import { WidgetProps } from "@rjsf/core";
import _ from "lodash";
import classNames from "classnames/bind";
import styles from "./BaseInput.module.scss";

const cx = classNames.bind(styles);

export default (props: WidgetProps) => {
  if (!props.id) {
    console.log("No id for", props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    uiSchema,
    formContext,
    registry,
    rawErrors,
    placeholder,
    ...inputProps
  } = props;

  // If options.inputType is set use that as the input type
  if (options.inputType) {
    inputProps.type = options.inputType;
  } else if (!inputProps.type) {
    // If the schema is of type number or integer, set the input type to number
    if (schema.type === "number") {
      inputProps.type = "number";
      // Setting step to 'any' fixes a bug in Safari where decimals are not
      // allowed in number inputs
      inputProps.step = "any";
    } else if (schema.type === "integer") {
      inputProps.type = "number";
      // Since this is integer, you always want to step up or down in multiples
      // of 1
      inputProps.step = "1";
    } else {
      inputProps.type = "text";
    }
  }

  if (options.autocomplete) {
    inputProps.autoComplete = options.autocomplete;
  }

  // If multipleOf is defined, use this as the step value. This mainly improves
  // the experience for keyboard users (who can use the up/down KB arrows).
  if (schema.multipleOf) {
    inputProps.step = schema.multipleOf;
  }

  if (typeof schema.minimum !== "undefined") {
    inputProps.min = schema.minimum;
  }

  if (typeof schema.maximum !== "undefined") {
    inputProps.max = schema.maximum;
  }

  // custom
  const [isFocus, setIsFocus] = React.useState(false);
  const focusable = (_value: any) => !_.isNil(_value) || _.isNumber(_value);
  React.useEffect(() => {
    if (focusable(value)) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  }, [value]);

  const handleOnChange = ({ target: { value } }: any) => {
    return props.onChange(value === "" ? options.emptyValue : value);
  };
  const handleOnFocus = (event: any) => {
    if (readonly) return;
    setIsFocus(true);

    onFocus(inputProps.id, event.target.value);
  };
  const handleOnBlur = (event: any) => {
    if (readonly) return;
    if (!focusable(value)) {
      setIsFocus(false);
    }

    onBlur(inputProps.id, event.target.value);
  };

  return (
    <div className={cx("field-input-group--default")}>
      <input
        key={inputProps.id}
        className={cx("form-control", {
          active: placeholder && isFocus
        })}
        readOnly={readonly}
        disabled={disabled}
        autoFocus={autofocus}
        value={value == null ? "" : value}
        {...inputProps}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      {placeholder && (
        <label
          htmlFor={inputProps.id}
          className={cx("placeholder", { active: isFocus })}
        >
          {placeholder}
        </label>
      )}
    </div>
  );
};
