import { Outlet } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './Store/store';

function App() {

  return <>
    <Provider store={store}>

    <Header></Header>
    <Outlet/>
    <Footer></Footer>
    </Provider>
  </>;
}

export default App
