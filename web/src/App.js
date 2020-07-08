import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import SignInUpPage from './pages/SignInUp';
import Header from './components/Header';

import { setCurrentUser } from './redux/user/user.actions';

import { auth, createUserProfileDocument } from './firebase/firebase'


class App extends React.Component {
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      //this.setState({ currentUser: user });

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

   
  render(){
    const { currentUser } = this.props

    return (
      <div>
         <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
            currentUser ? 
            (<Redirect to='/'/>) : 
            (<SignInUpPage/>)} 
          />
        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  
  setCurrentUser: user => dispatch(setCurrentUser(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
