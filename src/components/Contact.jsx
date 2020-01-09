import React, { useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Form from 'react-bootstrap/Form';
import { Col, Button } from 'react-bootstrap';
import Spinner from './Spinner';

function Contact() {
  const [form, setForm] = useState({
          name: "",
          email: "",
          subject: "",
          message: ""
  });
  const [sending, setSending] = useState(false);

  const updateForm = (e, field) => {
    setForm({
      ...form,
      [field]: e.target.value
    });
  }

  const sendMail = (e) => {
    e.preventDefault();
    setSending(true);
    fetch('https://www.oceanqueensmarine.com/mail/mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response);
        setSending(false);
        if(data.response === "success"){
          alert("Thank you. Your message was successfully delivered. We will get back to you as soon as possible");
        }else{
          alert("Sorry, we could not deliver your message at the moment. Kindly reach us via mail or our contact details");
        }
        setForm({
          ...form,
          name: "",
          email: "",
          subject: "",
          message: ""
        });   
      })
      .catch((error) => {
        setSending(false);
        alert("Sorry, there is a problem from your end. Kindly reach us via mail or our contact details");
      });

  }

  return (
    <div>
      <h3>Contact Information</h3>
      {sending?<Spinner/>:null}
      <Grid container spacing={3}>
        <Grid item md={6}>
          <Form onSubmit={(e) => sendMail(e)}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" value={form.name} placeholder="Name" required onChange={(e) => updateForm(e, 'name')} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={form.email} placeholder="Email" required onChange={(e) => updateForm(e, 'email')} />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control value={form.subject} placeholder="Subject" required onChange={(e) => updateForm(e, 'subject')} />
            </Form.Group>
            <Form.Group controlId="formGridMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control value={form.message} placeholder="" required as="textarea" rows="3" onChange={(e) => updateForm(e, 'message')} />
            </Form.Group>
            <div className="g-recaptcha" data-sitekey="6LeCes0UAAAAANsnwF3UETzDJl4hlbNL08RaIqwj"></div>
            <Button variant="primary" type="submit" >
              Submit
            </Button>
          </Form>
        </Grid>
        <Grid item md={6}>
          <Paper elevation={3} style={{ padding: "15px"}}>
            <p>Oever 53162 GR  Rhoon, Netherland</p>
            <p>Tel: +3197005032047</p>
            <p>Unit 2B, 17/F Glenealy Tower, No. 22, Glenleany Central, HongKong</p>
            <p>Tel: +85258031778</p>
            <p style={{ wordBreak: "break-all" }}>Email: info@oceanqueensmarine.com</p>
          </Paper>
          <iframe title="hong-kong-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.9531452927113!2d114.15288231426807!3d22.27976464927167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007ac563833d%3A0xfb16f02c7d5a20b6!2sTower%2C%20No.%2022%2C%20Greenville%2C%202%20Glenealy%2C%20Central%2C%20Hong%20Kong!5e0!3m2!1sen!2sng!4v1578487004081!5m2!1sen!2sng" width="100%" height="450" frameBorder="0" style={{ border: "0", paddingTop: "15px" }} allowFullScreen=""></iframe>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;