import { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/App.css';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';

function App() {
  const [searchValue, setSearchValue] = useState(''); // Working code for save search word...
  const [saveFetchData, setFetchData] = useState(null);
  const [isHovered, setIsHovered] = useState(true);

  function handleOnSubmitForm(event) {
    event.preventDefault();
    const form = event.target;
    const searchWord = form.elements.searchForm.value.trim();
    setSearchValue(searchWord);
    form.reset();
  }

  function handleMouseEnter(imageId) {
    setIsHovered(imageId);
    console.log(isHovered);
  }

  const params = {
    url: 'https://api.unsplash.com/search/photos/',
    key: 'KTgPCjIl5bHSKS3rJgiOFvqns88NWiKXgvLhb7v-WzM',
    page: 1,
    per_page: 15,
    query: 'sport',
    orientation: 'landscape',
  };

  useEffect(() => {
    async function fetchImageGallery() {
      const { url, key, page, per_page, query, orientation } = params;
      const response = await axios.get(
        `${url}?client_id=${key}&page=${page}&per_page=${per_page}&query=${query}&orientation=${orientation}`
      );
      setFetchData(response.data.results);
    }
    fetchImageGallery();
  }, []);
  console.log(saveFetchData);

  return (
    <>
      <h1 className="header">Search your image</h1>
      <SearchForm onSubmit={handleOnSubmitForm} />
      {saveFetchData !== null && (
        <ImageGallery
          data={saveFetchData}
          onMouseEnter={handleMouseEnter}
          isHovered={isHovered}
        />
      )}
    </>
  );
}

export default App;
