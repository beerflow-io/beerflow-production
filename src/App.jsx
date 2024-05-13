import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import './App.css';
import Landing from './landing/pages/landing';
import AboutPage from './landing/pages/about';
import RedirectPage from './landing/pages/redirect';

import { Dashboard } from './app/pages/dashboard';
import Layout from './app/pages/layout';
import HomePage from './app/pages/home/home';
import SchedulePage from './app/pages/schedule/schedule';
import CellarPage from './app/pages/cellar/cellar';

Amplify.configure(amplifyconfig);

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Landing />}
              />
            <Route 
              path="/about" 
              element={<AboutPage />}
              />
            <Route 
              path="/redirect"
              element={<RedirectPage />}
            />
            <Route 
              path="/dashboard/*"
              element={
                <Layout>
                  <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="home" element={<HomePage />} />
                    <Route path="schedule" element={<SchedulePage />} />
                    <Route path="cellar" element={<CellarPage />} />
                  </Routes>
                </Layout>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
