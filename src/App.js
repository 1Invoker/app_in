import './App.css';
import ToDo from '../src/Components/ToDo/ToDo';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;
