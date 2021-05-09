import logo from './journal.svg';
import Search from './components/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div id="full-logo">
          <img id="logo" src={logo} />
          <div id="brandmark">fieldmap</div>
        </div>
      </header>
      <section className="instructions-box">
        <div className="instructions">
          <img src="./create2.png"></img>
          <div className="instruction-text">
            <h3>Search Academic Articles</h3>
            <span>Discover articles from over 37,000 peer-reviewed journals.</span>
          </div>
        </div>
        <div className="instructions">
          <img src="./library.png"></img>
          <div className="instruction-text">
            <h3>Create Lists & References</h3>
              <span>Create and manage lists of academic references.</span>
          </div>
        </div>
        <div className="instructions">
          <img src="./export.png"></img>
          <div className="instruction-text">
            <h3>Export, Share and Embed</h3>
              <span>Export lists or embed direct on your website.</span>
          </div>
        </div>
      </section>
      <div className="search">
        <h1>Search</h1>
        <Search />
      </div>
      <div className="gallery">

      </div>
    </div>
  );
}

export default App;
