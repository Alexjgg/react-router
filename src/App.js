import './App.css';
import { lazy, Suspense } from 'react';
import { Router } from './Router.jsx';
import notfindPage from './pages/404';  // Importación por defecto
import HomePage from './pages/Home.jsx';  // Importación por defecto
import dinamicPage from './pages/dinamic.jsx';
const LazyAboutPage = lazy(() => import('./pages/About.jsx'));

const routes = [
  {
    path: '/',
    Component: HomePage,
  }, {
    path: '/about',
    Component: LazyAboutPage,
  }, {
    path: '/search/:query',
    Component: dinamicPage,
  }
];

//componente router



function App() {


  return (
    <div className="App">
      <main>
        <Suspense fallback={() => { return <p>Cargando</p> }}>
          <Router routes={routes} defaultComponent={notfindPage}></Router>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
