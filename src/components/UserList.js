import React from 'react';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';

const UserList = (props) => {
  return (
    <Table bordered>
      <tbody>
      {
        props.users.map(user =>
          <tr key={user.firstname}>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
          </tr>
          )
      }
      </tbody>
    </Table>
  )
};

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(UserList);
