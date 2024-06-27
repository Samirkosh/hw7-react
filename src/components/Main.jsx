import { MyButton } from "./uiButton/MyButton";
import styled from "styled-components";

export function Main({ movie, deleteMovieHandler, openAndCloseModalHandler }) {
  return (
    <MainBlock>
      <h2>АКЫРКЫ ЧЫККАН ТАСМАЛАР</h2>
      <MoviesContainer>
        {movie.map((item) => (
          <MovieBlock key={item.movieId}>
            <MovieImages src={item.movieImage} alt="Чон кыз" />
            <WrapperInfo>
              <div>
                <MovieTitle>{item.movieTitle}</MovieTitle>
                <MovieStatus>{item.movieStatus}</MovieStatus>
              </div>
              <WrapperBtn>
                <MyButton
                  onClick={() => deleteMovieHandler(item.movieId)}
                  variant="danger"
                >
                  Удалить
                </MyButton>
                <MyButton
                  onClick={() => openAndCloseModalHandler(item)}
                  variant="contained"
                >
                  Изменить
                </MyButton>
              </WrapperBtn>
            </WrapperInfo>
          </MovieBlock>
        ))}
      </MoviesContainer>
    </MainBlock>
  );
}

export default Main;

const MainBlock = styled.main`
  padding: 30px;
`;

const MoviesContainer = styled.section`
  margin-top: 30px;
  display: flex;
  gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
`;

const MovieBlock = styled.div`
  border: 1px solid white;
  padding: 10px 20px 6px 20px;
  border-radius: 10px;

  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;

const MovieImages = styled.img`
  width: 250px;
`;

const WrapperInfo = styled.article`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const MovieTitle = styled.h4`
  font-size: larger;
`;

const MovieStatus = styled.p`
  color: green;
  font-weight: 500;
`;

const WrapperBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
