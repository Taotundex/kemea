import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './HOME/Home';
import Mykemea from './MY-KEMEA/My-kemea';
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
        </Routes>
        {/* <div>
          {detailing}
        </div> */}
      </div>
  );
}

export default App;
