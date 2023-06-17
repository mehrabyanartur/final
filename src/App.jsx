import { useDispatch, useSelector } from "react-redux";
import {
  decrementRedux,
  getUsersAsync,
  incrementRedux,
} from "./store/feauters/todoSlice";

function App() {
  const {
    todo: { count, loading, users },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const inc = () => {
    dispatch(incrementRedux(6));
  };
  const dec = () => {
    dispatch(decrementRedux(6));
  };

  const getUsers = () => {
    dispatch(getUsersAsync());
  };

  return (
    <div className="App">
      {loading && <h1>Loading...</h1>}
      <button onClick={inc}>increment</button>
      <h2>{count}</h2>
      <button onClick={dec}>decrement</button>
      <button onClick={getUsers}>Get users ASYNC</button>
      {users.map((users) => {
        return <h3>{users.email}</h3>;
      })}
    </div>
  );
}

export default App;
