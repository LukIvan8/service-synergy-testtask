import DefaultButton from "./button";
import "./contact-modal.scss";

interface Props {
  hideModal: () => void;
}

const ContactModal = ({ hideModal }: Props) => {
  // Модалка вне контейнера дабы сделать простейший вариант закрытия модалки кликнув вне неё
  // Для изменения кода потребуется продумать другую логику
  return (
    <>
      <div onClick={hideModal} className="modal__container"></div>
      <form onSubmit={(e) => e.preventDefault()} className="modal">
        <p className="modal__title">Contact Us</p>
        <p className="modal__secondary">
          We are ready to become reliable partners in your business. Leave us
          your phone number, mail, or messenger
        </p>
        <input
          className="modal__input"
          type="text"
          placeholder="Your contacts"
        />
        <DefaultButton handleClick={hideModal} title="Send" />
      </form>
    </>
  );
};

export default ContactModal;
