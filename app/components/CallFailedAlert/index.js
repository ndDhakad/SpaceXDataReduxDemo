/**
 *
 * CallFailedAlert
 *
 */


import React from "react";
import {Icon} from "antd";

/* eslint-disable react/prefer-stateless-function */
class CallFailedAlert extends React.PureComponent {
  render() {
    return (
        <div>
          <div
              style={{
                textAlign: 'center',
                color: 'red',
                backgroundColor: '#fff1f0',
                border: '1px solid #ffa39e',
                borderRadius: '4px',
                margin: '1%',
                padding: '2%',
              }}
          >
            <Icon type="warning" />
            <div style={{padding:'2%', fontSize:'14px'}}>Apologies! An error occurred, please try reloading the page</div>
          </div>
        </div>
    );
  }
}

CallFailedAlert.propTypes = {};

export default CallFailedAlert;
