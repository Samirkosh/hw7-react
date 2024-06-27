import { MyButton } from "./uiButton/MyButton";
import styled from "styled-components";

function Header({ openAndCloseModalHandler }) {
  return (
    <StyledHeader>
      <Logo src="https://shorturl.at/TjVav" alt="logo" />
      <StyledNav>
        <a href="#">Фильмы</a>
        <a href="#">Сериалы</a>
        <a href="#">Мультфильмы</a>
        <a href="#">Windows</a>
        <a href="#">Календарь</a>
      </StyledNav>
      <div>
        <WatchMovie>Смотреть 30 дней за 1с</WatchMovie>
      </div>
      <div>
        <MyButton variant="outlined" onClick={openAndCloseModalHandler}>
          Добавить
        </MyButton>
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const Logo = styled.img`
  width: 130px;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
  a {
    color: white;
    font-weight: 900;
  }
`;

const WatchMovie = styled.button`
  width: 300px;
  background-color: orange;
  height: 40px;
  color: white;
  font-size: large;
  font-weight: 700;
  border-radius: 8px;
  border: 1px solid red;
`;
