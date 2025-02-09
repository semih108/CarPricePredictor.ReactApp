import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  background: #f6f6f6;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);

  .title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
    color: #18216d;
  }

  .subtitle {
    font-size: 1.125rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #666;
  }

  .form-elements {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .form-item {
    width: 100%;

    select, input {
      width: 100%;
      padding: 1rem 1.25rem;
      border: 2px solid #eee;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: white;
      color: #333;

      &:focus {
        border-color: #2e186a;
        outline: none;
      }

      &:disabled {
        background: #f6f6f6;
        cursor: not-allowed;
      }

      &::placeholder {
        color: #999;
      }
    }
  }

  button {
    background: #2e186a;
    color: white;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: auto;
    min-width: 180px;

    &:hover {
      background: #1f104d;
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 1045px) {
    max-width: 90%;
    margin-top: 2rem;
    padding: 2rem;
  }

  @media only screen and (max-width: 575px) {
    padding: 1.5rem;
  }
`;

export const ButtonContainer = styled("div")`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`; 