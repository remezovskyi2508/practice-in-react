import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function SearchForm({ data, onMouseEnter }) {
  return (
    <div className={css.wrapper}>
      <ul className={css.galleryList}>
        {data.map(image => (
          <li key={image.id} onMouseEnter={onMouseEnter}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
