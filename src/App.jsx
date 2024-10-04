import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
