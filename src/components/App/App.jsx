import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

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
        <Login isValidate={false}/>
        <Profile />
        <NotFoundPage />
      </div>
    </div>
  );
}

export default App;
