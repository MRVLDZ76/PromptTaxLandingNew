import { Navigate } from 'react-router-dom';

// Fallback component when post file is not found
export default function PostNotFound() {
  return <Navigate to="/blog" replace />;
}
