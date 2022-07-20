import { ISubmitEvent, UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";
import React from "react";
import { FlimaxForm } from "../../components";

export default () => {
  const [formData, setFormData] = React.useState({});
  const schema: JSONSchema7 = {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email"
      },
      otp: {
        type: "number"
      },
      password: {
        type: "string"
      },
      confirmPassword: {
        type: "string"
      },
      name: {
        type: "string"
      },
      phone: {
        type: "string"
      },
      // checkboxes: {
      //   type: "array",
      //   items: {
      //     type: "number",
      //     enum: [1, 2, 3, 4],
      //     enumNames: ["jobType#1", "jobType#2", "jobType#3", "jobType#4"]
      //   },
      //   uniqueItems: true
      // },
      jobTypes: {
        type: "number",
        enum: [1, 2, 3, 4],
        enumNames: ["jobType#1", "jobType#2", "jobType#3", "jobType#4"]
      },
      gender: {
        type: "number",
        title: "genger",
        enum: [1, 2, 3],
        enumNames: ["남자", "여자", "기타"]
      }
    }
  };
  const uiSchema: UiSchema = {
    email: {
      "ui:placeholder": "이메일"
    },
    otp: {
      "ui:placeholder": "인증번호"
    },
    password: {
      "ui:placeholder": "비밀번호",
      "ui:widget": "password"
    },
    confirmPassword: {
      "ui:placeholder": "비밀번호 확인",
      "ui:widget": "password"
    },
    name: {
      "ui:placeholder": "이름"
    },
    phone: {
      "ui:placeholder": "연락처"
    },
    // checkboxes: {
    //   "ui:widget": "checkboxes"
    // },
    jobTypes: {
      "ui:placeholder": "직종 선택"
    },
    gender: {
      "ui:widget": "radio",
      "ui:placeholder": "Choose an option",
      "ui:options": {
        inline: true
      }
    }
  };

  const onSubmit = (event: ISubmitEvent<any>) => {
    console.log(event.formData);
  };

  return (
    <FlimaxForm
      formData={formData}
      setFormData={setFormData}
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
    />
  );
};
