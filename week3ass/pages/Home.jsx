import React from 'react';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Welcome to the Task Manager App</h1>
      <p className="mt-2 text-gray-700">Use the navigation to explore the features.</p>
    </Layout>
  );
}
