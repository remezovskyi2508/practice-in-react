import css from './ImageCard.module.css';
import { FcLikePlaceholder } from 'react-icons/fc';
import clsx from 'clsx';

export default function ImageCard({
  image: {
    urls: { small },
    likes,
    description,
    user: { name },
    id,
  },
  onMouseEnter,
  onMouseLeave,
  isHovered,
  onClick,
}) {
  return (
    <div className={css.cardWrapper}>
      <img
        className={css.img}
        src={small}
        alt={description}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
      <div
        className={clsx(css.infoWrap, isHovered && css.infoVisible)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p className={css.infoLogo}>
          Author:
          <span className={css.infoValue}>{name ? name : 'none'}</span>
        </p>

        <p className={css.infoLogo}>
          <FcLikePlaceholder />
          <span className={css.infoValue}>{likes}</span>
        </p>
      </div>
    </div>
  );
}
