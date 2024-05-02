import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './HOME/Home';
import Mykemea from './MY-KEMEA/My-kemea';
import Calculator from './AFFORDABILITYCALCULATOR/Calculator';
import Login from './ACCOUNT/Login';
import Signup from './ACCOUNT/Signup';
import Myconfidentialité from './POLICY/MyConfidentialité';
import Myconditionsgénérales from './POLICY/MyConditionsGénérales';
import Myfonctionnementdenotresite from './POLICY/MyFonctionnementDeNotreSite';
import Myinfossurlentreprise from './POLICY/MyInfosSurLentreprise';
import MyDescription from './HOME/MyDescription';
import MyLanding from './LANDING/MyLanding';
import MyNewProject from './HOME/MyNewProject';
import MyShortTermRent from './HOME/MyShortTermRent';
import MyShortTermDescription from './HOME/MyShortTermDescription';
import MyNewProjectDescription from './HOME/MyNewProjectDescription';
import MyNadlanProject from './NADLAN/MyNadlanPage';
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
          <Route path="/" element={<MyLanding/>} />
          <Route path="/nadlan" element={<MyNadlanProject />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-kemea" element={<Mykemea />} />
          <Route path="/new-projects" element={<MyNewProject />} />
          <Route path="/short-term-rent" element={<MyShortTermRent />} />
          <Route path="/affordability-calculator" element={<Calculator />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/description" element={<MyDescription />} />
          <Route path="/short-term-description" element={<MyShortTermDescription />} />
          <Route path="/new-project-description" element={<MyNewProjectDescription />} />
          <Route path="/confidentialité" element={<Myconfidentialité />} />
          <Route path="/conditions-générales" element={<Myconditionsgénérales />} />
          <Route path="/fonctionnement-du-site" element={<Myfonctionnementdenotresite />} />
          <Route path="/infos-sur-lentreprise" element={<Myinfossurlentreprise />} />
        </Routes>
        {/* <div>
          {detailing}
        </div> */}
      </div>
  );
}

export default App;
