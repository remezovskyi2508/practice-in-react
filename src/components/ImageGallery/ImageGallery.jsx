import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function SearchForm({ data, onMouseEnter, isHovered }) {
  return (
    <div className={css.wrapper}>
      <ul className={css.galleryList}>
        {data.map(image => (
          <li key={image.id}>
            <ImageCard
              image={image}
              onMouseEnter={() => onMouseEnter(image.id)}
              isHovered={isHovered === image.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
