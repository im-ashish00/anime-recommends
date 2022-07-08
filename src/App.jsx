import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Cards } from './Components/Cards';

function App() {
  //managing anime objects in one single call
  const [animeArray, setAnimeArray] = useState([]);
  //managing url's state
  const [currentUrl, setCurrentUrl] = useState(
    'https://api.jikan.moe/v4/top/anime'
  );

  // we only wanna fetch when our component renders
  useEffect(() => {
    //fetching data
    axios.get(currentUrl).then((res) => {
      //Single array of 24 objects in one fetch
      const animes = res.data.data;
      //Return an array of objects with only images, title and link
      const extractedDetails = animes.map((Anime) => {
        const { images, title_english, url } = Anime;
        return {
          image: images.webp.image_url,
          title: title_english,
          link: url,
        };
      });
      setAnimeArray(extractedDetails);
    });
  }, []);

  return (
    <div>
      <div className="bg-dark text-center text-light h4 py-3">
        Top Anime Recommendations
      </div>
      <Cards animes={animeArray} />
    </div>
  );
}

export default App;
