import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Cards } from './Components/Cards';
import { Pagination } from './Components/Pagination';
function App() {
  //managing anime objects in one single call
  const [animeArray, setAnimeArray] = useState([]);
  //managing url's state
  const [currentUrl, setCurrentUrl] = useState(
    'https://kitsu.io/api/edge/anime'
  );
  //handling pages number
  const [pageNumber, setPageNumber] = useState(0);

  //handling the loading
  const [loading, setLoading] = useState(false);

  // runs only one time or if any value in the provided array changes
  // we only wanna fetch when our component renders
  useEffect(() => {
    //fetching data and setting loading to true
    setLoading(true);
    //we don't wanna fetch the old things
    let cancel;
    axios
      .get(currentUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        //Single array of 24 objects in one fetch
        const animes = res.data.data;

        /****************** FOR THE CARDS ******************/
        //Return an array of objects with only images, title and link
        const extractedDetails = animes.map((anime) => {
          const { posterImage, titles, youtubeVideoId } = anime.attributes;
          return {
            image: posterImage.original,
            title: titles.en,
            id: youtubeVideoId,
          };
        });
        setAnimeArray(extractedDetails);
        // shows loading
        setLoading(false);
      });

    //cleanup function
    return () => {
      cancel();
    };
  }, [currentUrl]);

  // pagination functions
  function goToNextPage() {
    setPageNumber((prev) => (prev += 10));
    setCurrentUrl(
      `https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${pageNumber}`
    );
  }
  function goToPreviousPage() {
    setPageNumber((prev) => {
      if (prev === 0) return 0;
      return (prev -= 10);
    });
    setCurrentUrl(
      `https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=${pageNumber}`
    );
  }

  // loading condition
  if (loading) {
    return (
      <div>
        <div className="bg-dark text-center text-light h4 py-3">
          Top Anime Recommendations
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '80vh' }}
        >
          <img
            src="https://thumbs.gfycat.com/CarefreeFriendlyGuineapig-size_restricted.gif"
            alt="loading..."
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="bg-dark text-center text-light h4 py-3">
        Top Anime Recommendations
      </div>
      <Cards animes={animeArray} />
      <Pagination
        pageNumber={pageNumber}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
}

export default App;
