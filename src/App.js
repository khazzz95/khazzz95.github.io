import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="app">
      <Helmet>
                <meta charSet="utf-8" />
                <title>SAVIS</title>
            </Helmet>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='*' element={<Home/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
