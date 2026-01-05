import { Component, ErrorInfo, ReactNode } from 'react';
import { Container } from 'react-bootstrap';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Container className="py-8 text-center">
          <h2 className="mb-4">Something went wrong</h2>
          <p className="text-muted mb-4">
            We're having trouble loading this page. Please try refreshing or return to the blog.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <button 
              className="btn btn-outline-primary" 
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
            <a href="/blog" className="btn btn-primary">
              Return to Blog
            </a>
          </div>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
