import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../firebase/firebase.utils';
import CartIcon from './CartIcon';
import CartDropdown from './CartDropdown';
import { selectCartHidden } from '../redux/cart/cart.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';

import { ReactComponent as Logo } from '../assets/icons/crown.svg';

import '../sass/components/Header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {
        currentUser
          ? <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          : <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header)