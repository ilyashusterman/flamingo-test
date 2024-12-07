import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import QuestionnaireForm from './QuestionnaireForm';
import TermsAndConditions from './TermsAndConditions';
import EmailComposition from './EmailComposition';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/questionnaire" element={<QuestionnaireForm />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/email" element={<EmailComposition />} />
      </Routes>
    </Router>
  );
};

export default App;