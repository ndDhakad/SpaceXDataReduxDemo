/**
 *
 * Address
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectAddressArray, makeSelectSpinnerState } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Table from '../../components/Table';
import { fetchAddressData } from './actions';

export function Address({ addressArray, spinnerState, onFetchAddressData }) {
  useInjectReducer({ key: 'address', reducer });
  useInjectSaga({ key: 'address', saga });

  useEffect(() => {
    debugger;
    onFetchAddressData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Address</title>
        <meta name="description" content="Description of Address" />
      </Helmet>
      <Table data={addressArray} name={"AddressTable"} spinnerState={spinnerState}></Table>
    </div>
  );
}

Address.propTypes = {};

const mapStateToProps = createStructuredSelector({
  addressArray: makeSelectAddressArray(),
  spinnerState: makeSelectSpinnerState(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFetchAddressData: () => dispatch(fetchAddressData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Address);
