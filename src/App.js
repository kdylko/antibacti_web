//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main/Main'; // Import other pages/components as needed
import Terms from './Terms/Terms'; // Import your new page component



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/antibacti_web" element={<Main />} />
        {/* Add other routes as needed */}
        <Route path="/antibacti_web/terms" element={<Terms />} /> {/* New page route */}
      </Routes>
    </Router>
  );
}

export default App;
