import styled from 'styled-components'

export const ItemStyle = styled.div`
  padding: 30px 20px 10px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item-info {
    display: flex;
    flex-wrap: nowrap;
    cursor: pointer;

    input[type="checkbox"] {
      margin-right: 8px;
      width: 12px;
      cursor: pointer;
    }
    .todo-done {
      text-decoration: line-through;
    }
  }

  .item-controls {
    display: flex;
    flex-wrap: nowrap;
    button {
      border: none;
      background-color: transparent;
      font-size: 20px;
      margin-left: 20px;
      cursor: pointer;
    }
  }
`
