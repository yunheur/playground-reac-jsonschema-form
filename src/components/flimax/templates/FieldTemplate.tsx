import React from "react";
import { FieldTemplateProps } from "@rjsf/core";

export default (props: FieldTemplateProps) => {
  const { classNames, description, children } = props;

  return (
    <div className={classNames}>
      {children}
      {description}
    </div>
  );
};
