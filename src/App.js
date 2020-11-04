
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Widgets from './components/Widgets';
import Feed from './components/Feed';
import Login from './components/Login';

import { useStateValue } from './components/StateProvider';
//adityaverma821845 teaches react for free with 2 student. contact him to learn
//react context api
function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user?<Login/>:(
        <div>
          <Header/>
            <div className="app__body">
              <Sidebar/>
              <Feed/>
              <Widgets/>
            </div>
        </div>
        )
      }      
    </div>
  );
}

export default App;
