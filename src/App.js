import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
// const Home = lazy(() => import('./components/Home'))
// const Loading = lazy(() => import('./components/Loading'))
// const About = lazy(() => import('./components/About'))
// const Create = lazy(() => import('./components/Create'))

function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

export default App;
