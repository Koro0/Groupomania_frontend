import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css';
import Header from './Header';
import Home from './Home/Home'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
