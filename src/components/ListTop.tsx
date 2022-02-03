import styled from "styled-components";

function ListTop({ mode, newSort, topSort }: any) {
  console.log(mode);
  return (
    <Top>
      <div>
        <button onClick={newSort} className={mode === "new" ? "selected" : ""}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10.6L8.28571 13L14 7"
              stroke="#999999"
              stroke-linecap="round"
            />
          </svg>
          NEW
        </button>
        <button onClick={topSort} className={mode === "top" ? "selected" : ""}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10.6L8.28571 13L14 7"
              stroke="#999999"
              stroke-linecap="round"
            />
          </svg>
          TOP
        </button>
      </div>
      <button>
        <img src="image/viewModeChangeBtn.png" alt="view mode change button" />
      </button>
    </Top>
  );
}

const Top = styled.section`
  max-width: 335px;
  width: 100%;
  height: 20px;
  margin: 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    button {
      color: ${(props) => props.theme.textMenuColor};
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 4px;
      cursor: pointer;
    }
    .selected {
      color: ${(props) => props.theme.accentColor};
      path {
        stroke: ${(props) => props.theme.accentColor};
      }
    }
  }
  button {
    cursor: pointer;
    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export default ListTop;
