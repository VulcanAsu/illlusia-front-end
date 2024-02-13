import styled from "styled-components";

export const StyledInput = styled.label`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: #373b48;
  border-radius: 1.1rem;

  padding: 0 1rem;
  margin: 0.5rem 0;

  &::placeholder {
    color: #7a7b7c;
  }

  input {
    color: #fff;

    font-size: 1rem;
    width: 100%;
    height: 50px;
    padding-right: 0.5rem;
  }

  svg {
    font-size: 1.2rem;
  }
`;
