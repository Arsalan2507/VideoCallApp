import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import VideoPage from './components/VideoPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/VideoCallApp" element={<HomePage />} />
          <Route path="/room/:id" element={<VideoPage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;