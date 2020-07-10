import React, { Component } from 'react';
import Demo from '../components/Demo';
import Findbox from '../components/Findbox';
import './App.css';
import Scroll from '../components/Scroll';
class App extends Component {
    constructor() {
        super()
        this.state= {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({robots: users})});
    }

    onSearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
        }
        
        render() {
            const {robots, searchfield } =this.state;
        const filteredrobots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(
                searchfield.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1>Loading</h1>
        }else{
    return (
        <div className='tc'>
            <h1 className='f2'>Robofriends</h1>
            <Findbox  Searchchange={this.onSearchchange} />
            <Scroll>
            <Demo robots={filteredrobots} />
            </Scroll>
        </div>
        );
        } 
    }
}

export default App;
