import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPageComponent';
import HomePage from './pages/HomePageComponent';

function App() {
  return  (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/home" element={<HomePage/>} />
    </Routes>
  )
}

export default App;