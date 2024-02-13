import React from "react";
import logo from "../../assets/imgs/Vulcan_logo_azul.png";
import { Link } from "react-router-dom";
import { StyledInput } from "../../components/Input/Input.styles.jsx";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

import {
  Container,
  HeaderForm,
  StyledForm,
  ButtonForm,
  Logo,
  TitleForm,
  FooterForm,
} from "../../components/Form/Form.styles.jsx";

export const Register = () => {
  return (
    <>
      <Container>
        <HeaderForm>
          <Logo src={logo} />
          <span>Vulcan</span>
          <span>Cadastro</span>
        </HeaderForm>

        <StyledForm>
          <span>Tenha privilégios e</span>
          <TitleForm>Crie sua conta</TitleForm>

          <StyledInput>
            <input type="text" placeholder="Username" />
            <FaRegUser />
          </StyledInput>

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
            <ButtonForm>Cadastro</ButtonForm>
          </div>

          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            Já tem uma conta?
            <Link to={"/login"}> Login</Link>
          </div>
        </StyledForm>

        <FooterForm></FooterForm>
      </Container>
    </>
  );
};
