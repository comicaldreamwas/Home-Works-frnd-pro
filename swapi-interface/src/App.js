import React from 'react';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">SWAPI</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="https://swapi.dev/api/"
          aria-label="SWAPI Endpoint"
          aria-describedby="basic-addon2"
        />
        <input
          type="text"
          className="form-control"
          placeholder="people/1/"
          aria-label="Query"
        />
        <button className="btn btn-primary" type="button">
          Get info
        </button>
      </div>
      <div className="card">
        <div className="card-body">
          <pre>
            {"{\n  \"name\": \"Luke Skywalker\",\n  \"height\": \"172\",\n  \"mass\": \"77\",\n  \"hair_color\": \"blond\",\n  \"skin_color\": \"fair\",\n  \"eye_color\": \"blue\",\n  \"birth_year\": \"19BBY\",\n  \"gender\": \"male\",\n  \"homeworld\": \"https://swapi.dev/api/planets/1/\",\n  \"films\": [\n    \"https://swapi.dev/api/films/1/\",\n    \"https://swapi.dev/api/films/2/\",\n    \"https://swapi.dev/api/films/3/\",\n    \"https://swapi.dev/api/films/6/\"\n  ],\n  \"species\": [],\n  \"vehicles\": [\n    \"https://swapi.dev/api/vehicles/14/\",\n    \"https://swapi.dev/api/vehicles/30/\"\n  ],\n  \"starships\": [\n    \"https://swapi.dev/api/starships/12/\",\n    \"https://swapi.dev/api/starships/22/\"\n  ],\n  \"created\": \"2014-12-09T13:50:51.644000Z\",\n  \"edited\": \"2014-12-20T21:17:56.891000Z\",\n  \"url\": \"https://swapi.dev/api/people/1/\"\n}"}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default App;
