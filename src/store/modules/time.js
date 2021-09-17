import moment from 'moment';
import 'moment-countdown';
import 'moment-timer';

const duration = 1;
const endTime = moment().add(duration, 'hours');
let timer;

const state = () => {
    return {
        leftTime: moment().countdown(),
        inProgress: false
    };
};

const getters = {};

const actions = {
    start({ state, dispatch }) {
        state.leftTime = moment().countdown(endTime);
        state.inProgress = true;
        timer = moment.duration(1000).timer({ loop: true }, () => {
            if (state.leftTime.value > 0) {
                state.leftTime = moment().countdown(endTime);
            } else {
                dispatch('stop');
            }
        });
    },
    stop({ state }) {
        timer.stop();
        state.inProgress = false;
    }
};

const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}