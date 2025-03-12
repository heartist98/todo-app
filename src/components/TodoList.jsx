import { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // ✅ Edit task logic
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const saveEditedTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, text: editedText } : task
    ));
    setEditingId(null);
    setEditedText('');
  };

  return (
    <div className="container">
      <h1>My Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {editingId === task.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEditedTask(task.id)}>Save</button>
              </>
            ) : (
              <>
                {task.text}
                <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
                <button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
