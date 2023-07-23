import React from 'react';
import './PopupProfileEdit.css';
import Popup from '../Popup';
import LabelInputForm from '../../LabelInputForm/LabelInputForm';
import ButtonForm from '../../../UI/Button/ButtonForm/ButtonForm';
import { useFormValidation } from '../../../utils/hooks/useFormValidation';
import { useContext } from "react";
import { AuthContext } from '../../../contexts/AuthContext';

const PopupProfileEdit = ({ isOpen, onClose, onSubmit }) => {
  const { currentUser } = useContext(AuthContext);
  const { values, errors, isValid, handleChange } = useFormValidation({userName: currentUser.name, email: currentUser.email});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.userName || !values.email) {
      return;
    }
    onSubmit(values.userName, values.email);
  };

  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit}
        className="form-profile-edit"
        name="profile-edit"
        noValidate
      >
        <fieldset className="form-profile-edit__set">
          <legend className="form-profile-edit__heading">
            Редактировать профиль
          </legend>
          <LabelInputForm
            values={values}
            errors={errors}
            handleChange={handleChange}
            text="Имя"
            name="userName"
            type="text"
            placeholder="Имя пользователя"
            minLength="2"
            maxLength="30"
            required={true}
          />
          <LabelInputForm
            values={values}
            errors={errors}
            handleChange={handleChange}
            text="E-mail"
            name="email"
            type="email"
            placeholder="mail@example.com"
            required={true}
          />
          <ButtonForm className="form-profile-edit__button-submit" text="Сохранить" isActive={isValid && (values.userName !== currentUser.name || values.email !== currentUser.email)} />
        </fieldset>
      </form>
    </Popup>
  );
};

export default PopupProfileEdit;
