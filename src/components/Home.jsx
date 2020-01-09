import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import goToRoute from '../helpers/linkTo';
import { withRouter } from 'react-router-dom';

function Home(props) {

    return (
        <Container>
            <div>
                <h3>WELCOME</h3>
                <p>Ocean Queens Marine Limited is an indigenous Marine Logistics Service Provider, renowned for rendering excellent and reliable services in the Upstream Sector of the Oil &amp; Gas Industry in the Netherlands and Hong Kong, and within the Gulf of Guinea.</p>

                <p>Since inception in 2009, Ocean Queens Marine Limited has provided efficient and safe marine logistics services to several Exploration &amp; Production Companies (International Oil Companies &amp; Marginal Field Operators) and Oil Servicing Companies in Netherlands and Hong Kong. Our well experienced management team and personnel, flexibility, hands-on approach and extensive portfolio sets us apart - as a preferred choice for marine logistics services in Netherlands and Hong Kong.</p>
            </div>
            <Grid container spacing={5}>
                <Grid item md={6}>
                    <h4>Our Services</h4>

                    <p>We lease the underlisted manned-vessels, to support Oil &amp; Gas exploration, production, offtake, offshore construction and offshore facilities maintenance activities:</p>
                    <ul>
                        <ol><CheckBoxIcon />Anchor Handling Tugs (AHTS)</ol>
                        <ol><CheckBoxIcon />Offshore Supply Vessels (OSV) ...</ol>
                    </ul>
                    <Button variant="contained" color="primary" onClick = {()=>goToRoute('/services', props)}>
                        Read More
                    </Button>
                </Grid>
                <Grid item md={6}>
                    <h4>About Us</h4>

                    <p>Ocean Queens Marine Limited is led by a team of seasoned Professionals with decades of combined years of experience in the successful delivery of oil and gas projects in West Africa, the Middle East, Asia, Europe and North America.</p>


                    <p>We are wholly committed to the goal of no injury or harm to...</p>
                    <Button variant="contained" color="primary" onClick = {()=>goToRoute('/about', props)}>
                        Read More
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default withRouter(Home);