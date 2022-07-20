import React from "react";
import { UiSchema } from "@rjsf/core";
import { AntdForm } from "../../components";
import { JSONSchema7 } from "json-schema";

export default () => {
  const [formData, setFormData] = React.useState({
    stringFormats: {
      email: "chuck@norris.net",
      uri: "http://chucknorris.com/"
    },
    boolean: {
      default: true,
      radio: true,
      select: true
    },
    string: {
      color: "#151ce6",
      default: "Hello...",
      textarea: "... World"
    },
    secret: "I'm a hidden string.",
    disabled: "I am disabled.",
    readonly: "I am read-only.",
    readonly2: "I am also read-only.",
    widgetOptions: "I am yellow"
  });

  const schema: JSONSchema7 = {
    title: "Widgets",
    type: "object",
    properties: {
      stringFormats: {
        type: "object",
        title: "String formats",
        properties: {
          email: {
            type: "string",
            format: "email"
          },
          uri: {
            type: "string",
            format: "uri"
          }
        }
      },
      boolean: {
        type: "object",
        title: "Boolean field",
        properties: {
          default: {
            type: "boolean",
            title: "checkbox (default)",
            description: "This is the checkbox-description"
          },
          radio: {
            type: "boolean",
            title: "radio buttons",
            description: "This is the radio-description"
          },
          select: {
            type: "boolean",
            title: "select box",
            description: "This is the select-description"
          }
        }
      },
      string: {
        type: "object",
        title: "String field",
        properties: {
          default: {
            type: "string",
            title: "text input (default)"
          },
          textarea: {
            type: "string",
            title: "textarea"
          },
          placeholder: {
            type: "string"
          },
          color: {
            type: "string",
            title: "color picker",
            default: "#151ce6"
          }
        }
      },
      secret: {
        type: "string",
        default: "I'm a hidden string."
      },
      disabled: {
        type: "string",
        title: "A disabled field",
        default: "I am disabled."
      },
      readonly: {
        type: "string",
        title: "A readonly field",
        default: "I am read-only."
      },
      readonly2: {
        type: "string",
        title: "Another readonly field",
        default: "I am also read-only.",
        readOnly: true
      },
      widgetOptions: {
        title: "Custom widget with options",
        type: "string",
        default: "I am yellow"
      },
      selectWidgetOptions: {
        title: "Custom select widget with options",
        type: "string",
        enum: ["foo", "bar"],
        enumNames: ["Foo", "Bar"]
      }
    }
  };

  const uiSchema: UiSchema = {
    boolean: {
      radio: {
        "ui:widget": "radio"
      },
      select: {
        "ui:widget": "select"
      }
    },
    string: {
      textarea: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      },
      placeholder: {
        "ui:placeholder": "This is a placeholder"
      },
      color: {
        "ui:widget": "color"
      }
    },
    secret: {
      "ui:widget": "hidden"
    },
    disabled: {
      "ui:disabled": true
    },
    readonly: {
      "ui:readonly": true
    },
    widgetOptions: {
      "ui:options": {
        backgroundColor: "yellow"
      }
    },
    selectWidgetOptions: {
      "ui:options": {
        backgroundColor: "pink"
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
