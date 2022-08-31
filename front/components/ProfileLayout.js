import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Row, Col, Input } from "antd";
import styled from "styled-components";

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
  vertical-align:middle;
  transform: scale(1.3);
`;

const ProfileLayout = ({ children }) => {

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
          <img src="/images/logo.png" alt="logo"/>
        </div>
        <div className="nav-right">
          <NavSearch placeholder="Search" />
        </div>
      </div>
      <Row gutter={4}>
        <Col sm={24} md={24}>
          {children}
        </Col>
      </Row>

    </div>
  );
};

ProfileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileLayout;
