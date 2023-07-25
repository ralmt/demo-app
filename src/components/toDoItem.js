import { useEffect, useState } from "react";

function ToDoItem({ text, completed, important }) {
    const [textState, setTextState ] = useState(text)
    const [completedState, setCompletedState] = useState(completed);
    useEffect(()=>{
        setTextState(`${text} ${new Date().toLocaleDateString()}`
        ,[]);
    });
    return (
        <div className={completedState ? "completed" : ""} onClick={() => setCompletedState(!completedState)}>
            {important?'*':''}{textState}
        </div>
    )
}

export default ToDoItem;