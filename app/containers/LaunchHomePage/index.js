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
    makeSelectSpinnerState,
    makeSelectLaunchSuccess, makeSelectLandingSuccess, makeSelectYear
} from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {SyncLoader} from "react-spinners";
import Grid from '@material-ui/core/Grid';
import Select from "react-select";
import {launchProjectsFetch, updateFilter} from "./actions";
import CallFailedAlert from "../../components/CallFailedAlert";
import LaunchProjectCards from "../../components/LaunchProjectCards";
import Paper from "@material-ui/core/Paper";


export function LaunchHomePage({onLoadLaunchProjects, launchProjects, launchSpinner, launchFail, onUpdateFilter}) {
    useInjectReducer({key: "launchHomePage", reducer});
    useInjectSaga({key: "launchHomePage", saga});

    const yearArray = [
        {label: "2006", value: 2006},
        {label: "2007", value: 2007},
        {label: "2008", value: 2008},
        {label: "2009", value: 2009},
        {label: "2010", value: 2010},
        {label: "2011", value: 2011},
        {label: "2012", value: 2012},
        {label: "2013", value: 2013},
        {label: "2014", value: 2014},
        {label: "2015", value: 2015},
        {label: "2016", value: 2016},
        {label: "2017", value: 2017},
        {label: "2018", value: 2018},
        {label: "2019", value: 2019},
        {label: "2020", value: 2020},
    ];
    const [year, setYear] = React.useState(null);
    const [launchSuccess, setLaunchSuccess] = React.useState(null);
    const [landingSuccess, setLandingSuccess] = React.useState(null);

    const handleChangeYear = (newValue)=>{
        let value = newValue !== null ? newValue.value: null;

        setYear(value);
        onUpdateFilter("year",value);
        onLoadLaunchProjects();
    }

    const handleChangeLaunch = (event) => {
        setLaunchSuccess(event.target.value);
        onUpdateFilter("launch",event.target.value);
        onLoadLaunchProjects();
    };

    const handleChangeLanding = (event) => {
        setLandingSuccess(event.target.value);
        onUpdateFilter("landing",event.target.value);
        onLoadLaunchProjects();
    };

    useEffect(() => {
        console.log("inside use Effect")
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
                    <Paper elevation={3}>
                        <h2>Filters</h2>
                        <Grid style={{alignItems:"center", padding: 20}}>
                            <span style={{fontWeight: "bold", textDecoration: "underline" }}>Launch Year </span>
                            <div style={{width: 200}}>
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isClearable
                                    name="year"
                                    onChange={handleChangeYear}
                                    value={{label:year, value:year}}
                                    options={yearArray}
                                />
                            </div>
                        </Grid>
                        <Grid style={{alignItems:"center", padding: 20}}>
                            <FormControl component="fieldset">
                                <span style={{fontWeight: "bold", textDecoration: "underline" }}>Launch Success </span>
                                <RadioGroup aria-label="launch" name="launch" value={launchSuccess} onChange={handleChangeLaunch}>
                                    <FormControlLabel value="true" control={<Radio />} label="True" />
                                    <FormControlLabel value="false" control={<Radio />} label="False" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid style={{alignItems:"center", padding: 20}}>
                            <FormControl component="fieldset">
                                <span style={{fontWeight: "bold", textDecoration: "underline" }}>Landing Success </span>
                                <RadioGroup aria-label="landing" name="landing" value={landingSuccess} onChange={handleChangeLanding}>
                                    <FormControlLabel value="true" control={<Radio />} label="True" />
                                    <FormControlLabel value="false" control={<Radio />} label="False" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    </Paper>
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
    selectedYear: makeSelectYear(),
    launchSuccess: makeSelectLaunchSuccess(),
    landingSuccess: makeSelectLandingSuccess(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        onLoadLaunchProjects: () => dispatch(launchProjectsFetch()),
        onUpdateFilter: (fieldName, value) => dispatch(updateFilter(fieldName, value)),
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
