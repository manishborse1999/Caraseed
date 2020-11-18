import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Content from "./components/Content";
import About from "./components/About";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import Poster from "./components/Poster"
import Signup from "./components/Signup";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path='/products'>
          <Header/>
          <Products/>
          <Footer/>
        </Route>
      <Route path='/login' component={Signup}/>

      <Route path='/About'>
        <Header/>
        <About/>
        <Footer/>
      </Route>

      <Route path='/' > 
      <Header />
      <Poster/>
      <Form/>
      <Highlight />
      <Content />
      <Footer />
      </Route>
     </Switch>

  
    </div>
    </Router>
  );
}

export default App;
