import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';

import Layout from './Component/Layout/Layout';
import News from './Pages/News';
import Gallery from './Pages/Gallery';
import NewsDetail from './Pages/NewsDetail';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/News' element={<News />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/Detail' element={<NewsDetail />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
