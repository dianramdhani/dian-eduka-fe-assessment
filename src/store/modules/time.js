import moment from 'moment';
import 'moment-countdown';
import 'moment-timer';

const duration = 2;
const endTime = moment().add(duration, 'minutes');
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
        state.inProgress = false;
        timer.stop();
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