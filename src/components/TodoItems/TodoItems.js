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

            <ul className="items">
                {list.map((val) => <p key={val.id} >
                                        <label className="item">
                                            <input type="checkbox"/>
                                            <span>{val.value}</span>
                                        </label>
                                    </p>)}
            </ul>

        )
    }


}

export default TodoItems