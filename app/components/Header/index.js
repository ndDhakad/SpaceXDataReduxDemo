import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './ReactRedux.png';
import messages from './messages';

function Header() {
  return (
    <div>

      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.history} />
        </HeaderLink>
        <HeaderLink to="/address">
          <FormattedMessage {...messages.address} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
