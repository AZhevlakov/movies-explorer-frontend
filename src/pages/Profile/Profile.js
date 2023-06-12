import './Profile.css';
import React, { useState } from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [buttonEditText, setButtonEditText] = useState('Редактировать');

  function handleSignout() {
    // setIsViewer(false);
    // localStorage.removeItem('token');
    navigate("/", { replace: true });
  }

  function handleEditButton() {
    setIsEdit(!isEdit);
    setButtonEditText(isEdit ? "Редактировать" : "Сохранить");
  }

  return (
    <PageLayout isFooter={false}>
      <section className="section profile">
        <div className="profile__user-info">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <ul className="profile__items">
            <li className="profile__item">
              <p className="profile__item-key">Имя</p>
              <input
                value="Виталий"
                disabled={!isEdit}
                type="text"
                name="name"
                className="name profile__item-value"
              />
            </li>
            <li className="profile__item">
              <p className="profile__item-key">E-mail</p>
              <input
                value="pochta@yandex.ru"
                disabled={!isEdit}
                type="email"
                name="email"
                className="email profile__item-value"
              />
            </li>
          </ul>
        </div>
        <div className="profile__edit">
          <button onClick={handleEditButton} className="link profile__button-edit">{buttonEditText}</button>
          <button onClick={handleSignout} className="link profile__signout">Выйти из аккаунта</button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Profile;
