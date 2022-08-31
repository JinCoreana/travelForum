import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Row, Col, Input } from "antd";
import styled from "styled-components";
import LogInForm from "./loginform";
import UserProfile from "./UserProfile";
import FollowList from "./FollowList";
import { useSelector } from "react-redux";

const MenuCustom = styled(Menu)`
  font-size: 20px;
`;

const MenuItemCustom = styled(Menu.Item)`
  margin: 10px;
`;
const NavSearch = styled(Input.Search)`
  display: inline-block;
  font-size: 20px;
  width: 300px;
  min-width: 200px;
  vertical-align: middle;
  transform: scale(1.3);
`;

const MainLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);

  return (
    <div className="container">
      <div className="nav">
        <div className="nav-left">
          <MenuCustom mode="horizontal">
            <MenuItemCustom>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItemCustom>
            <MenuItemCustom>
              <Link href="/signup">
                <a>Sign Up</a>
              </Link>
            </MenuItemCustom>
            <MenuItemCustom>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </MenuItemCustom>
          </MenuCustom>
        </div>
        <div className="nav-center">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="nav-right">
          <NavSearch placeholder="Search" />
        </div>
      </div>
      <div className="cover_img"></div>
      <Row gutter={4}>
        <Col sm={4} md={4}>
          {me ? <UserProfile /> : <LogInForm />}
        </Col>
        <Col sm={16} md={16}>
          {children}
        </Col>
        <Col sm={4} md={4}>
          <FollowList header={"My followings"} data={me?.Followings} />
        </Col>
      </Row>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
