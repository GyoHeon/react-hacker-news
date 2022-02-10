import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import InfoModal from "./InfoModal";

function Header({ toggle }: any) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const modalToggle = () => {
    setOpenModal(!openModal);
  };

  return (
    <Head>
      <Link to="/">
        <img alt="Hacker news logo" />
        <h1>ReHacker News</h1>
      </Link>
      <section>
        <button onClick={toggle}>
          <img className="themeBtn" alt="Theme change button" />
        </button>
        <button onClick={modalToggle}>
          <img src="image/infoBtn.png" alt="Info button" />
          <InfoModal open={openModal} />
        </button>
      </section>
    </Head>
  );
}

const Head = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  a {
    width: 145px;
    padding: 16px 0 12px 20px;
    display: flex;
    img {
      display: block;
      width: 32px;
      height: 32px;
      margin-right: 8px;
      content: url(${(props) => props.theme.header.logo});
    }
    h1 {
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
      font-style: italic;
      margin-top: 1px;
      color: ${(props) => props.theme.textCommentColor};
    }
  }
  section {
    margin: 14px 20px 14px;
    button {
      width: 32px;
      height: 32px;
      margin-left: 8px;
      &:hover {
        cursor: pointer;
      }
      img {
        display: block;
        width: 32px;
        height: 32px;
      }
      .themeBtn {
        content: url(${(props) => props.theme.header.themeBtn});
      }
    }
  }
`;

export default Header;
