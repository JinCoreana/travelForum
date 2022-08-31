import React, { useCallback, useEffect, useMemo } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";
import useinput from "../hooks/useinput";

const LogInForm = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useinput("");
  const [password, onChangePassword] = useinput("");

  useEffect(() => {
    if (logInError) alert(logInError);
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email, password },
    });
  }, [email, password]);

  const formstyle = useMemo(
    () => ({
      margin: 20,
    }),
    []
  );
  const btnstyle = useMemo(
    () => ({
      minWidth: 80,
      marginRight: 10,
    }),
    []
  );

  return (
    <Form
      onFinish={onSubmitForm}
      style={formstyle}
      labelCol={{ span: 6, offset: 1 }}
      wrapperCol={{ span: 16, offset: 1 }}
    >
      <Form.Item
        label="Username"
        name="username"
        value={email}
        onChange={onChangeEmail}
        htmlFor="user-email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        value={password}
        htmlFor="user-password"
        onChange={onChangePassword}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          style={(btnstyle, { backgroundColor: "#ebcda7" })}
          htmlType="submit"
          loading={logInLoading}
        >
          Submit
        </Button>
        <Link href="/signup">
          <a>
            <Button style={btnstyle}>Sing Up</Button>
          </a>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default LogInForm;
