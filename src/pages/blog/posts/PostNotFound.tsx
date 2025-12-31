import { Navigate } from 'react-router-dom';

export default function PostNotFound() {
  return <Navigate to="/blog" replace />;
}
