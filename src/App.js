import Navbar from './components/Navbar'
import UserList from './components/UserList';
import ChangeState from './components/ChangeState';
// redux
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <h1>Redux!!</h1>
      <UserList />
      <ChangeState />
    </Provider>
  );
}

export default App;
