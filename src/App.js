function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wiki Search</h1>
        <form className="search-box">
          <input type="search" placeholder="Search Wiki" />
        </form>
        <p>Results</p>
      </header>
      <div className="results">
        <div className="result">
          <h3>Result Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            voluptate soluta quae totam vel fuga numquam molestias at
            exercitationem quasi.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default App;
