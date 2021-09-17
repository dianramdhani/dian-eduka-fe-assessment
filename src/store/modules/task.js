const state = () => {
    return {
        questions: [
            {
                type: 'type soal',
                text: 'ini text 1',
                question: 'question 1',
                options: [
                    {
                        option: 'A',
                        text: 'ini option a'
                    },
                    {
                        option: 'B',
                        text: 'ini option b'
                    },
                    {
                        option: 'C',
                        text: 'ini option c'
                    },
                    {
                        option: 'D',
                        text: 'ini option d'
                    },
                    {
                        option: 'E',
                        text: 'ini option e'
                    },
                ]
            },
            {
                type: 'type soal',
                text: '',
                question: 'question 2',
                options: [
                    {
                        option: 'A',
                        text: 'ini option a'
                    },
                    {
                        option: 'B',
                        text: 'ini option b'
                    },
                    {
                        option: 'C',
                        text: 'ini option c'
                    },
                    {
                        option: 'D',
                        text: 'ini option d'
                    },
                    {
                        option: 'E',
                        text: 'ini option e'
                    },
                ]
            },
        ],
        userAnswers: [],
        keyAnswers: ['A', 'C', 'B'],
        currentNumber: 0
    };
};

const getters = {
    question(state) {
        return state.questions[state.currentNumber];
    },
    userAnswer(state) {
        return state.userAnswers[state.currentNumber];
    },
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

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}