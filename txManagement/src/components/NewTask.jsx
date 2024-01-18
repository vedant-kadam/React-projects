import React, { useState } from 'react';
const NewTask = ({addTask})=>{

    const [enteredTask,setEnteredTask] = useState("");

    function hadelChange(event){
        setEnteredTask(event.target.value);
    }

    function handelClick(){
        if(enteredTask.trim() == ""){
            alert("PLease entere the text in the task");
            return;
        }
        addTask(enteredTask);
        setEnteredTask("");
    }

    return <div className='flex items-center gap-4'>
        <input onChange={hadelChange} type='text' className='w-64 px-2 py-1 rounded-sm bg-stone-200' value={enteredTask}/>
        <button onClick={handelClick} className='text-stone-700 hover:text-stone-950'>Add Task</button>
    </div>
}

export default NewTask;