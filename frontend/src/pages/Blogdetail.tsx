import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  console.log(id)
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const token = localStorage.getItem('token');  // Or wherever you're storing your auth token
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/blog/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,  // Attach the token to the request
          }
        });
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
       
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
     <h1>hi</h1>
    </div>
  );
};

export default BlogDetail;
