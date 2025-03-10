import React, { useState } from "react";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]);
        setTask("");
    };

    return (
        <div className="app-container">
            <h2>Todo List</h2>
            <div className="todo-container">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTask}>Add</button>
                <ul>
                    {tasks.map((t, index) => (
                        <li key={index}>
                            {t} <button onClick={() => removeTask(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
