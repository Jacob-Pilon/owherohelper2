import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import AppRoutes from './components/AppRoutes';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='MainContainer'>
      <Sidebar />  
        <div className='content'>
          <AppRoutes />
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
