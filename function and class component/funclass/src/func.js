import React, { useState } from 'react';

// Yahi hai aapka main Functional Component
export default function App() {
  // State variables using useState hook
  // List ko empty array ([]) se shuru kiya
  const [tasks, setTasks] = useState([]);
  const [activity, setActivity] = useState('');
  const [status, setStatus] = useState('Pending');

  // Function to handle adding a new task
  const handleAddTask = () => {
    // Check karein ki input khali na ho
    if (!activity.trim()) {
      alert('Please enter an activity.');
      return;
    }

    // Naya task object banayein
    const newTask = {
      id: Date.now(), // Unique ID ke liye
      text: activity,
      status: status,
    };

    // State update karein: Puraani tasks + nayi task
    setTasks([...tasks, newTask]);

    // Input fields ko reset karein
    setActivity('');
    setStatus('Pending');
  };

  return (
    // Main container
    <div className="bg-gray-100 min-h-screen py-8">
      {/* To-Do List Card */}
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        
        <div className="p-6">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            To Do List
          </h2>

          {/* Input Form */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            {/* Activity Input */}
            <input
              type="text"
              placeholder="Activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            
            {/* Status Dropdown */}
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
            
            {/* Add Button */}
            <button
              onClick={handleAddTask}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-200"
            >
              Add
            </button>
          </div>
        </div>

        {/* Task List Table */}
        <div className="w-full">
          <table className="w-full">
            {/* Table Header */}
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left font-semibold">Activity</th>
                <th className="p-3 text-left font-semibold">Status</th>
              </tr>
            </thead>
            
            {/* Table Body - Tasks ko map karke rows banayein */}
            <tbody>
              {/* Check karein agar list khaali hai */}
              {tasks.length === 0 ? (
                <tr>
                  <td colSpan="2" className="p-3 text-center text-gray-500">
                    No tasks added yet. Start by adding one above.
                  </td>
                </tr>
              ) : (
                tasks.map((task) => (
                  <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{task.text}</td>
                    <td className="p-3 font-semibold">
                      {/* Status ke hisab se text color change karein */}
                      <span
                        className={
                          task.status === 'Pending'
                            ? 'text-red-500'
                            : 'text-green-700'
                        }
                      >
                        {task.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

