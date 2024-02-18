import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/layoutpage';
import Home from './components/Home/home';
import About from './components/About/about';
import Contact from './components/Contact/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
