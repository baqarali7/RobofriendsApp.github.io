import React, {Component} from 'react'
import CardList from '../Components/CardList'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchField: '', 
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce=> responce.json())
        .then(user=> this.setState({robots:user}));
    }
    OnSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }

    render(){
        const {robots, searchField} = this.state;
        const filterRobots = robots.filter(robots => {
           return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(!robots.length){
            return <h1 className="tc">Loading</h1>
        }
        else{
            return(
                <div className = "tc">
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange={this.OnSearchChange} />
                <br></br>
                <Scroll>
                <CardList robots = {filterRobots}/>
                </Scroll>
                </div>
            );
        }
    }

}
export default App;