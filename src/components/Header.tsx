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
        <img src="image/questionBtn.png" alt="Question button" />
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
    padding: 13px 1px 13.73px 20px;
    display: flex;
    align-items: center;
    img {
      margin: 4px 9.48px 4px 0;
    }
    h1 {
      font-size: 14px;
      font-weight: 500;
      font-style: italic;
      width: 60px;
      color: ${(props) => props.theme.textCommentColor};
    }
  }
  section {
    margin-right: 12px;
    img {
      padding: 9px;
      margin: 12px 0;
    }
  }
`;

export default Header;
