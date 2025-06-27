import React from 'react';
import Layout from '../components/layout';
import TaskManager from '../components/TaskManager';

export default function Tasks() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskManager />
    </Layout>
  );
}
