import React from 'react'
import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import home from './pages/home';
import "../assets/css/bootstrap.min.css";
// import "../assets/css/owl.carousel.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/themify-icons.css";
import "../assets/css/nice-select.css";
import "../assets/css/flaticon.css";
import "../assets/css/gijgo.css";
// import "../assets/css/animate.css";
import "../assets/css/slick.css";
import "../assets/css/slicknav.css";
import '../assets/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;