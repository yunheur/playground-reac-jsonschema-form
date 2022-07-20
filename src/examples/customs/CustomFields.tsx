import { JSONSchema7 } from "json-schema";
import React from "react";
import { AntdForm } from "../../components";
import GeoPosition from "../../components/vanilla/fields/GeoPosition";

export default () => {
  const [formData, setFormData] = React.useState({
    geo: {
      lat: 0,
      lon: 1,
    },
  });
  const schema: JSONSchema7 = {
    type: "object",
    properties: {
      geo: {
        type: "object",
        required: ["lat", "lon"],
        properties: {
          lat: { type: "number" },
          lon: { type: "number" },
        },
      },
    },
  };
  const uiSchema = {
    geo: {
      "ui:field": "geo",
    },
  };
  const fields = { geo: GeoPosition };

  return (
    <AntdForm
      formData={formData}
      setFormData={setFormData}
      schema={schema}
      uiSchema={uiSchema}
      fields={fields}
    />
  );
};
