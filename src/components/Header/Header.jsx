import "./Header.scss";
import book from '../../assets/images/book.svg'

export default function Header() {
  return (
    <>
      <nav className="header">
        <div className="header__shadow">
            <h1 className="header__title">StoryTime</h1>
        </div>
        <div className="header__subheader header__subheader--red">
            <h3 className="header__subtitle header__subtitle--red">
                where shall we go?
            </h3>
        </div>
        <div className="header__subheader header__subheader--blue">
            <h3 className="header__subtitle header__subtitle--blue">
                click here to find out
            </h3>
        </div>
      </nav>
    </>
  );
}
