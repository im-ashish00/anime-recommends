import React from 'react';

export const Cards = ({ animes }) => {
  return (
    <div className="text-center">
      <div
        className="container my-3"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, auto)',
          textAlign: 'center',
        }}
      >
        {animes.map((anime) => {
          return (
            <div
              key={anime.title}
              className="card my-3 bg-light"
              style={{ width: '16rem' }}
            >
              <img
                className="card-img-top"
                src={anime.image}
                alt={anime.title}
                style={{ maxHeight: '250px' }}
              />
              <div className="card-body">
                <p className="card-text">{anime.title}</p>
                <a
                  href={`https://youtu.be/` + anime.id}
                  class="btn btn-outline-primary"
                  target="_blank"
                >
                  Know more...
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
