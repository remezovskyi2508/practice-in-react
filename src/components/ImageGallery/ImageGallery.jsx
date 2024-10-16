import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function SearchForm({ data, onMouseEnter, onMouseLeave, isHovered, onMouseClick }) {
  return (
    <div className={css.wrapper}>
      <ul className={css.galleryList}>
        {data.map(image => (
          <li key={image.id}>
            <ImageCard
              image={image}
              onMouseEnter={() => onMouseEnter(image.id)}
              onMouseLeave={onMouseLeave}
              isHovered={isHovered === image.id}
              onClick={() =>onMouseClick(image)}
              />
          </li>
        ))}
      </ul>
    </div>
  );
}
