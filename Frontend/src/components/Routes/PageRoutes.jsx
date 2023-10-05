import { Routes, Route } from 'react-router'
import routes from './routes.json'
import MasaterLayout from '../Layouts/MasterLayouts';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';


const PageRoutes = () => {
  return (
    <>
      <Routes>
         <Route path={routes.HOME} element={<MasaterLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Home />} />
        <Route path={routes.SIGNUP} element={<Signup />} />
        <Route path={routes.LOGIN} element={<Login />} />
        
           </Route>

             </Routes>
    </>
  );
};
export default PageRoutes;