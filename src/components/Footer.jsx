import React from 'react';
import { Grid } from '@material-ui/core';
import styles from '../assets/css/footer.module.css';
import goToRoute from '../helpers/linkTo';
import { withRouter } from 'react-router-dom';

function Footer(props) {

    return (
      <Grid className={styles.footer} container>
        <Grid item md={4}>
          <h5>About Ocean Queens Marine</h5>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => goToRoute("/about", props)}
          >
            About Us
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => goToRoute("/services", props)}
          >
            Our Services
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => goToRoute("/clients", props)}
          >
            Our Clients
          </p>
          <p
            style={{ cursor: "pointer" }}
            onClick={() => goToRoute("/contact", props)}
          >
            Contact Us
          </p>
        </Grid>
        <Grid item md={4}>
          <h5>Contact Us</h5>
          <p>Oever 53162 GR Rhoon, Netherland</p>
          <p>Tel: +3197005032047</p>
          <p>+3197005035272</p>
          <p>
            Unit 2B, 17/F Glenealy Tower, No. 22, Glenleany Central, HongKong
          </p>
          <p>Tel: +85258031778</p>
          <p>H. Ramnarain Building, Mer Rouge, Mauritius</p>
          <p>Tel: +23054567482</p>
          <p>
            No: 23, Jawahar Building, Rajaji Rd, Chennai, Tamil Nadu 600004
            India.
          </p>
          <p>Tel: +91 70641 91887</p>
          <p>
            Email: info@oceanqueensmarine.com, complaint@oceanqueensmarine.com
          </p>
        </Grid>
      </Grid>
    );
}

export default withRouter(Footer);


