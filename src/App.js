import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='directory' element={<CampsiteDirectoryPage />} />
                    <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} /> 
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
