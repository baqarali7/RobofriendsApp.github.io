import React, {Component} from 'react'
import CardList from '../Components/CardList'
import { connect } from 'react-redux'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'
import './App.css'

import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = (state) => {
    return{
        searchField: state.searchRobots.SearchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
        
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        OnSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        OnRequestRobots: () => dispatch(requestRobots())
    }
}


class App extends Component {

    componentDidMount(){
        this.props.OnRequestRobots();
    }

    render(){
        const {searchField, OnSearchChange, robots, isPending} = this.props;
        const filterRobots = robots.filter(robots => {
           return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if(isPending){
            return <h1 className="tc">Loading</h1>
        }
        else{
            return(
                <div className = "tc">
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange={OnSearchChange} />
                <br></br>
                <Scroll>
                <CardList robots = {filterRobots}/>
                </Scroll>
                </div>
            );
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(App);