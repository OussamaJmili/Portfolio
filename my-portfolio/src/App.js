import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobDetailsPage from './pages/JobDetailsPage';
import JobsPage from './pages/JobsPage';
import ResumePage from './pages/ResumePage';

import "./styles/App.css"

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/jobs" element={<JobsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </I18nextProvider>

    
  );
}

export default App;