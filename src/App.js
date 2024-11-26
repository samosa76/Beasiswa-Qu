import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Layout from './Component/Layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
