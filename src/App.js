import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
       <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="laugh" />
        </main>
        <footer className="App-footer">
          This project was coded by
          <a
            href="https://github.com/Dree20/project-app-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Dreanna
          </a>{" "}
          and is{" "}
          <a href="https://github.com/repos" target="_blank" rel="noreferrer">
            open-sourced on GitHub{" "}
          </a>{" "}
          and{" "}
          <a
            href="https://project-app-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
