import React from "react";
import logo from "../../assets/imgs/Vulcan_logo_azul.png";
import { Link } from "react-router-dom";
import { StyledInput } from "../../components/Input/Input.styles.jsx";

import {
  Container,
  HeaderForm,
  StyledForm,
  ButtonForm,
  Logo,
  TitleForm,
  FooterForm,
} from "../../components/Form/Form.styles.jsx";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

export const Login = () => {
  return (
    <>
      <Container>
        <HeaderForm>
          <Logo src={logo} />
          <span>Vulcan</span>
          <span>Login</span>
        </HeaderForm>

        <StyledForm>
          <span>Tenha privilégios e</span>
          <TitleForm>Faça login em sua conta</TitleForm>

          <StyledInput>
            <input type="email" placeholder="Email" />
            <HiOutlineMail />
          </StyledInput>

          <StyledInput>
            <input type="password" placeholder="Senha" />
            <RiLockPasswordLine />
          </StyledInput>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <ButtonForm>login</ButtonForm>
          </div>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            Não tem uma conta?
            <Link to={"/register"}> Register</Link>
          </div>
        </StyledForm>

        <FooterForm></FooterForm>
      </Container>
    </>
  );
};
