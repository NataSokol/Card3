import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WelcomePage from ('./pages/WelcomePage');
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <section className='container'>
      <Routes>
        <Route path='/' element={<WelcomePage/>} />
      </Routes>
    </section>
    <Footer/>
  </BrowserRouter>
  )
 }

export default App
