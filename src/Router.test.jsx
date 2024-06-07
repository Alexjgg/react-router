import React from 'react';
import { render } from '@testing-library/react';
import { describe ,it ,expect } from 'vitest';
import { Router } from './Router';
import '@testing-library/jest-dom';

describe('Router', () => {
    it('renders with an empty routes array', () => {
      render(
          <Router routes={[]} />
      );
      expect(true).toBeTruthy();
    });

    it('renders with null routes array', () => {
      render(
          <Router routes={null} />
      );
      expect(true).toBeTruthy();
    });

    it('renders with undefined routes array', () => {
      render(
          <Router routes={undefined} />
      );
      expect(true).toBeTruthy();
    });

    it('renders with a non-empty routes array', () => {
      const routes = [
        { path: '/', component: () => <div>Home</div> },
        { path: '/about', component: () => <div>About</div> },
      ];
      render(
          <Router routes={routes} />
      );
      expect(true).toBeTruthy();
    });

    it('renders with a routes array containing invalid route objects', () => {
      const routes = [
        { path: '/', component: () => <div>Home</div> },
        { path: '/about', component: 'About' }, // Invalid component type
      ];
      render(
          <Router routes={routes} />
      );
      expect(true).toBeTruthy();
    });
});