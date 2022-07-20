import { Dispatch } from "react";
import Form from "@rjsf/core";
import { FormProps } from "@rjsf/core";
import Templates from "./templates";
import Widgets from "./widgets";

import { Row, Col, Button } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IFormProps {
  setFormData: Dispatch<any>;
}

export default (props: IFormProps & FormProps<any>) => {
  const widgets = {
    BaseInput: Widgets.BaseInput,
    RadioWidget: Widgets.RadioWidget,
    SelectWidget: Widgets.SelectWidget
  };

  return (
    <Row gutter={[8, 1]}>
      <Col span={12}>
        <Form
          onChange={(e: any) => props.setFormData(e.formData)}
          {...props}
          widgets={widgets}
          FieldTemplate={Templates.FieldTemplate}
          ObjectFieldTemplate={Templates.ObjectFieldTemplate}
        >
          <div style={{ marginTop: "50px" }}>
            <Button type="primary" htmlType="submit" size="large" block>
              가입
            </Button>
          </div>
        </Form>
      </Col>
      <Col span={12}>
        <SyntaxHighlighter language="javascript" style={docco}>
          {JSON.stringify(props.formData, null, 2)}
        </SyntaxHighlighter>
      </Col>
    </Row>
  );
};
