import React, { useCallback } from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import styled from "styled-components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const ProfileCard = styled(Card)`
  width: 300px;
  padding: 1px;
  transform: translateY(-200px);
  margin-left: 20px;
  border-radius: 50px;
  border: 6px solid white;
`;

const LogOutBtn = styled(Button)`
  margin-top: 30px;
  margin-left: 40px;
  color: gray;
  font-size: 12px;
`;
const Sns = styled.div`
  width: 200px;
  margin-top: 20px;
  margin-left: 50px;
  color: gray;
`;

const UserProfile = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    console.log(me);
    dispatch({ type: LOG_OUT_REQUEST });
  }, []);
  return (
    <>
      <ProfileCard
        hoverable="true"
        cover={
          <img
            style={{
              borderTopRightRadius: "50px",
              borderTopLeftRadius: "50px",
            }}
            alt="example"
            src="/images/profile.jpeg"
          />
        }
        actions={[
          <div key="follower">
            <strong>Follower</strong>
            <p>{me.Followers?.length}</p>
          </div>,
          <div key="following">
            <strong>Following</strong>
            <p>{me.Followings?.length}</p>
          </div>,
          <div key="post">
            <EditOutlined />
            <p>Write</p>
          </div>,
          <div key="more">
            <EllipsisOutlined />
            <p>More</p>
          </div>,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Jin Choi"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <Sns>
          <InstagramOutlined />
          <Link href="/">
            <a style={{ color: "gray", paddingLeft: "5px" }}>itmustbejin</a>
          </Link>
          <br />
          <FacebookOutlined />
          <Link href="/">
            <a style={{ color: "gray", paddingLeft: "5px" }}>
              facebook.com/itmustbejin
            </a>
          </Link>
        </Sns>

        <LogOutBtn onClick={onLogOut} loading={logOutLoading}>
          Log Out
        </LogOutBtn>
      </ProfileCard>
    </>
  );
};

export default UserProfile;
