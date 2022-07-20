import { Dispatch } from "react";
import Form from "@rjsf/antd";
import { FormProps } from "@rjsf/core";
import { Row, Col } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IFormProps {
  setFormData: Dispatch<any>;
}

export default ({
  formData,
  setFormData,
  schema = {},
  uiSchema = {},
  extraErrors = {},
  fields = {},
  widgets = {},
}: IFormProps & FormProps<any>) => {
  return (
    <Row gutter={[8, 1]}>
      <Col span={12}>
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          fields={fields}
          widgets={widgets}
          onChange={(e: any) => setFormData(e.formData)}
          extraErrors={extraErrors}
        />
      </Col>
      <Col span={12}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {JSON.stringify(formData, null, 2)}
        </SyntaxHighlighter>
      </Col>
    </Row>
  );
};
