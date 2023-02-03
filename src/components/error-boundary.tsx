import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <p>Sorry, something went wrong.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
