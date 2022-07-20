import React from "react";
import { ObjectFieldTemplateProps } from "@rjsf/core";

import classNames from "classnames/bind";
import styles from "./ObjectFieldTemplate.module.scss";

const cx = classNames.bind(styles);

export default (props: ObjectFieldTemplateProps) => {
  return (
    <div className={cx("object-field-template--default")}>
      {props.properties.map((element) => (
        <div className={cx("field-wrapper")}>{element.content}</div>
      ))}
    </div>
  );
};
