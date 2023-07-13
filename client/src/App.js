import './App.css';
import { MainHome } from './Pages/Home/MainHome';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { Signup } from './Pages/Signup/Signup';
import { CartProvider } from './Components/ContextReducers';
import { Cart } from './Pages/cart/Cart';
import {MyOrder} from './Pages/myOrder/MyOrder'

function App() {
  return (
    <>
 
<CartProvider>

    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<MainHome />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/Signup' element={<Signup />}></Route>
          <Route exact path='/myOrder' element={<MyOrder />}></Route>
        </Routes>
      </div>
    </Router>

</CartProvider>

    



    
    
    </>
  );
}

export default App;
