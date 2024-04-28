import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './HOME/Home';
import Mykemea from './MY-KEMEA/My-kemea';
import Calculator from './AFFORDABILITYCALCULATOR/Calculator';
import Login from './ACCOUNT/Login';
import Signup from './ACCOUNT/Signup';
// import Products from './PRODUCTS/Products';
// import Data from './EXPORT/Export'
// import NotFound from './components/NotFound';

function App() {
  // const detailing = Data.map(function(datum){
  //   return (
  //     <Products 
  //     key={datum.id}
  //     name={datum.name}
  //     datum = {datum}
  //     />
  //   )
  // });
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-kemea" element={<Mykemea />} />
          <Route path="/affordability-calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/* <div>
          {detailing}
        </div> */}
      </div>
  );
}

export default App;
