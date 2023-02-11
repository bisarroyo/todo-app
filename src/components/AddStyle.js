import styled from 'styled-components'

export const AddStyle = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .add-input {
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border-radius: 5px 5px 0 0;
    border: 1px solid rgba(0,0,0,0.3);
  }
  .add-input:focus-visible {
    outline: none;
  }
  .add-submenu {
    width: 100%;
    height: 50px;
    background-color: rgba(0,0,0,0.02);
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 5px 5px;
    border: 1px solid rgba(0,0,0,0.3);
    border-top: none;

    .add-date {
      .react-date-picker__wrapper {
        border-radius: 5px;
        padding: 0 5px;
        font-size: 16px;
      }
      svg {
        font-size: 20px;
      }
    }

    .add-btn {
      padding: 5px 25px;
      border: 1px solid rgba(0,0,0,0.3);
      background-color: #FFFFFF;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`
