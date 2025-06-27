import { useState } from 'react';
import './App.css';

// ✅ Import custom components
import Navbar from './components/navbar';
import Footer from './components/Footer';
import TaskManager from './components/TaskManager';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg mb-4">
              Click <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">to add numbers</code> and to decrease numbers
            </p>

            <div className="flex items-center gap-4 my-4">
              <button
                onClick={() => setCount((count) => count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-bold">{count}</span>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                +
              </button>
            </div>

            <p className="text-gray-500 dark:text-gray-400 mt-4">
              Implement your TaskManager component here
            </p>
          </div>
        </div>

        {/* ✅ TaskManager Section */}
        <TaskManager />

        {/* ✅ Placeholder for API Data */}
        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Fetch and display data from an API here
          </p>
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
