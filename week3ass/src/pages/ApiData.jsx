import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import Card from '../components/card';

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Public API Data</h1>

      <input
        className="mb-4 p-2 border rounded w-full max-w-md"
        placeholder="Search posts by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map(post => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </Layout>
  );
}
