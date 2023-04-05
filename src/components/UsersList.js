import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from "../store/users/usersSlice";

const UsersList = () => {
  const dispatch = useDispatch();

  const { users, isLoading, error } = useSelector((store) => store.users);

  useEffect( () => {
    dispatch(fetchData());
  }, [dispatch]);

  if(isLoading){
    return(
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if(error !== undefined){
    return(
      <div>
        {error}
      </div>
    );
  }
  return(
    <div>
      {users.map((user) => (
        <ul key={user.name.first}>
          <li>{user.name.first}</li>
          <li>{user.name.last}</li>
        </ul>
      ))}
    </div>
  );
}

export default UsersList
