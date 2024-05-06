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
import UserLogin from './ACCOUNT/UserLogin';
import UserSignup from './ACCOUNT/UserSignup';
import UserHeading from './HEADING/UserHeading';
import MyUserHome from './USERS/HOME/MyUserHome';
import MyExceptionalProperties from './USERS/HOME/MyExceptionalProperties';
import MySellOut from './PROMOTE/MySellOut';
import MyStudy from './STUDY/MyStudy';
import MyFavorites from './FAVORITES/MyFavorites';
import MyRentOut from './PROMOTE/MyRentOut';
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
          <Route path="/exceptional-properties" element={<MyExceptionalProperties />} />
          <Route path="/short-term-rent" element={<MyShortTermRent />} />
          <Route path="/affordability-calculator" element={<Calculator />} />
          <Route path="/pro-login" element={<Login />} />
          <Route path="/pro-signup" element={<Signup />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/description" element={<MyDescription />} />
          <Route path="/short-term-description" element={<MyShortTermDescription />} />
          <Route path="/new-project-description" element={<MyNewProjectDescription />} />
          <Route path="/confidentialité" element={<Myconfidentialité />} />
          <Route path="/conditions-générales" element={<Myconditionsgénérales />} />
          <Route path="/fonctionnement-du-site" element={<Myfonctionnementdenotresite />} />
          <Route path="/infos-sur-lentreprise" element={<Myinfossurlentreprise />} />
          <Route path="/sell-out" element={<MySellOut />} />
          <Route path="/rent-out" element={<MyRentOut />} />
          <Route path='/study' element={<MyStudy />} />
          <Route path='/favorites' element={<MyFavorites />} />


          <Route path="/user-heading" element={<UserHeading />} />
          <Route path="/user-home" element={<MyUserHome />} />
        </Routes>
        {/* <div>
          {detailing}
        </div> */}
      </div>
  );
}

export default App;
