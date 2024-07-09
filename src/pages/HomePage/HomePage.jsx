import Header from "../../components/Header/Header";
import "./HomePage.scss";
import abel from "../../assets/images/abel.png";
import prince from "../../assets/images/prince.jpg";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [data, setData] = useState();
  const { id } = useParams();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    async function getProfile() {
      const result = await axios.get(
        `http://localhost:8080/users/profile/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(result);
    }
    getProfile();
  }, []);

  console.log(data);

  if (!data) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <Header />
        <main className="home">
          <h1 className="home__title">Welcome, {data.data.first_name} </h1>
          <section className="home__options">
            <div className="home__option">
              <Link className="home__link" to={`/profile/${id}`}>
                <img className="home__image" src={abel} alt="profile" />
                <h3 className="home__subtitle">View your profile</h3>
              </Link>
            </div>
            <div className="home__option">
              <Link className="home__link" to={`/recommendations/${id}`}>
                <img
                  className="home__image"
                  src={prince}
                  alt="recommendations"
                />
                <h3 className="home__subtitle">Get a new recommendation</h3>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
