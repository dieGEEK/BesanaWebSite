import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import Router from "./Router";
import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const App = () => {
  const stripePromise = loadStripe("pk_live_51IR4JwCBDL6tBtH58WTvQCq67qtIBzVkEYSX1vsLTu9lAMvypxvehd2KwOPg1AwGWirp642GPkZi2l8MJblCkXtn00RxKRuNLW");
  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <Router>
          <Navigation />
        </Router>
      </Provider>
    </Elements>
  );
};

export default App;
