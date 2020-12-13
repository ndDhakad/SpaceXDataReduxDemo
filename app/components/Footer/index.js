import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>

      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://www.linkedin.com/in/namita-dhakad-24985bb1/">Namita Dhakad</A>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;
