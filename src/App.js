import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="app">
     <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SAVIS - Najbardziej Efektywne Rozwiązanie dla Twojej Firmy!</title>
        <meta
          name="description"
          content="Nasza doświadczona kadra świadczy usługi outsourcingu kontraktowego w celu wspomagania procesów logistycznych oraz magazynowych, a także linii produkcyjnych z uwzględnieniem infrastruktury naszych Klientów."
        />
        <meta
          name="keywords"
          content="outsourcing, rekrutacja, logistyka, magazynowanie, produkcja, firma, SAVIS, Warszawa"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SAVIS - Najbardziej Efektywne Rozwiązanie dla Twojej Firmy!" />
        <meta
          property="og:description"
          content="Nasza doświadczona kadra świadczy usługi outsourcingu kontraktowego w celu wspomagania procesów logistycznych oraz magazynowych, a także linii produkcyjnych z uwzględnieniem infrastruktury naszych Klientów."
        />
        <meta property="og:image" content="savislogo.png" />
        <meta property="og:url" content="https://www.savis.cc" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SAVIS - Najbardziej Efektywne Rozwiązanie dla Twojej Firmy!" />
        <meta
          name="twitter:description"
          content="Nasza doświadczona kadra świadczy usługi outsourcingu kontraktowego w celu wspomagania procesów logistycznych oraz magazynowych, a także linii produkcyjnych z uwzględnieniem infrastruktury naszych Klientów."
        />
        <link rel="canonical" href="https://www.savis.cc" />
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
