<template>
  <div class="card question-history">
    <h3 class="question-history__header" v-show="inProgress">
      <small>Question Answered</small><span>{{ numberAnswered }}</span> of
      {{ questions.length }}
    </h3>
    <h3 class="question-history__header" v-show="!inProgress">
      <small>Question Correct</small><span>{{ correct }}</span> of
      {{ questions.length }}
    </h3>
    <ul class="question-history__numbers" v-show="inProgress">
      <li
        v-for="(question, index) in questions"
        :key="index"
        :class="{
          'question-history__number--done': userAnswers[index],
          'question-history__number--current': index === currentNumber,
        }"
      >
        <button @click="setCurrentNumber(index)">{{ index + 1 }}</button>
      </li>
    </ul>
    <ul class="question-history__numbers" v-show="!inProgress">
      <li
        v-for="(answere, index) in keyAnswers"
        :key="index"
        :class="{
          'question-history__number--correct': answereIsCorrect(index),
          'question-history__number--incorrect': !answereIsCorrect(index),
        }"
      >
        <button @click="setCurrentNumber(index)">{{ index + 1 }}</button>
        <span v-show="!answereIsCorrect(index)">{{ answere }}</span>
      </li>
    </ul>
    <button
      class="btn btn-primary btn-rounded"
      data-bs-toggle="modal"
      data-bs-target="#reviewModal"
      v-show="inProgress"
    >
      Review
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'QuestionHistory',
  computed: {
    ...mapState({
      questions: (state) => state.task.questions,
      keyAnswers: (state) => state.task.keyAnswers,
      userAnswers: (state) => state.task.userAnswers,
      currentNumber: (state) => state.task.currentNumber,
      inProgress: (state) => state.time.inProgress,
    }),
    ...mapGetters({
      numberAnswered: 'task/numberAnswered',
      correct: 'task/correct',
    }),
  },
  methods: {
    ...mapActions({ setCurrentNumber: 'task/setCurrentNumber' }),
    answereIsCorrect(index) {
      return this.userAnswers[index]
        ? this.keyAnswers[index] === this.userAnswers[index]
        : false;
    },
  },
};
</script>