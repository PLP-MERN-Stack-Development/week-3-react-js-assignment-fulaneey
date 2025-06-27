import React from 'react';

export default function Card({ title, body }) {
  return (
    <div className="border rounded shadow p-4 bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{body}</p>
    </div>
  );
}
