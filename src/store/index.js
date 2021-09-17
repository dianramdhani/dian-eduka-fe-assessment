import { createStore } from 'vuex';
import time from './modules/time';
import task from './modules/task';

export default createStore({
    modules: {
        time,
        task
    },
});