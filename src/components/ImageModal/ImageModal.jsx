import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { FcLikePlaceholder } from 'react-icons/fc';
import { AiFillCloseSquare } from 'react-icons/ai';

export default function ImageModal({
  selectedImg: { url, description, likes, author },
  closeModal,
  isModalOpen,
  onMouseEnter,
  onMouseLeave,
  isHovered,
}) {
  console.log('Selected Image:', url, description, likes, author);
  return (
    <Modal
      isOpen={isModalOpen}
      contentLabel="image modal"
      onRequestClose={closeModal}
      className={css.modal}
      overlayClassName={css.overlay}
      appElement={document.getElementById('root')}
    >
      <>
        <button className={css.btn} type="button" onClick={closeModal}>
          <AiFillCloseSquare className={css.iconClose} />
        </button>
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <img className={css.modalImage} src={url} alt={description} />
          {isHovered && (
            <div className={css.infoWrap}>
              <p className={css.infoLogo}>
                Author:
                <span className={css.infoValue}>
                  {author ? author : 'none'}
                </span>
              </p>
              <p className={css.infoLogo}>
                Description:
                <span className={css.infoValue}>
                  {description ? description : 'none'}
                </span>
              </p>

              <p className={css.infoLogo}>
                <FcLikePlaceholder className={css.likeIcon} />
                <span className={css.infoValue}>{likes ? likes : 0}</span>
              </p>
            </div>
          )}
        </div>
      </>
    </Modal>
  );
}
