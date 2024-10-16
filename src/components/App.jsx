import { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/App.css';
import SearchForm from './SearchForm/SearchForm';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageModal from './ImageModal/ImageModal';

function App() {
  const [searchValue, setSearchValue] = useState(''); // Working code for save search word...
  const [saveFetchData, setFetchData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  function isCloseModal() {
    setSelectedImg('');
    setIsModalOpen(false);
  }
  function handleOnSubmitForm(event) {
    event.preventDefault();
    const form = event.target;
    const searchWord = form.elements.searchForm.value.trim();
    setSearchValue(searchWord);
    form.reset();
  }

  function handleOnClick(image) {
    setSelectedImg({
      url: image.urls.regular,
      description: image.description || 'No description available',
      likes: image.likes,
      author: image.user.name,
    });
    setIsModalOpen(true); // Открываем модалку
  }

  function handleMouseEnter(imageId) {
    setIsHovered(imageId);
  }

  function handleMouseLeave(imageId) {
    setIsHovered(false);
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
    const { url, key, page, per_page, query, orientation } = params;
    async function fetchImageGallery() {
      try {
        const response = await axios.get(
          `${url}?client_id=${key}&page=${page}&per_page=${per_page}&query=${query}&orientation=${orientation}`
        );
        setFetchData(response.data.results);
      } catch (error) {
        console.error('Error fetching images;', error);
      } finally {
      }
    }
    fetchImageGallery();
  }, []);

  return (
    <>
      <h1 className="header">Search your image</h1>
      <SearchForm onSubmit={handleOnSubmitForm} />
      {saveFetchData !== null && (
        <ImageGallery
          data={saveFetchData}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          isHovered={isHovered}
          onMouseClick={handleOnClick}
        />
      )}
      <ImageModal
        selectedImg={selectedImg}
        closeModal={isCloseModal}
        isModalOpen={isModalOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      />
    </>
  );
}

export default App;
