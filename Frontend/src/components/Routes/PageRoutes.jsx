import { Routes, Route } from 'react-router'
import routes from './routes.json'
import MasaterLayout from '../Layouts/MasterLayouts';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import RestaurantList from '../RestaurantList/RestaurantList';
import ContactUs from '../ContactUs/ContactUs';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import CurdRestaurantList from '../CurdRestaurantList/CurdRestaurantList';
import EditRestaurant from '../EditRestaurant/EditRestaurant';


const PageRoutes = () => {
  return (
    <>
      <Routes>
         <Route path={routes.HOME} element={<MasaterLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.MOVIES} element={<Home />} />
        <Route path={routes.SIGNUP} element={<Signup />} />
        <Route path={routes.LOGIN} element={<Login />} />
         <Route path={routes.RESTAURANTLIST} element={<RestaurantList />} />
          <Route path={routes.CONTACTUS} element={<ContactUs />} />
          <Route path={routes.ADDRESTAURANT} element={<AddRestaurant />} />
        <Route path={routes.CURDRESTAURANTLIST} element={<CurdRestaurantList />} />
         <Route path={routes.EDITRESTAURANT} element={<EditRestaurant />} />
        
        
           </Route>

             </Routes>
    </>
  );
};
export default PageRoutes;