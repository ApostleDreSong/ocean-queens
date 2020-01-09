import React from 'react';
import Header from './components/Header';
import SlidingImages from './components/SlidingImages';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Contact from './components/Contact';
import { Container } from '@material-ui/core';
import HeaderImg from './components/HeaderImg';
import Footer from './components/Footer';
import Top from './components/Top';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import FooterCredits from './components/FooterCredits';
import styles from './assets/css/slider.module.css';
import aboutImg from './assets/header-images/about.jpg';
import contactImg from './assets/header-images/contact.jpg';
import clientsImg from './assets/header-images/clients.jpg';
import servicesImg from './assets/header-images/services.jpg';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<div>
					<Top />
					<Header />
					<div className={styles.slider}>
						<Switch>
							<Route exact path="/">
								<SlidingImages />
							</Route>
							<Route path="/about">
								<HeaderImg source={aboutImg} />
							</Route>
							<Route path="/services">
								<HeaderImg source={servicesImg} />
							</Route>
							<Route path="/clients">
								<HeaderImg source={clientsImg} />
							</Route>
							<Route path="/contact">
								<HeaderImg source={contactImg} />
							</Route>
						</Switch>
					</div>
					<Container style={{ paddingBottom: '40px', paddingTop: '10px' }}>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/about">
								<About />
							</Route>
							<Route path="/services">
								<Services />
							</Route>
							<Route path="/clients">
								<Clients />
							</Route>
							<Route path="/contact">
								<Contact />
							</Route>
						</Switch>
					</Container>
					<Footer />
					<FooterCredits />
				</div>
			</Router>
		</React.Fragment>
	);
}

export default App;
