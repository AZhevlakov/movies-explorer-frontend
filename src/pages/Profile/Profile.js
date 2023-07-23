import './Profile.css';
import React, { useState, useContext, useEffect } from 'react';
import PageLayout from '../components/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as api from '../../utils/api/MainApi';
import PopupProfileEdit from '../../components/Popups/PopupProfileEdit/PopupProfileEdit';

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [isPopupProfileEditOpen, setIsPopupProfileEditOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.name);
      setUserEmail(currentUser.email);
    }
  }, [currentUser])

  function handleSignout() {
    setCurrentUser(null);
    localStorage.clear();
    navigate("/", { replace: true });
  }

  function saveProfile(name, email) {
    api.updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        setIsPopupProfileEditOpen(false);
        alert('Данные успешно сохранены.');
      })
  }

  function handleEditButton() {
    setIsPopupProfileEditOpen(true);
  }

  function onClosePopupProfileEdit() {
    setIsPopupProfileEditOpen(false);
  }

  return (
    <PageLayout isFooter={false}>
      <section className="section profile">
        <div className="profile__user-info">
          <h1 className="profile__title">{`Привет, ${userName}!`}</h1>
          <form>
            <ul className="profile__items">
              <li className="profile__item">
                <p className="profile__item-key">Имя</p>
                <p className="name profile__item-value">{userName}</p>
              </li>
              <li className="profile__item">
                <p className="profile__item-key">E-mail</p>
                <p className="email profile__item-value">{userEmail}</p>
              </li>
            </ul>
          </form>
        </div>
        <div className="profile__edit">
          <button onClick={handleEditButton} className="link profile__button-edit">Редактировать</button>
          <button onClick={handleSignout} className="link profile__signout">Выйти из аккаунта</button>
        </div>
      </section>
      <PopupProfileEdit isOpen={isPopupProfileEditOpen} onClose={onClosePopupProfileEdit} onSubmit={saveProfile} />
    </PageLayout>
  );
};

export default Profile;
