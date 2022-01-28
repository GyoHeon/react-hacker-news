import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Head>
      <Link to="/">
        <img src="image/logo.png" alt="Hacker news logo" />
        <div>
          <span>React</span>
          <h2>Hacker News</h2>
        </div>
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
    width: 180px;
    padding: 13px 1px 13.73px 20px;
    display: flex;
    img {
      margin: 4px 8px 4px 0;
    }
    div {
      span {
        font-size: 10px;
        font-weight: 300;
        opacity: 0.4;
      }
      h2 {
        font-size: 18px;
        font-weight: 300;
      }
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
