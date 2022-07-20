import React from "react";
import { AntdForm } from "../../components";

export default () => {
  const [formData, setFormData] = React.useState({
    firstName: "Chuck",
    lastName: "Norris",
    telephone: ""
  });

  const schema = {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        default: "Chuck"
      },
      lastName: {
        type: "string",
        title: "Last name"
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10
      }
    }
  };

  const uiSchema = {};

  return (
    <AntdForm
      formData={formData}
      setFormData={setFormData}
      schema={schema}
      uiSchema={uiSchema}
    />
  );
};
