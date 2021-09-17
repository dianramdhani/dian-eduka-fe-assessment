<template>
  <div class="card question-history">
    <h3 class="question-history__header">
      <small>Question Answered</small><span>{{ numberAnswered }}</span> of
      {{ questions.length }}
    </h3>
    <ul class="question-history__numbers">
      <li
        v-for="(question, index) in questions"
        :key="index"
        :class="{
          'question-history__number--done': userAnswers[index],
          'question-history__number--current': index === currentNumber,
        }"
      >
        <button @click="setCurrentNumber(index)">{{ index + 1 }}</button>20.5
      </li>
    </ul>
    <button
      class="btn btn-primary btn-rounded"
      data-bs-toggle="modal"
      data-bs-target="#reviewModal"
    >
      Review
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'QuestionHistory',
  computed: {
    ...mapState({
      questions: (state) => state.task.questions,
      userAnswers: (state) => state.task.userAnswers,
      currentNumber: (state) => state.task.currentNumber,
    }),
    numberAnswered() {
      return this.userAnswers.filter(
        (answere) => typeof answere !== 'undefined'
      ).length;
    },
  },
  methods: mapActions({ setCurrentNumber: 'task/setCurrentNumber' }),
};
</script>