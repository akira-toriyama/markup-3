import * as S from "./Hero.styles";

export const Hero: React.FC = () => (
  <S.Hero>
    <S.Title>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/catch.svg" alt="Take A Break" />
    </S.Title>
    <S.ArrowImg src="/arrow.svg" />
  </S.Hero>
);
