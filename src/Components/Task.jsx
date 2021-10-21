import React from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Task = (props) => {

    return (
        <TransitionGroup>
            {props.dats.map(item => {
                return (
                    <CSSTransition key={item.key} timeout={500} classNames='todo'>
                        <div>
                            {!item.editMode &&
                            <div className='notes'>
                                <div className='someNote'>{item.text}</div>
                                <div>
                                    <button onClick={() => props.activateEditMode(item.text, item.key)}
                                            className='changeNote'>Edit
                                    </button>
                                </div>
                                <div>
                                    <button onClick={() => props.delPost(item.key)} className='delNote'>X</button>
                                </div>
                            </div>}

                            {item.editMode &&
                            <div className="someText editMode">
                                <input id={item.key} value={props.value} onChange={props.handleChange}
                                       onBlur={() => props.deactivateEditMode(item.key, item.text)}
                                       autoFocus={true}
                                       placeholder={'Введите значение...'}/>
                            </div>}
                        </div>
                    </CSSTransition>
                )
            })}
        </TransitionGroup>
    )
}
export default Task;