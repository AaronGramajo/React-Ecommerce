import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import getFirestoreApp from './FireBase/config';

getFirestoreApp()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App />
);
