import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import KanbanBoard from '../components/KanbanBoard';

const HomePage = () => (
  <Provider store={store}>
    <KanbanBoard />
  </Provider>
);

export default HomePage;