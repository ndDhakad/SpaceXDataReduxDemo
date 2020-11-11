/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  history: {
    id: `${scope}.history`,
    defaultMessage: 'History',
  },
  address: {
    id: `${scope}.address`,
    defaultMessage: 'Address',
  },
});
