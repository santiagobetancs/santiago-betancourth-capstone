import "./ModalComponent.scss";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ModalComponent({ openModal, setOpenModal, profile }) {
  if (!openModal) {
    return null;
  }

  const { first_name, last_name, email, username, password } = profile

  const { id } = useParams();
  const navigate = useNavigate()

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

  console.log(user)

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/users/indiv/${id}`, user)
    navigate(`/profile/${user.username}`)
    setOpenModal(false)
  }

  return (
    <div className="modal">
      <form onSubmit={onSubmit} className="modal__box">
        <h3 className="modal__text">EDIT</h3>
        <button onClick={(() => setOpenModal(false))}>
            X
        </button>
        <div className="modal__container">
          <label className="modal__label">
            First Name
            <input defaultValue={first_name} onChange={onChange} type="text" name="first_name" />
          </label>
        </div>
        <div className="modal__container">
          <label className="modal__label">
            Last Name
            <input defaultValue={last_name} onChange={onChange} type="text" name="last_name" />
          </label>
        </div>
        <div className="modal__container">
          Username
          <label className="modal__label">
            <input defaultValue={username} onChange={onChange} type="text" name="username" />
          </label>
        </div>
        <div className="modal__container">
          Email
          <label className="modal__label">
            <input defaultValue={email} onChange={onChange} type="text" name="email" />
          </label>
        </div>
        <div className="modal__container">
          Password
          <label className="modal__label">
            <input defaultValue={password} onChange={onChange} type="text" name="password" />
          </label>
        </div>
        <button
          type="submit"
          className="modal__close"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
