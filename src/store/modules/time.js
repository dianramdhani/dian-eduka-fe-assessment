import moment from 'moment';
import 'moment-countdown';
import 'moment-timer';

const duration = 1;
const endTime = moment().add(duration, 'hours');

const state = () => {
    return {
        leftTime: moment().countdown(),
        timer: moment.duration()
    };
};

const getters = {
    inProgress({ leftTime }) {
        return leftTime.value > 0;
    }
};

const actions = {
    start({ state, getters, dispatch }) {
        state.leftTime = moment().countdown(endTime);
        state.timer = moment.duration(1000).timer({ loop: true }, () => {
            if (getters.inProgress) {
                state.leftTime = moment().countdown(endTime);
            } else {
                dispatch('stop');
            }
        });
    },

    stop({ state }) {
        state.timer.stop();
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