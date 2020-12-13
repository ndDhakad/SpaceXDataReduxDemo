/**
 *
 * LaunchHomePage
 *
 */

import React, {memo, useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";

import {useInjectSaga} from "utils/injectSaga";
import {useInjectReducer} from "utils/injectReducer";
import makeSelectLaunchHomePage, {
    makeSelectLaunchProjects,
    makeSelectLaunchProjectsFail,
    makeSelectSpinnerState
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import {SyncLoader} from "react-spinners";
import Grid from '@material-ui/core/Grid';
import {launchProjectsFetch} from "./actions";
import CallFailedAlert from "../../components/CallFailedAlert";
import LaunchProjectCards from "../../components/LaunchProjectCards";
import Card from "@material-ui/core/Card";

export function LaunchHomePage({onLoadLaunchProjects, launchProjects, launchSpinner, launchFail}) {
    useInjectReducer({key: "launchHomePage", reducer});
    useInjectSaga({key: "launchHomePage", saga});

    useEffect(() => {
        onLoadLaunchProjects();
    }, []);

    return (
        <div>
            <Helmet>
                <title>LaunchHomePage</title>
                <meta name="description" content="Description of LaunchHomePage"/>
            </Helmet>
            <Grid item xs={12} sm={12} lg={12} style={{display: "flex", flexFlow: "wrap"}}>
                <Grid item xs={12} sm={4} lg={2}>
                    <span>Filter Here</span>
                </Grid>
                <Grid item xs={12} sm={8} lg={10} style={{display: "flex", flexFlow: "wrap"}}>
                    {
                        (() => {
                                if (launchFail) {
                                    return <CallFailedAlert/>
                                } else if (launchSpinner) {
                                    return (
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '20px'
                                        }}>
                                            <SyncLoader size={10} margin={2} color={"#0000a0"}
                                                        loading={true}/>
                                        </div>

                                    )
                                } else {
                                    return (
                                        launchProjects.map((item, index) => {
                                            return (
                                                <Grid item xs={12} sm={6} lg={3} key={index} style={{padding: 10}}>
                                                    <LaunchProjectCards project={item}/>
                                                </Grid>
                                            )
                                        })
                                    )
                                }
                            }
                        )()
                    }
                </Grid>
            </Grid>
        </div>
    );
}

LaunchHomePage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
    launchHomePage: makeSelectLaunchHomePage(),
    launchProjects: makeSelectLaunchProjects(),
    launchSpinner: makeSelectSpinnerState(),
    launchFail: makeSelectLaunchProjectsFail(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onLoadLaunchProjects: () => dispatch(launchProjectsFetch())
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(
    withConnect,
    memo
)(LaunchHomePage);
