import './App.css';
import Router from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={Store}>  {/* Corrected 'Store' to 'store' */}
        <div className="app">
          <Router />
        </div>
      </Provider>
    </>
  );
}

export default App;
