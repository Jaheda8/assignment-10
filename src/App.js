import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Home/Contact/Contact';
import Header from './pages/Home/Header/Header';
import NotFound from './pages/Home/NotFound/NotFound';
import Team from './pages/Home/Team/Team';
import Footer from './pages/Home/Footer/Footer';
import AuthProvider from './pages/Home/contex/AuthProvider';
import LogIn from './pages/Home/LogIn/LogIn';
import Register from './pages/Home/Register/Register';


import Services from './pages/Home/Services/Services';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
    <Header></Header>
     <Switch>
     <Route exact path='/'> <Home></Home> </Route>
       <Route exact path='/home'> <Home></Home> </Route>
       <Route path='/contact'> <Contact></Contact></Route>
       <PrivateRoute path='/team'> <Team></Team></PrivateRoute>
       <Route path='/login'> <LogIn></LogIn> </Route>
       <Route path='/register'> <Register/></Route>
       <Route path='/services'><Services></Services></Route>
       
<Route path='/*'><NotFound></NotFound></Route>
     </Switch>
     <Footer></Footer>
   </Router>
      </AuthProvider>
  
     
    </div>
  );
}

export default App;
