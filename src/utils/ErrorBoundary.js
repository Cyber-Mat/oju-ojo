import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error: ', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Weather for selected location not available, please try another
          location
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
