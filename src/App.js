//import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route exact path = '/' element = {<ProductListing/>}></Route>
      <Route path = '/product/:productId' element = {<ProductDetail/>}></Route>
      <Route>404 Not Found !</Route>
     </Routes>
     </BrowserRouter>    
    </div>
  );
}

export default App;
