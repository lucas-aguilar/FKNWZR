import React from 'react';
import { Route } from 'react-router-dom';

export default function RouteWrapper({ component: Component, exact }) {
  const signed = true;

  if (!signed) {
    // window.location.href = 'https://example.com/1234';
    return '';
  }
  return <Route exact={exact} component={Component} />;
}
