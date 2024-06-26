import "./Header.scss";


export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="header__shadow">
            <h1 className="header__title">StoryTime</h1>
        </div>
        <div className="header__subheader header__subheader--red">
            <h3 className="header__subtitle header__subtitle--red">
                what books await you?
            </h3>
        </div>
        <div className="header__subheader header__subheader--blue">
            <h3 className="header__subtitle header__subtitle--blue">
                find your next read
            </h3>
        </div>
      </nav>
    </>
  );
}
