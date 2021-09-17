const state = () => {
    return {
        questions: [],
        userAnswers: [],
        keyAnswers: [],
        currentNumber: 0
    };
};

const getters = {
    canNext(state) {
        return state.currentNumber < state.questions.length - 1;
    },
    canBack(state) {
        return state.currentNumber > 0;
    },
    numberAnswered(state) {
        return state.userAnswers.filter(
            (answere) => typeof answere !== 'undefined'
        ).length;
    },
    correct(state) {
        let count = 0;
        state.keyAnswers.forEach((answere, index) => {
            if (answere === state.userAnswers[index]) {
                count++
            }
        });
        return count;
    }
};

const actions = {
    nextQuestion({ state, getters }) {
        if (getters.canNext) {
            state.currentNumber++;
        }
    },
    backQuestion({ state, getters }) {
        if (getters.canBack) {
            state.currentNumber--;
        }
    },
    setUserAnswere({ state }, payload) {
        state.userAnswers[state.currentNumber] = payload;
    },
    removeUserAnswere({ state }) {
        delete (state.userAnswers[state.currentNumber]);
    },
    setCurrentNumber({ state }, payload) {
        state.currentNumber = payload;
    }
};

const mutations = {
    setQuestions(state, payload) {
        state.questions = payload;
    },

    setKeyAnswers(state, payload) {
        state.keyAnswers = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}