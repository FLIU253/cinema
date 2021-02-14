import './App.scss';
import {Provider} from 'react-redux';
import store from './redux/store';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store = {store} >
     <div className="app">
        <Header/>
        <h1>Redux</h1>
      </div>
    </Provider>
  );
}

export default App;
