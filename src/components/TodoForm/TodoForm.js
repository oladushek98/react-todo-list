import React from 'react'
import {Component} from 'react'
import './style.css'


class TodoForm extends Component{


    render() {

        const {onChange, value, onClick} = this.props;
        return(

            <div className="todo_form">
                <div>
                    <input type="text" onChange={onChange} value={value} />
                    <br/><br/>
                    <button onClick={onClick}>Add task</button>
                </div>
            </div>


        )
    }


}

export default TodoForm