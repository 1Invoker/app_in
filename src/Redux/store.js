import { configureStore } from '@reduxjs/toolkit';
import todoReduser from './Slice';

const store = configureStore({
  reducer: {
    todo: todoReduser,
  },
});

export default store;
