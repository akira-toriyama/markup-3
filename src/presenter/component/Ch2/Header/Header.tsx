import * as S from "./Header.style";

export const Header: React.FC = () => (
  <S.Header>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/yamacafe-w.svg" alt="YAMACAFE" />

    <nav className="nav">
      <ul>
        <li>
          <a href="#">ホーム</a>
        </li>
        <li>
          <a href="#">こだわりメニュー</a>
        </li>
        <li>
          <a href="#">お知らせ</a>
        </li>
        <li>
          <a href="#">営業時間</a>
        </li>
      </ul>
    </nav>

    <button type="button" className="menuBtn">
      <span className="srOnly">Menu</span>
    </button>
  </S.Header>
);
