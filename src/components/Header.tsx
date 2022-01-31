import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Head>
      <Link to="/">
        <img src="image/logo.png" alt="Hacker news logo" />
        <h1>ReHacker News</h1>
      </Link>
      <section>
        <img src="image/themeChangeBtn.png" alt="Theme change buton" />
        <img src="image/infoBtn.png" alt="Info button" />
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
      width: 32px;
      height: 32px;
      margin-right: 8px;
    }
    h1 {
      font-size: 14px;
      line-height: 16px;
      font-weight: 500;
      font-style: italic;
      color: ${(props) => props.theme.textCommentColor};
    }
  }
  section {
    margin: 14px 20px 14px;
    img {
      width: 32px;
      height: 32px;
      margin-left: 8px;
    }
  }
`;

export default Header;
