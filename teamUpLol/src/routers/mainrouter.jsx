/* eslint-disable no-unused-vars */
// MainRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import PropTypes from 'prop-types';
import NotFoundPage from './NotFoundPage';

// Declara PropTypes para el componente MainRouter
MainRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired, // isLoggedIn debe ser un booleano y es requerido
  onLogin: PropTypes.func.isRequired,   // onLogin debe ser una función y es requerido
};
const MainRouter = ({ isLoggedIn, onLogin }) => {
  return (
    <Router>
      <Switch>
        {/* Rutas para diferentes páginas */}

        <Route exact path="/login">
          {isLoggedIn ? <Redirect to="/" /> : <LoginPage onLogin={onLogin} />}
        </Route>
        
        <Route exact path="/register" component={RegisterPage} />

        <Route exact path="/">
          {isLoggedIn ? <HomePage /> : <Redirect to="/login" />}
        </Route>
        {/* Ruta para manejar páginas no encontradas (404) */}
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
