import './App.css';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loader from "./component/Loader/Loader";
import Provider from './context/cartContext';
import Cart from './component/cart/Cart';

const App = () => { 
  return (    
    <Provider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='category/:category' element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Link to="/"><Loader /></Link>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
