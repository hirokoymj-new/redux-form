# Rendering redux state in React Component

- **Actcion generators**
  ```js
  src/actions/users.js
  ```
- **Reducer**
  ```js
  src/reducer/users.js
  ```
- **Store**
  ```js
  src/store/configStore.js
  ```  

### How to connect Redux store into React Component

1. Import react-redux module
  ```js
  import { connect } from 'react-redux';
  ```
2. Convert a regular component to a **connected** component
```js
const mapStateToProps = (state) => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(UserList);
```

3. Final code
```js
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
```


