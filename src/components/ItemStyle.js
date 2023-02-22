import styled from 'styled-components'

export const ItemStyle = styled.div`
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item-info {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    input[type='checkbox'] {
      margin-right: 8px;
      width: 12px;
      cursor: pointer;
    }
    p {
      max-width: 100%;
      height: auto;
      line-break: anywhere;
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
      transition: 0.5s all ease;
    }
    button:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  }
`
