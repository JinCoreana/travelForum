import React, { useEffect } from "react";
import { Col, Row } from "antd";

import MyPost from "../components/MyPost";
import FollowList from "../components/FollowList";
import ProfileLayout from "../components/ProfileLayout";
import MyProfile from "../components/Myprofile";
import { useSelector } from "react-redux";
import { Router } from "next/router";

const profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me && me.id)) {
      Router.replace("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }
  // const myPosts = Array.from({ length: 5 }).map((_, i) => ({
  //   href: "https://ant.design",
  //   title: `ant design part ${i}`,
  //   avatar: "https://joeschmoe.io/api/v1/random",
  //   description:
  //     "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  //   content:
  //     "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  // }));

  return (
    <>
      {/* <Head>
<title>My Profile | TF </title>
    </Head> */}
      <ProfileLayout>
        <Row gutter={4}>
          <Col span={5} offset={2}>
            {" "}
            <MyProfile />
          </Col>
          <Col span={13} offset={2}>
            {" "}
            <MyPost data={me.posts} />
          </Col>
        </Row>
        <Row gutter={4} style={{ paddingBottom: "50px" }}>
          <Col span={9} offset={2}>
            <FollowList header="Followers" data={me.Followers} />
          </Col>
          <Col span={9} offset={2}>
            <FollowList header="Followings" data={me.Followings} />
          </Col>
        </Row>
      </ProfileLayout>
    </>
  );
};

export default profile;
