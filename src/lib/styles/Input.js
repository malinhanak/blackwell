import styled, { css } from 'styled-components';

export const inputCommons = css`
  padding: 1rem;
  height: 50px;
  border: 1px solid transparent;
  font-size: 0.9375rem;
  margin-bottom: 0;
`;

export const Input = styled.input`
  ${inputCommons}
  margin-right: 0;
  border: 1px solid lightgray;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  &:focus {
    border: black;
  }

  ::placeholder {
    color: lightgray;
    opacity: 1;
    font-size: 0.9375rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-right: 0;
  margin-bottom: 1rem;

  ${(props) =>
    props.noMargin &&
    css`
      margin: 0;
    `}

  .label,
  .error {
    font-size: 0.8rem;
  }
  .label {
    color: black;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  span.required {
    margin: auto 0 auto 0.5rem;
    padding: 0;
    color: red;
  }
  span.error {
    margin-top: 0.3rem;
    color: red;
  }
  input.error {
    border-color: red;
  }
  input {
    width: 100%;
    margin-right: 0;
  }
`;
