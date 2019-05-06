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
            id: 0,
            desc: ''
        };
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        });
    }

    changeUserDesc(input){
        this.setState({
            desc: input
        })
    }

    addToItemList(input){
        let items = this.state.itemList;
        let temp_id = this.state.id;
        temp_id++;

        items.push({value: input, id: temp_id, desc: this.state.desc});


        this.setState({
            itemList: items,
            userInput: '',
            id: temp_id,
            desc: ''
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
                    onChangeInput={ (e)=>this.changeUserInput(e.target.value)}
                    valueInput={this.state.userInput}
                    onClick={ ()=>this.addToItemList(this.state.userInput)}
                    onChangeDesc={ (e)=>this.changeUserDesc(e.target.value)}
                    valueDesc={this.state.desc}/>
            </div>
            </div>
        )

    }

}

export default App
