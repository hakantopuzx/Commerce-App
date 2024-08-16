import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/navbar/Navbar';
import { PageContainer } from './container/PageContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Detail } from './pages/Detail';
import { Carts } from './pages/Carts';

export default function App() {

    return (
        <>
            <PageContainer>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products/:id" element={<Detail />} />
                        <Route path="/cart" element={<Carts />} />
                    </Routes>
                </Router>
            </PageContainer>
        </>
    )
}
