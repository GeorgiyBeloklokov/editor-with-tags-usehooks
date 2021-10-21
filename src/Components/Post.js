import React from "react";
import Task from "./Task";
import HashTag from "./HashTag";

function Post(props) {
    return (
        <div className="Post">
            <form className="someText">
          <textarea
              value={props.value}
              onChange={props.handleChange}
              onKeyDown={props.handleKeyPress}
              placeholder="Введите текст/тег и нажмите Enter или Сохранить..."
          >
          </textarea>
                <button className="save" onClick={props.handleSubmit}>
                    Сохранить
                </button>
            </form>
            <form className="searchTag">
                <input
                    placeholder="Искать заметку по тегу..."
                    value={props.tag}
                    onChange={props.noteChange}
                />
                <button className="tagButton" onClick={props.searchTag}>
                    Искать
                </button>
            </form>
            <div className="listBox">
                <Task
                    value={props.value}
                    handleChange={props.handleChange}
                    delPost={props.delPost}
                    activateEditMode={props.activateEditMode}
                    deactivateEditMode={props.deactivateEditMode}
                    dats={props.dats}
                />
                <div className="containerNote">
                    <HashTag
                        isActive={props.isActive}
                        dats={props.dats}
                        note={props.note}
                        delHashtag={props.delHashtag}
                    />
                </div>

            </div>
        </div>
    );
}

export default Post;
