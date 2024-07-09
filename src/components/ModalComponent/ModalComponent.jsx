import "./ModalComponent.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import abel from "../../assets/images/abel.png";

export default function ModalComponent({ openModal, setOpenModal, profile }) {

  const baseURL = import.meta.env.VITE_API_URL

  if (!openModal) {
    return null;
  }

  const { first_name, last_name, email, username, password } = profile;

  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    username: username,
    password: password,
  });

  const onChange = async (e) => {
    try {
      e.preventDefault();
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(user);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios.put(`${baseURL}/users/indiv/${id}`, user);
      await axios.put(`${baseURL}/users/books/${id}`, {
        username: user.username
      })
      navigate(`/profile/${user.username}`);
      setOpenModal(false);
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className="modal">
      <form onSubmit={onSubmit} className="modal__box">
        <h1 className="modal__title">Edit Profile</h1>
        <div className="modal__container">
          <div className="modal__information">
            <img className="modal__image" src={abel} alt="profile image" />
          </div>
          <div className="modal__information">
            <label className="modal__label">
              First Name
              <input
                defaultValue={first_name}
                onChange={onChange}
                type="text"
                name="first_name"
                className="modal__input"
              />
            </label>
            <label className="modal__label">
              Last Name
              <input
                defaultValue={last_name}
                onChange={onChange}
                type="text"
                name="last_name"
                className="modal__input"
              />
            </label>
            <label className="modal__label">
              User Name
              <input
                defaultValue={username}
                onChange={onChange}
                type="text"
                name="username"
                className="modal__input"
              />
            </label>
            <label className="modal__label">
              Email
              <input
                className="modal__input"
                defaultValue={email}
                onChange={onChange}
                type="text"
                name="email"
                
              />
            </label>
            <label className="modal__label">
              Password
              <input
                defaultValue={password}
                onChange={onChange}
                type="text"
                name="password"
                className="modal__input"
              />
            </label>
            <div className="modal__buttons">
              <button type="submit" className="modal__button">
                Save
              </button>
              <button
                className="modal__button"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
