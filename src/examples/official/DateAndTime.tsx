import React from "react";
import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import { AntdForm } from "../../components";

export default () => {
  const [formData, setFormData] = React.useState({
    native: {},
    alternative: {}
  });
  const schema: JSONSchema7 = {
    title: "Date and time widgets",
    type: "object",
    properties: {
      native: {
        title: "Native",
        description:
          "May not work on some browsers, notably Firefox Desktop and IE.",
        type: "object",
        properties: {
          datetime: {
            type: "string",
            format: "date-time"
          },
          date: {
            type: "string",
            format: "date"
          }
        }
      },
      alternative: {
        title: "Alternative",
        description: "These work on most platforms.",
        type: "object",
        properties: {
          "alt-datetime": {
            type: "string",
            format: "date-time"
          },
          "alt-date": {
            type: "string",
            format: "date"
          }
        }
      }
    }
  };
  const uiSchema: UiSchema = {
    alternative: {
      "alt-datetime": {
        "ui:widget": "alt-datetime",
        "ui:options": {
          yearsRange: [1980, 2030]
        }
      },
      "alt-date": {
        "ui:widget": "alt-date",
        "ui:options": {
          yearsRange: [1980, 2030]
        }
      }
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
