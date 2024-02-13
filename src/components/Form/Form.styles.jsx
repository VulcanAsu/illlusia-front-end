import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: ${(props) => props.theme.colors.white};

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 40%,
      rgba(0, 0, 0, 0.5)
    ),
    url("https://wallpapercave.com/wp/wp5121792.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  span {
    font-size: 1.5rem;
  }
  span:first-of-type {
    margin-right: 7rem;
    margin-left: 0.5rem;
  }

  span:last-of-type {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

export const StyledForm = styled.form`
  color: ${(props) => props.theme.colors.white};
  max-width: 400px;
  width: 100%;
  margin-top: 5rem;
`;

export const TitleForm = styled.h1`
  margin: 1rem 0;
  font-size: 2.1rem 0;
`;

export const ButtonForm = styled.button`
  border-radius: 5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  font-size: 1.2rem;

  padding: ${(props) => props.width || ".8rem"};
  margin: 1rem 0;
  padding: 0.5rem 3rem;

  cursor: pointer;
  transition: all.5s;

  &:hover {
    background-color: ${(props) => props.theme.colors.deepBlue};
  }
`;

export const Logo = styled.img`
  width: 50px;
`;

export const FooterForm = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;
