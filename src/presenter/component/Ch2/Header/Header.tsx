import * as S from "./Header.style";

export const Header: React.FC = () => (
  <S.Header>
    <img src="/yamacafe-w.svg" style={{ width: "2rem" }} />
    <button type="button">Menu</button>
  </S.Header>
);
