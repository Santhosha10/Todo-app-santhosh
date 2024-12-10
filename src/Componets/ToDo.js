import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function ToDo() {
  const [items, setItems] = useState('');
  const [task, setTask] = useState([]);
  const navigate = useNavigate();

  function onChangeHandler(e) {
    setItems(e.target.value);
  }

  function sumbitHandle() {
    if (items.trim()) {
      setTask([...task,{ id: Math.random() * 10, name: items}]);
      setItems('');
    }

  }

  function clearHandle() {
    setTask([]);
  }

  function onDeleteHandler(id) {
    let newList = task.filter((listItem) => listItem.id !== id);
    setTask(newList);
  }

  function handleLogOut() {
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center py-2 px-2">
      <div className="bg-white p-6 rounded-lg  w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">To-Do List</h1>
        <button
          type="button"
          onClick={handleLogOut}
          className="absolute top-4 right-4 w-[90px] p-2 bg-gray-600 text-white rounded-lg mb-4 "
        >
          Log Out
        </button>
        
        <div className="mb-4 flex justify-center items-start gap-5">
          <input
            type="text"
            placeholder="Enter the Task"
            value={items}
            onChange={onChangeHandler}
            className="w-[400px] p-3 border-2 border-gray-300 rounded-lg"
          />
          
        <button
          type="button"
          onClick={sumbitHandle}
          className="w-[100px] h-15 py-3 bg-gray-600 text-white rounded-lg mb-4"
        >
        Sumbit
        </button>
        </div>


        <ul className="space-y-2 text-xl font-bold text-start text-gray-800 mb-5"> Tasks
          {task.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-2 mt-5 bg-gray-50 rounded-md shadow-sm">
              <span className="text-gray-700">{item.name}</span>
              <button
                onClick={() => onDeleteHandler(item.id)}
                className="w-[90px] p-2 bg-gray-600 text-white rounded-lg mb-4"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className='flex justify-center mt-5'>
          <button
          type="button"
          onClick={clearHandle}
          className="w-[100px] py-3 bg-red-500  text-white rounded-lg mt-4 "
        >
          Clear List
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default ToDo;
