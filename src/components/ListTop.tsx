import styled from "styled-components";

function ListTop() {
  return (
    <Top>
      <div>
        <button>
          <img src="image/check.svg" alt="check mark" />
          NEW
        </button>
        <button>
          <img src="image/check.svg" alt="check mark" />
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
  margin: 0 20px 20px;
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
      img {
        width: 23px;
        height: 23px;
        padding: 7px 6px 7px 6px;
      }
    }
  }
  button {
    img {
      height: 20px;
      width: 20px;
    }
  }
`;

export default ListTop;
