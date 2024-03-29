import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core'; //2

import CountUp from 'react-countup'; //2 Allows the numbers to increase from 0 to their value
import cx from 'classnames'; //Enables 2 STYLES types for CLASSNAME

import styles from './Cards.module.css'; //2

//Anonymous function 
//Hooks
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) { //Solves an asynchronous problem
        return 'Loading...';
    } //2

    return (
        <div className={styles.conteiner}>
            <Grid container spscing={3} justify="center">
                
                {/* !! xs, md: Tab sizes depend on the size of the page */}
                <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.infected)}> 
                {/* <Grid item component={Card}>  */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid> 

                <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.recovered)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid> 

                <Grid item component={Card} xs={12} md={3} className={cx(styles.test, styles.deaths)}> 
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid> 
                
            </Grid>
        </div>
    )
}

export default Cards;

