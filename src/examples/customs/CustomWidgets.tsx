import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import React from "react";

export default () => {
  const [formData, setFormData] = React.useState({});
  const schema: JSONSchema7 = {};
  const uiSchema: UiSchema = {};

  return <div>CustomWidgets</div>;
};
