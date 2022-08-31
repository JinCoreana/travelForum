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
import { NicknameEditForm } from "./NicknameSearch";

const ProfileCard = styled(Card)`
  width: 100%;
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

const MyProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <>
      <ProfileCard
        cover={<img alt="example" src="/images/profile.jpeg" />}
        actions={[
          <div key="follower">
            <strong>Follower</strong>
            <p>200</p>
          </div>,
          <div key="following">
            <strong>Following</strong>
            <p>253</p>
          </div>,
          <div key="post">
            {" "}
            <EditOutlined />
            <p>Write</p>
          </div>,
          <div key="more">
            {" "}
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
          </Link>{" "}
          <br />
          <FacebookOutlined />
          <Link href="/">
            <a style={{ color: "gray", paddingLeft: "5px" }}>
              facebook.com/itmustbejin
            </a>
          </Link>
        </Sns>

        <LogOutBtn onClick={onLogOut}>Log Out</LogOutBtn>
      </ProfileCard>
    </>
  );
};

export default MyProfile;
