import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';


const MainRouter = createBrowserRouter([
  {
    path: "/login",
    element: (
      <LoginPage/>
    ),
  },
  {
    path: "/register",
    element: (
      <RegisterPage/>
    ),
  },
  {
    path: "/home",
    element: (
      <HomePage/>
    ),
  }
]);

export default MainRouter;
