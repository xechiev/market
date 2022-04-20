import React from 'react';
import { Form, Input } from 'antd';
import { FieldHookConfig, useField } from 'formik';

interface MyTextFieldProps {
  label: string;
  name: string;
}

function FormTextField (props: MyTextFieldProps & FieldHookConfig<string>) {
  const { label, name } = props;
  const [field, meta] = useField(props);

  const input = name === 'password' || name === 'confirm' ? (
    <Input.Password {...field} />
  ) : (
    <Input {...field} />
  );

  return (
    <Form.Item
      name={name}
      label={label}
      help={meta.touched && meta.error}
      validateStatus={meta.touched && meta.error ? 'error' : 'validating'}
    >
      {input}
    </Form.Item>
  );
}

export default FormTextField;
