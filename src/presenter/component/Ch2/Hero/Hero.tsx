import * as S from "./Hero.styles";

export const Hero: React.FC = () => (
  <S.Hero h={window.innerHeight}>
    <S.Title>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/catch.svg" alt="Take A Break" />
    </S.Title>
    <S.ArrowImg src="/arrow.svg" />
  </S.Hero>
);
