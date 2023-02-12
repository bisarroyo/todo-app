import styled from 'styled-components'

export const TodosStyle = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  section:nth-child(1) {
    padding: 50px 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    height: 100%;
    position: sticky;
    box-shadow: 0px 1.2px 3.6px rgb(0 0 0 / 10%),
      0px 6.4px 14.4px rgb(0 0 0 / 10%);
    box-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, 0.1),
      0px 6.4px 14.4px rgba(0, 0, 0, 0.1);
  }
  section:nth-child(2) {
    height: 100%;
    /* overflow-y: scroll; */
    padding: 50px 30px;
    background-color: rgba(0, 0, 0, 0.02);
  }

  section:nth-child(3) {
    padding: 50px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-left: 1px solid rgba(0, 0, 0, 0.3);
    height: 100%;
    position: sticky;
    box-shadow: 0px 1.2px 3.6px rgb(0 0 0 / 10%),
      0px 6.4px 14.4px rgb(0 0 0 / 10%);
    box-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, 0.1),
      0px 6.4px 14.4px rgba(0, 0, 0, 0.1);
  }
`
