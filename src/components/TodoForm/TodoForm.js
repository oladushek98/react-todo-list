import React from 'react'
import {Component} from 'react'
import './style.css'


class TodoForm extends Component{


    render() {

        const {onChangeInput, valueInput, onClick, onChangeDesc, valueDesc} = this.props;
        return(

            <div className="todo_form">
                <div>
                    <input type="text" onChange={onChangeInput} value={valueInput} placeholder="Add description title" />
                    <br/><br/>
                    <textarea placeholder="Add your description here" value={valueDesc} onChange={onChangeDesc}></textarea>
                    <br/><br/>
                    <button className="btn waves-effect waves-light" onClick={onClick}>Add task</button>
                </div>
            </div>


        )
    }


}

export default TodoForm