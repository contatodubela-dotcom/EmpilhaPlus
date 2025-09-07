
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Home from './pages/Home'; // Página inicial agrupando suas seções

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
}

export default App;
