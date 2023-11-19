import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './footer/Footer';
import News from './pages/News';
import AdsPage from './pages/AdsPage';
import Staff from './pages/Staff';
import Kryeshefi from './pages/Kryeshefi';
import AboutUsPage from './pages/AboutUsPage';
import Law from './pages/Law';
import ContactPage from './pages/ContactPage';
import Germia from './pages/Germia';
import Tennis from './pages/Tennis';
import Amfiteatri from './pages/Amfiteatri';
import Swim from './pages/Swim';
import Ski from './pages/Ski';
import Camp from './pages/Camp';
import SinglePageOfNews from './pages/SinglePageOfNews';
import SinglePageOfAds from './pages/SInglePageOfAds';
import ScrollToTop from 'react-scroll-to-top';
import NplStaff from './pages/NplStaff';
import Aksionaret from './pages/Aksionaret';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
   <>
    
    <BrowserRouter>
    <Header />
        <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/news' element={<News />} />
         <Route path='/ads' element={<AdsPage />} />
         <Route path='/staff' element={<Staff />} />
         <Route path='/kryeshefi-ekzekutiv' element={<Kryeshefi />} />
         <Route path='/about-us' element={<AboutUsPage />} />
         <Route path='/korniza-ligjore-npl' element={<Law />} />
         <Route path='/contact' element={<ContactPage />} />
         <Route path='/pishina-germise' element={<Germia />} />
         <Route path='/fusha-tenisit' element={<Tennis />} />
         <Route path='/amfiteatri' element={<Amfiteatri />} />
         <Route path='/shkolla-notit' element={<Swim />} />
         <Route path='/skijimi' element={<Ski />} />
         <Route path='/kampshtepiza' element={<Camp />} />
         <Route path="/news/:id" element={<SinglePageOfNews />} />
         <Route path="/ads/:id" element={<SinglePageOfAds />} />
         <Route path='/stafiNpl' element={<NplStaff />} />
         <Route path='/board' element={<Aksionaret />} />
         <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>  
    <ScrollToTop smooth />
   </>
  );
}

export default App;
