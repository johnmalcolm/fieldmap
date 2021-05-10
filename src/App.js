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
        <div className="sign-in">
          <img className="profile-img" src="./profile.svg"></img>
          <span className="sign-in-text">Sign In</span>
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
        <h3 className="showcase">Showcase</h3>
        <div className="showcase-inner">
          <section className="gallery-item" id="queer-affections">
            <h2>Exploring Sexuality & Law in Russia & The Soviet Union</h2>
          </section>
          <section className="gallery-item" id="ux-design">
            <h2>Popular research in the field of User Experience</h2>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
