import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

const AppLayout = () => {
  return (
    <div className='app'>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default AppLayout;
