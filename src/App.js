import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Contact from "./components/Contact/Contact";
import Faqs from "./components/Faqs/Faqs";
import Map from "./components/Map/Map";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list" exact component={List} />
        <Route path="/faqs" exact component={Faqs} />
        <Route path="/list/:countryName" exact component={CountryDetails} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/map" exact component={Map} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
