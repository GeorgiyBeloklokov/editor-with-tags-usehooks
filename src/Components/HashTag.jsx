import React from "react";

const HashTag = (props) => {

    return (
        props.note.map(item => {
            let className = " ";
            if (props.isActive) {
                className = "active";
            }
            return (
                <div key={item}>
                    <div className={"tags"}>
                        <div className={className}>{item}</div>
                        <button onClick={() => props.delHashtag(item)} className="delTag">
                            Удалить тэг
                        </button>
                    </div>
                </div>
            )
        })
    )
}
export default HashTag;
