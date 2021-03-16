import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Category from "./components/category";
import Portfolio from "./components/portfolio";
import About from "./components/about";
import Brief from "./components/brief";
import Contact from "./components/contact";
import Terms from "./components/terms";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function App() {
  const stripe = loadStripe("pk_test_stripe");
  return (
    <Router>
      <Elements stripe={stripe}>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/brief" component={Brief} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms-and-cond" component={Terms} />
        <Footer />
      </Elements>
    </Router>
  );
}

export default App;
