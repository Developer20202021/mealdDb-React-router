

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Food from './Components/FoodDetails/Food';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/notFOund/NotFound';
import Restaurant from './Components/Restaurant/Restaurant';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header></Header>
   <Switch>
     <Route path='/restaurant'>
       <Restaurant>

       </Restaurant>
     </Route>
     <Route path='/food/:id'>
      <Food></Food>
     </Route>
     <Route path='/about'>
     <About></About>
     </Route>
    <Route exact path='/'>
      <Home></Home>
    </Route>
    {/* not found route */}
    <Route>
    <NotFound></NotFound>
    </Route>

   </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
