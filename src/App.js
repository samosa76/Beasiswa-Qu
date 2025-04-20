import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

import Layout from './Component/Layout/Layout';
import News from './Pages/News';
import NewsDetail from './Pages/NewsDetail';
import Programs from './Pages/Programs';
import Profile from './Pages/Profile';
import Bukber from './Component/Detail/Bukber/Bukber';
import Palestine from './Component/Detail/Palestine/Palestine';


function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/News' element={<News />}></Route>
          <Route path='/Program' element={<Programs />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/Detail' element={<NewsDetail />}></Route>
          <Route path='/Bukber' element={<Bukber />}></Route>
          <Route path='/Palestine' element={<Palestine />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
