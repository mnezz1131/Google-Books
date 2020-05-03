import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
//import Nav from "./components/Nav";     <Nav/>
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
   
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
         <Route exact path="/saved" component={Saved} />
       
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;