
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Layout from './Layout';
import { NotificationContainer } from 'react-notifications';
import States from './Pages/States/States';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route element= {<Login/>} path="/" />
          <Route element = {<Login/>} path="/login" />
          <Route element= {<Layout><States/></Layout>} path="/farmers" />
        </Routes>
        <NotificationContainer/>
      </HashRouter>
  );
}

export default App;
