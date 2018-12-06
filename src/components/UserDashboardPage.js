import React from 'react';
//import ExpenseList from './ExpenseList';
import {Grid, Row, Col, Table, FormGroup, FormControl, Button} from 'react-bootstrap';
import UserList from './UserList';

const UserDashboardPage = () => (
  <Grid>
    <Row>
      <Col xs={12}>
      <h1>Dashboad Page</h1>
      <UserList />
      </Col>
    </Row>
  </Grid>
);

export default UserDashboardPage;
