import React , {Component} from 'react';
import News from './News/News';
import SideNews from './News/SideNews';
import PersonList from './PersonList';
import PersonInput from './PersonInput';


import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'country=de&category=business'
      },
      news2: {
        type: 'everything',
        query: 'q=apple&from=2019-05-14&to=2019-05-14'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }

  render(){
    return (
      <div className="container">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">My Feed</a>
            </div>
          </nav>
        </div>
       
       <div className="row">
        <div className="col s8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
        </div>
        <div className="col s4">
          <SideNews news={this.state.news3}/>
        </div>
       </div>
      </div>
    );
  }
}

export default App;
