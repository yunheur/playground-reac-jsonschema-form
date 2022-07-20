import React from "react";
import { AntdForm } from "../../components";

export default () => {
  const [formData, setFormData] = React.useState({});
  const schema = {
    title: "Files",
    type: "object",
    properties: {
      file: {
        type: "string",
        format: "data-url",
        title: "Single file"
      },
      files: {
        type: "array",
        title: "Multiple files",
        items: {
          type: "string",
          format: "data-url"
        }
      },
      filesAccept: {
        type: "string",
        format: "data-url",
        title: "Single File with Accept attribute"
      }
    }
  };
  const uiSchema = {
    filesAccept: {
      "ui:options": {
        accept: ".pdf"
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
