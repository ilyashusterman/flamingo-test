import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import TermsAndConditions from './TermsAndConditions';
import EmailComposition from './EmailComposition';
import Form from './Form';

const App = () => {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<Form />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/email" element={<EmailComposition />} />
      </Routes>
    </Router>
  );
};

export default App;