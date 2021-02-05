import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import setAuthToken from './utils/auth';

import Header from './components/header.component';
import Footer from './components/footer.component';
import MainPage from './pages/main.page';
import CategoryPage from './pages/category.page';
import AnimePage from './pages/anime.page';

import SignIn from './components/forms/sign-in.component';
import SignUp from './components/forms/sign-up.component';
import Backdrop from './components/backdrop.component';

import { loadUserStart } from './redux/auth/auth.actions';

// check if token exists and set axios header
if (localStorage.animeme_token) {
  setAuthToken(localStorage.animeme_token);
}

function App({ showSignIn, showSignUp, loadUserStart, fetchingUser }) {
  useEffect(() => {
    loadUserStart(localStorage.animeme_token);
  }, [loadUserStart]);

  return (
    <div className='App'>
      {fetchingUser ? (
        'LOADING'
      ) : (
        <>
          {showSignUp && <SignUp />}
          {showSignIn && <SignIn />}
          {(showSignIn || showSignUp) && <Backdrop />}
          <Header />
          <Switch>
            <Route path='/' exact component={MainPage} />
            <Route
              path='/categories/:category'
              exact
              component={CategoryPage}
            />
            <Route path='/anime/:animeId' exact component={AnimePage} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  showSignIn: state.forms.showSignIn,
  showSignUp: state.forms.showSignUp,
  fetchingUser: state.auth.fetchingUser,
});

const mapDispatchToProps = (dispatch) => ({
  loadUserStart: (token) => dispatch(loadUserStart(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
