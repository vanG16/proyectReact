import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <h1>Google Maps App</h1>
      <h1>Garcia Cisneros Xitlaly Vanessa</h1>
      <GoogleMap />
      <Helmet>
      <script defer data-key="6aead1cb-199e-4174-88d5-9fef74d734c0" src="https://widget.tochat.be/bundle.js"></script>        
       </Helmet>
    </div>
  );
}

export default App;
