import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './1components/Header/Header.js';
import Navbar from './1components/Navbar/Navbar.js';
import Profile from './1components/Navbar/Profile/Profile.js';
import Dialogs from './1components/Navbar/Dialogs/Dialogs.js';
import Music from './1components/Navbar/Music/Music.js';
import News from './1components/Navbar/News/News.js';
import Setting from "./1components/Navbar/Setting/Setting.js";
import Friends from './1components/Navbar/Friends/Friends.js';

function App(props) {

  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header />
              <Navbar />
              <div className={'app-wrapper-dialogs'}>
                <Route path='/profile'
                       render={ () => <Profile postsData={props.state.profile.postsData}
                                               addPost={props.addPost}
                                               newPostText={props.state.profile.newPostText}
                                               updateNewPostText={props.updateNewPostText} />} />
                <Route path='/dialogs'
                       render={ () => <Dialogs dialogsData={props.state.message.dialogsData}
                                               messagesData={props.state.message.messagesData} />} />
                <Route path='/music' render = { () => <Music />} />
                <Route path='/news' render={ () => <News />} />
                <Route path='/setting' render={ () => <Setting />} />
                <Route path='/friends' render={ () => <Friends />} />

              </div>
          </div>
      </BrowserRouter>
  )
}
export default App;
