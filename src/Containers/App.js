import React,{ Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import { robots } from '../Components/robots';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

//test1
class App extends Component{
   constructor() {
       super() 
       this.state = {
        robots:[],
        searchField:''
       }
   }

   componentDidMount(){
       this.setState({robots: robots})
    //console.log("check");
   }
   onSearchChange = (event) => {
       this.setState({searchField: event.target.value})
        //console.log(event.target.value);
    }
    render() {
        const filteredrobots=this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <ErrorBoundry>
                   <CardList robots={filteredrobots}/>
                </ErrorBoundry>
                </Scroll>
            </div>
            
        );
    }
    
}
export default App;