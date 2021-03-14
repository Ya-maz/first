import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './1components/Header/Header.js';
import Navbar from './1components/Navbar/Navbar.js';
import Profile from './1components/Profile/Profile.js';
import Dialogs from './1components/Dialogs/Dialogs.js';
import Music from './1components/Music/Music.js';
import News from './1components/News/News.js';
import Setting from "./1components/Setting/Setting.js";

function App() {
  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header />
              <Navbar />
              <div className={'app-wrapper-dialogs'}>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
                <Route path='/setting' component={Setting}/>
              </div>
          </div>
      </BrowserRouter>
  )
}
export default App;
