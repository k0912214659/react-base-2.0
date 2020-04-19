import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@CSS/index.css';
import DevelopTypes from '@Models/Types';
import * as serviceWorker from '@Services/ElementWorkers/serviceWorker';

const DevelopType = DevelopTypes.DevelopAppMode;

async function renderMainApp() {
  const mainAppProvider = require('@Providers/MainAppProvider').default;
  const Provider = await mainAppProvider({
    Router: BrowserRouter,
    appKey: 520,
    API_ENV: process.env.NODE_ENV,
    routerProps: {
      basename: '',
    },
  });
  serviceWorker.register();
  ReactDOM.render(<Provider />, document.getElementById('root'));
}

async function renderBaseComponentApp() {
  const storyProvider = require('@Providers/StoryAppProvider').default;
  const Provider = await storyProvider({
    Router: BrowserRouter,
    appKey: 520,
    API_ENV: process.env.NODE_ENV,
    routerProps: {
      basename: '',
    },
  });
  ReactDOM.render(<Provider />, document.getElementById('root'));
}

async function Main() {
  switch (DevelopType) {
    case DevelopTypes.DevelopComponentMode:
      renderBaseComponentApp();
      break;
    case DevelopTypes.DevelopAppMode:
      renderMainApp();
      break;
    default:
      break;
  }
}

Main();
