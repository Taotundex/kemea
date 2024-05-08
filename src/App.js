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
import MyUserHome from './USERS/HOME/MyUserHome';
import MyExceptionalProperties from './USERS/HOME/MyExceptionalProperties';
import MySellOut from './PROMOTE/MySellOut';
import MyStudy from './STUDY/MyStudy';
import MyFavorites from './FAVORITES/MyFavorites';
import MyRentOut from './PROMOTE/MyRentOut';
import MyProHome from './PRO/MyProHome';
import MyPublish from './PRO/MyPublish';
import MyRentProperty from './PRO/MyRentProperty';
import MyRentHome from './HOME/MyRentHome';
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
          <Route path="/confidentialité" element={<Myconfidentialité />} />
          <Route path="/conditions-générales" element={<Myconditionsgénérales />} />
          <Route path="/fonctionnement-du-site" element={<Myfonctionnementdenotresite />} />
          <Route path="/infos-sur-lentreprise" element={<Myinfossurlentreprise />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/description" element={<MyDescription />} />
          <Route path="/new-projects" element={<MyNewProject />} />
          <Route path="/new-project-description" element={<MyNewProjectDescription />} />
          <Route path="/my-kemea" element={<Mykemea />} />
          <Route path="/affordability-calculator" element={<Calculator />} />


          <Route path="/rent-home" element={<MyRentHome />} />
          <Route path="/short-term-rent" element={<MyShortTermRent />} />
          <Route path="/short-term-description" element={<MyShortTermDescription />} />

          <Route path="/" element={<MyLanding/>} />
          <Route path="/nadlan" element={<MyNadlanProject />} />

          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/user-home" element={<MyUserHome />} />
          <Route path="/exceptional-properties" element={<MyExceptionalProperties />} />
          <Route path='/study' element={<MyStudy />} />
          <Route path='/favorites' element={<MyFavorites />} />
          <Route path="/sell-out" element={<MySellOut />} />
          <Route path="/rent-out" element={<MyRentOut />} />



          <Route path="/pro-login" element={<Login />} />
          <Route path="/pro-signup" element={<Signup />} />
          <Route path='/pro-home' element={<MyProHome />} />
          <Route path='/pro-publish' element={<MyPublish />} />
          <Route path='/rent-property' element={<MyRentProperty />} />
        </Routes>
        {/* <div>
          {detailing}
        </div> */}
      </div>
  );
}

export default App;
