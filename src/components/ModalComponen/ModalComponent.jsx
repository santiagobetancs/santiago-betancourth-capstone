import "./ModalComponent.scss";

export default function ModalComponent({ openModal, setOpenModal }) {
  if (!openModal) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal__box">
        <h1 className="modal__text">MODAL</h1>
        <button
          onClick={() => {
            setOpenModal(false);
          }}
          className="modal__close"
        >
          Close Modal
        </button>
      </div>
    </div>
  );
}
