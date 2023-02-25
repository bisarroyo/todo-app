import styled from 'styled-components'

export const FilterStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 15px;
  margin: 15px 0;

  button {
    padding: 5px 25px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    color: #000000;
    transition: 0.3s all ease;
  }
  button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .active-filter {
    background-color: rgba(0, 0, 0, 0.15);
  }
`
