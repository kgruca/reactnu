import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <CampsiteDirectoryPage />
            <Footer />
        </div>
    );
}

export default App;
