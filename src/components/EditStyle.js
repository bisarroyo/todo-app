import styled from 'styled-components'

export const EditStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 35px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  input {
    width: 100%;
    padding: 0 10px;
    border: none;
  }
  input:focus-visible {
    outline: none;
  }
  button {
    border: none;
    background-color: transparent;
    font-size: 17px;
    margin-right: 10px;
    cursor: pointer;
  }
`
