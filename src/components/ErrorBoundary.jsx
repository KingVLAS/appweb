import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.error(err, info);
  }
  render() {
    return this.state.hasError
      ? <h1 className="text-red-600 text-center mt-20">Algo falló 😢</h1>
      : this.props.children;
  }
}
