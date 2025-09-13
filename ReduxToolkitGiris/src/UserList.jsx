import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice'


function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users && users.map((user) => (
            <li key={user.username}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList
