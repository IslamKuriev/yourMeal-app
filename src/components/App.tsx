import { Route, Routes } from 'react-router-dom';
import Categories from './Categories/Categories';
import Header from './Header/Header';
import Cart from './MainContent/Cart/Cart';
import Product from './MainContent/Product/Product';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="app">
      <div className="head">
        <Header />
      </div>
      <div className="categories">
        <Categories />
      </div>
      <div className="mainContent">
        <div className="cartElements">
          <Cart />
        </div>
        <div className="products">
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/category/:categoryId" element={<Product />} />
          </Routes>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
