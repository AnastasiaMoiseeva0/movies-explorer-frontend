import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header isAuthorization={false}/>
        <Main />
        <Footer />
        <Movies />
        <SavedMovies />
        <Register isValidate={false}/>
      </div>
    </div>
  );
}

export default App;
