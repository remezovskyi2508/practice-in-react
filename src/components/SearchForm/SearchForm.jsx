import css from './SearchForm.module.css';
import { BsSearch } from 'react-icons/bs';

export default function SearchForm({ onSubmit }) {
  return (
    <div className={css.wrapper}>
      <form className={css.formWrap} onSubmit={onSubmit}>
        <input
          className={css.searchForm}
          type="text"
          autoComplete="off"
                  autoFocus
                  name='searchForm'
          placeholder="Search image..."
        />
        <button className={css.btn} type="submit">
          <BsSearch className={css.btnIcon} />
        </button>
      </form>
    </div>
  );
}
