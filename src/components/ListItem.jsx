import React, { useState } from "react";

const ListItem = (props) => {
    const [completed, setCompleted] = useState(props.completed)

    return(
        <div className={completed ? "border-2 border-solid border-green-500 p-10 opacity-25" : "border-2 border-solid border-red-700 p-10"}>
            <h1>{props.title}</h1>
            <p><span>{props.startDate}</span><span>{props.dueDate}</span></p>
            <div>
            <p>{completed ? "Mark Incomplete" : "Mark Complete"}</p>
            <button className="bg-indigo-500 p-2 rounded" onClick={() => setCompleted(!completed)}>{completed ? "Incomplete" : "Complete"}</button>
            </div>
        </div>
    )
};

export default ListItem
