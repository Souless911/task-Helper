// TaskList.js

// import React, { useState } from 'react';

// const TaskList = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   return (
//     <div>
//       <h1>Task List</h1>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//       <form>
//         <input type="text" />
//         <button type="button" onClick={() => addTask('New Task')}>
//           Add Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TaskList;
const React = require('react');

const TaskList = () => {
  return (
    <div>
      <h1>Task List</h1>
      {/* Your React component content goes here */}
    </div>
  );
};

module.exports = TaskList;