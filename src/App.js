import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './1components/Header/Header.js';
import Navbar from './1components/Navbar/Navbar.js';
import Profile from './1components/Profile/Profile.js';
import Dialogs from './1components/Dialogs/Dialogs.js';
import Music from './1components/Music/Music.js';
import News from './1components/News/News.js';
import Setting from "./1components/Setting/Setting.js";

function App(props) {

  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header />
              <Navbar />
              <div className={'app-wrapper-dialogs'}>
                <Route path='/profile' render={ () => <Profile postsData={props.postsData} />} />
                <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />} />
                <Route path='/music' render = { () => <Music />} />
                <Route path='/news' render={ () => <News />} />
                <Route path='/setting' render={ () => <Setting />} />
              </div>
          </div>
      </BrowserRouter>
  )
}
export default App;
