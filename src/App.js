import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
// import SideIcons from './components/sideIcons'

import OmniDriveLogo from './media/OmniDriveLogo.jpg'

import { auth, provider } from "./firebase";
import { useState } from 'react';
import ImgGroup from './components/filesView/ImgGroup';
import PdfGroup from './components/filesView/PdfGroup';
import MusicGroup from './components/filesView/MusicGroup';



function App() {
  const [user, setUser] = useState()
  // const [user, setUser] = useState({
  //   displayName: "Alok",
  //   email: "alok10376@gmail.com",
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL: "https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg"
  // })

  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
        console.log(result.user)
      }).catch((error) => {
        alert(error.message);
      });
    } else if (user) {
      auth.signOut().then(() => {
        setUser(null)
      }).catch((err) => alert(err.message))
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <div className='alok'>
            <Header userPhoto={user.photoURL} />

            <div className="app__main">
   
              <Sidebar />
              <Switch>
                <Route exact path="/pdf" component={PdfGroup} />
                <Route exact path="/img" component={ImgGroup} />
                <Route exact path="/music" component={MusicGroup} />
                <Route exact path="/" component={FilesView} />
              </Switch>

              {/* <SideIcons /> */}

            </div>
          </div>
        ) : (
          <div className='app__login'>
            <img src={OmniDriveLogo} alt="OmniDrive" />
            <button onClick={handleLogin}>Log in to OmniDrive</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
