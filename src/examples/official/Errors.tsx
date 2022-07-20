import React from "react";
import { AntdForm } from "../../components";

export default () => {
  const [formData, setFormData] = React.useState({
    skills: ["karate", "budo", "aikido"],
    multipleChoicesList: ["foo"],
    firstName: "Chuck",
    active: "wrong"
  });

  const schema = {
    title: "Contextualized errors",
    type: "object",
    properties: {
      firstName: {
        type: "string",
        title: "First name",
        minLength: 8,
        pattern: "\\d+"
      },
      active: {
        type: "boolean",
        title: "Active"
      },
      skills: {
        type: "array",
        items: {
          type: "string",
          minLength: 5
        }
      },
      multipleChoicesList: {
        type: "array",
        title: "Pick max two items",
        uniqueItems: true,
        maxItems: 2,
        items: {
          type: "string",
          enum: ["foo", "bar", "fuzz"]
        }
      }
    }
  };

  return (
    <AntdForm formData={formData} setFormData={setFormData} schema={schema} />
  );
};
