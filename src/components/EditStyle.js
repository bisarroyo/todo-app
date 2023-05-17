import styled from 'styled-components'

export const EditStyle = styled.form`
  width: 80%;
  .edit-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  .disabled {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  input {
    width: 100%;
    padding: 0 10px;
    border: none;
    background-color: transparent;
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
