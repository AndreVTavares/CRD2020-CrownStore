import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../Cart-icon';
import CartDropdown from '../Cart-dropdown';

import { selectHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { signOutStart } from '../../redux/user/user.actions';

import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './styles';
import { ReactComponent as Logo } from '../../assets/crown.svg'



const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
        <LogoContainer to='/'>
          <Logo className='logo' />
        </LogoContainer>
        <OptionContainer>
          <OptionLink to='/shop'>
            SHOP
          </OptionLink>
          <OptionLink to='/shop'>
            CONTACT
          </OptionLink>
          {currentUser ? (
            <OptionLink as = 'div' onClick={signOutStart}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to='/signin'>
              SIGN IN
            </OptionLink>
          )}
          <CartIcon/>
        </OptionContainer>
        {
          hidden ? null : <CartDropdown/>
        }
      </HeaderContainer>
    )
};


const mapStateToProps =  createStructuredSelector({

  currentUser: selectCurrentUser,
  hidden: selectHidden

})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);