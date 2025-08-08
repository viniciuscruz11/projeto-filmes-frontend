import './style.css'
import GameofThronesImage from '../../assets/game-of-thrones.jpeg'
import HowIMet from '../../assets/how i met your mother.jpeg'
import PeakyBlinders from '../../assets/peaky blinders.jpg'
import TheOffice from '../../assets/the office.jpg'
import api from '../../services/api'
import React, { useState, useEffect } from 'react';


function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('http://www.omdbapi.com/?apikey=1c7e315c');
        if (!response.ok) {
          throw new Error('Erro ao buscar filmes');
        }
        const data = await response.json();
        if (data.Response === "True") {
          setMovies(data.Search); // Acesse o array de filmes
          setFilteredMovies(data.Search); // Inicialmente, todos os filmes são exibidos
        } else {
          throw new Error(data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    // Filtra os filmes quando o searchQuery mudar
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  return (

    <div className='body'>

      <aside className='container-menu'>
        <div className='icones'>
          <button className='icone-user'>
            <i class="ri-user-line"></i>
          </button>

          <button className='icone-pesquisar'>
            <i class="ri-search-line"></i>
          </button>

          <button className='icone-home'>
            <i class="ri-home-4-line"></i>
          </button>

          <button className='icone-assistir'>
            <i class="ri-slideshow-3-line"></i>
          </button>

          <button className='icone-variaveis'>
            <i class="ri-apps-line"></i>
          </button>

          <button className='icone-config'>
            <i class="ri-settings-3-line"></i>
          </button>
        </div>
      </aside>

      <section>

        <header className='container-pesquisar'>
          <i class="ri-search-line"></i>
          <input name='Pesquisar' type='text' placeholder='Pesquisar' value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}></input>
        </header>

        <div className='container-filmes'>

          <div className='filmes'>
            <img src={HowIMet} />
            <h3>How i met your mother</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={TheOffice} />
            <h3>The office</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={PeakyBlinders} />
            <h3>Peaky blinders</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={GameofThronesImage} />
            <h3>Game of thrones</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={HowIMet} />
            <h3>How i met your mother</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={TheOffice} />
            <h3>The office</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={PeakyBlinders} />
            <h3>Peaky blinders</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={GameofThronesImage} />
            <h3>Game of thrones</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={HowIMet} />
            <h3>How i met your mother</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={TheOffice} />
            <h3>The office</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={PeakyBlinders} />
            <h3>Peaky blinders</h3>
            <h4>2014</h4>
          </div>

          <div className='filmes'>
            <img src={GameofThronesImage} />
            <h3>Game of thrones</h3>
            <h4>2014</h4>
          </div>
        </div>

        {!loading && !error && filteredMovies.map(movie => (
          <div key={movie.imdbID} className='filmes'>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <h4>{movie.Year}</h4>
          </div>
        ))}

      </section >
    </div >
  )
}

export default Home
