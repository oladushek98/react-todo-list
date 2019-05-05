import React from 'react'
import {Component} from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoItems from './components/TodoItems/TodoItems'
import './App.style.css'


class App extends Component{


    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            itemList: [],
            id: 0
        };
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    addToItemList(input){
        let items = this.state.itemList;
        let temp_id = this.state.id;
        temp_id++;

        items.push({value: input, id: temp_id});


        this.setState({
            itemList: items,
            userInput: '',
            id: temp_id
        })
    }

    render() {
        const widthStyle = {width: '50%'};
        return(
            <div>
            <header>
                <h1>
                    ToDo list
                </h1>
            </header>
            <div className="container">
                <TodoItems
                    list={this.state.itemList}
                    id={this.state.id}
                    />

                <TodoForm
                    style={widthStyle}
                    onChange={ (e)=>this.changeUserInput(e.target.value)}
                    value={this.state.userInput}
                    onClick={ ()=>this.addToItemList(this.state.userInput)}/>
            </div>
            </div>
        )

    }

}

export default App
