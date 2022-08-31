import { Form, Input } from "antd";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import useinput from "../hooks/useinput";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";

export const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  const [nickname, onChangeNickname] = useinput(me?.nickname || "");
  const dispatch = useDispatch();

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  });

  return (
    <Form
      style={{
        marginBottom: "20px",
        border: "1px solid #d9d9d9",
        padding: "20px",
      }}
      onFinish={onSubmit}
    >
      <Input.Search
        addonBefore="nickname"
        enterButton="Search"
        value={nickname}
        onChange={onChangeNickname}
      />
    </Form>
  );
};
