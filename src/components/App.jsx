import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css';
import Home from './Home/Home';
import Connexion from './LogPage/LogPage';
import Header from './Header/index';
//import NewPost from './Home/NewPost/NewPost';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Connexion />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
