// https://react-jsonschema-form.readthedocs.io/en/latest/usage/validation/

import React from "react";
import { AntdForm } from "../../components";

export default () => {
  const [formData, setFormData] = React.useState({});
  const schema = {
    title: "Custom validation",
    description:
      "This form defines custom validation rules checking that the two passwords match.",
    type: "object",
    properties: {
      pass1: {
        title: "Password",
        type: "string",
        minLength: 3
      },
      pass2: {
        title: "Repeat password",
        type: "string",
        minLength: 3
      },
      age: {
        title: "Age",
        type: "number",
        minimum: 18
      }
    }
  };
  const uiSchema = {
    pass1: {
      "ui:widget": "password"
    },
    pass2: {
      "ui:widget": "password"
    }
  };

  return (
    <AntdForm
      formData={formData}
      setFormData={setFormData}
      schema={schema}
      uiSchema={uiSchema}
    />
  );
};
