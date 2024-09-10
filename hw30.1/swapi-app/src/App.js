import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchPerson, clearData } from './store/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { data, loading, error, selectedPerson, personLoading, personError } = useSelector(state => state);
  const [personId, setPersonId] = useState('');

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setPersonId(event.target.value);
  };

  const handleViewDetails = () => {
    if (personId) {
      dispatch(fetchPerson(personId));
    }
  };

  const handleClearData = () => {
    dispatch(clearData());
    setPersonId('');
  };

  const formatPersonData = (person) => {
    return `
      Name: ${person.name}
      Height: ${person.height} cm
      Mass: ${person.mass} kg
      Hair Color: ${person.hair_color}
      Skin Color: ${person.skin_color}
      Eye Color: ${person.eye_color}
      Birth Year: ${person.birth_year}
      Gender: ${person.gender}
      Homeworld: ${person.homeworld}
      Films: ${person.films.join(', ')}
      Species: ${person.species.join(', ')}
      Vehicles: ${person.vehicles.join(', ')}
      Starships: ${person.starships.join(', ')}
    `;
  };

  return (
    <div className="App">
      <h1>SWAPI Data</h1>

      {loading && <p>Loading characters...</p>}
      {error && <p>Error: {error}</p>}

      <div>
        <input
          type="number"
          value={personId}
          onChange={handleInputChange}
          placeholder="Enter person number"
        />
        <button onClick={handleViewDetails}>View Person Details</button>
      </div>

      {personLoading && <p>Loading person data...</p>}
      {personError && <p>Error: {personError}</p>}

      {selectedPerson && (
        <div className="PersonDetail">
          <p>
            {formatPersonData(selectedPerson)}
          </p>
        </div>
      )}

      <footer>
        <button onClick={handleClearData}>Clear Data</button>
      </footer>

     
    </div>
  );
}

export default App;
