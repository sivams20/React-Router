import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { NewProducts } from './components/NewProducts';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route path='about' element={ <About /> } />
          <Route path='order' element={ <OrderSummary /> } />
          <Route path='products' element={ <Products /> } >
            <Route index element={ <NewProducts /> } />
            <Route path='new' element={ <NewProducts /> } />
            <Route path='featured' element={ <FeaturedProducts/> } />
          </Route>
          <Route path='users' element={ <Users /> } >
            <Route path=':userId' element={ <UserDetails /> } />
            <Route path='admin' element={ <Admin /> } />
          </Route>
          <Route path='*' element={ <NoMatch /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
