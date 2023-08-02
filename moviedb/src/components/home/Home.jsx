import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (query.trim() !== '') {
      const apiKey = '79bdba32a6b4d344e0185ab82293af84';
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

      fetch(url)
        .then(response => response.json())
        .then(response => setData(response.results)) // Extracting the 'results' array from the API response
        .catch(err => console.error(err));
    } else {
      setData(null);
    }
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleShowPopup = movie => {
    setSelectedMovie(movie);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleBackgroundClick = event => {
    // Vérifier si le clic a eu lieu en dehors de la div popup et du bouton pour fermer
    if (
      showPopup &&
      event.target.classList.contains('popup-background') &&
      !event.target.classList.contains('popup-close-btn')
    ) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    const popupElement = document.querySelector('.popup');
    if (popupElement && showPopup) {
      popupElement.classList.add('popup-appear');
    } else if (popupElement && !showPopup) {
      popupElement.classList.remove('popup-appear');
    }
  }, [showPopup]);

  return (
    <section className='research'>
      <form>
        <label>
          <h1>Dès, o'man, quo c'est qu'on arguette euc' soir ?</h1>
        </label>
        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          placeholder="Tapote me quo c'est que té veux vir"
        />
      </form>
      <div className='result'>
        {data && data.length > 0 ? (
          <div>
            <h2>Tiens, guette ça :</h2>
            {data.map(movie => (
              <div className='datas' key={movie.id} onClick={() => handleShowPopup(movie)}>
                <h3>{movie.title}</h3>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>Y a rin, là</p>
        )}
      </div>

      {showPopup && selectedMovie && (
        <div className='popup-background' onClick={handleBackgroundClick}>
          <div className='popup'>
            <button className='popup-close-btn' onClick={handleClosePopup}>
              X
            </button>
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
