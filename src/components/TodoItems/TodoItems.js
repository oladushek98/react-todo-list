import React from 'react'
import {Component} from 'react'
import './style.css'


class TodoItems extends Component{


    render() {
        const {list, id} = this.props;
        console.log(id);
        console.log(list)
;
        return(

            <ul className="item">
                {list.map((val)=> <div key={val.id} style={{display: 'flex'}}><input type="checkbox"/>
                                        <li className="list">{val.value}</li></div>)}
            </ul>

        )
    }


}

export default TodoItems