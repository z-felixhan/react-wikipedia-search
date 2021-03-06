import { useState } from "react";
import { CgExternal } from "react-icons/cg";

function App() {
  const [search, setSearch] = useState("");
  const [searchTime, setSearchTime] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    const startDate = new Date();

    if (search === "") return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const data = await response.json();

    setResults(data.query.search);
    setSearchInfo(data.query.searchinfo);

    const endDate = new Date();
    setSearchTime((endDate.getTime() - startDate.getTime()) / 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wiki Search</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search Wiki"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {searchInfo.totalhits ? (
          <p>
            Results: {searchInfo.totalhits} ({searchTime}s)
          </p>
        ) : (
          ""
        )}
      </header>
      <div className="results">
        {results.map((result, index) => {
          const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

          return (
            <div className="result" key={index}>
              <h3>{result.title}</h3>
              <p
                dangerouslySetInnerHTML={{ __html: result.snippet + "..." }}
              ></p>
              <a href={url} target="_blank" rel="noreferrer">
                Read More <CgExternal />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
