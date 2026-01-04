import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style.css';
import { StrictMode } from 'react';

// Entry point of the application
const root = createRoot(document.getElementById('app'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);