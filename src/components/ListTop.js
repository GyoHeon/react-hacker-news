import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import styled from "styled-components";

function ListTop() {
  const dispatch = useDispatch();
  const sortMode = useSelector((state) => state.sort.sortMode);

  const sortNewHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "NEW" });
  };
  const sortTopHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "TOP" });
  };

  return (
    <Top>
      <div>
        <button
          onClick={sortNewHandler}
          className={sortMode === "new" ? "selected" : ""}
        >
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
        <button
          onClick={sortTopHandler}
          className={sortMode === "top" ? "selected" : ""}
        >
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
