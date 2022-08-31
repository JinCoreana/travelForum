import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Background = styled.div`
  background-image: url("/images/login_background.jpg");
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-blend-mode: soft-light;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
 
const Tray = styled.div` 
 padding-left:50px;
 padding-right:50px;
  background-color: white;
  opacity: 0.8;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column; 
  border-radius: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`; 
const SignupLayout = ({ children }) => {
  return (
    <Background>
      <Tray>
        <h1>Welcome!</h1>
        <LogoContainer>
          <Link href="/"><a><img
            src="/images/logo-img.png"
            style={{ width: "150px", height: "auto" }}
          /></a></Link>
          <img
            src="/images/logo.png"
            style={{ width: "150px", height: "auto" }}
          />
        </LogoContainer>
        <div style={{marginTop:'20px', minWidth:'400px'}}>
        {children}
        </div>
      </Tray>
      
    </Background>
  );
};

export default SignupLayout;
