import { Fragment } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Landing from './components/Landing';

function App() {
  return (
    <Fragment>
      <div className="flex flex-col my-2 w-full h-screen">
        <Header />
        <Landing />
        <Main />
        <hr />
        <Footer />
      </div>
    </Fragment>

  );
}

export default App;
