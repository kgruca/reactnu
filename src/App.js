import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CampsiteDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import Header from './components/Header';
import { fetchPartners } from './features/partners/partnersSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchComments } from './features/comments/commentsSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <div className="App">
            <Header />
            <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='contact' element={<ContactPage />} />
                    <Route path='directory' element={<CampsiteDirectoryPage />} />
                    <Route path='directory/:campsiteId' element={<CampsiteDetailPage />} /> 
                    <Route path='about' element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;



// return isLoading ? (
//     <Loading />
// ) : errMsg ? (
//     <Error errMsg={errMsg} />
// ) : (
//     <Col md='5' className="m-1">
//         <h4>Comments</h4>
//         {comments.map(comment => {
//             return <Comment key={comment.id} comment={comment} />;
//         })}
//         <CommentForm campsiteId={campsiteId} />
//     </Col>
// );
// return (
//     <Col md='5' className="m-1">
//         There are no comments for this campsite yet.
//     </Col>
// )
// };