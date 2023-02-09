import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { login } from '../services/AuthApi';

const LoginForm = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = async event => {
      event.preventDefault();
      // console.group();
      // console.log('Email:', email);
      // console.log('Password:', password);
      // console.groupEnd();
      let credentials = { email: email, password: password }
      console.log(credentials);

      try {
         const res = await login(credentials);
      } catch ({ response }) {
         console.log(response);
      }

   };

   return (
      <Form onSubmit={handleSubmit} style={{ width: '40%', marginLeft: '30%' }}>
         <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
               type="email"
               placeholder="Enter email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
               We'll never share your email with anyone else.
            </Form.Text>
         </Form.Group>

         <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
         </Form.Group>

         <Button variant="primary" type="submit">
            Submit
         </Button>
      </Form >
   );
}

export default LoginForm;