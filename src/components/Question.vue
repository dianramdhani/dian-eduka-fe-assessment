<template>
  <div class="card question mb-4">
    <div class="question__header">
      {{ question.type }}
      <span class="question__navigator">
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        {{ currentNumber + 1 }}
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
      </span>
    </div>
    <div class="card" v-show="question.text">
      {{ question.text }}
    </div>
    <p class="question__text">
      {{ question.question }}
    </p>
    <ul class="question__options">
      <li
        v-for="option in question.options"
        :class="{ 'question__option--active': option.option === userAnswer }"
        :key="option.option"
        @click="setUserAnswere(option.option)"
      >
        <span>{{ option.option }}</span
        >{{ option.text }}
      </li>
    </ul>
    <div class="question__footer">
      <button
        class="btn btn-outline-primary btn-rounded"
        v-show="userAnswer"
        @click="removeUserAnswere"
      >
        Hapus Jawaban
      </button>
      <span class="question__navigator">
        <button :disabled="!canBack" @click="backQuestion">
          <i class="fas fa-chevron-left"></i>
        </button>
        {{ currentNumber + 1 }}
        <button :disabled="!canNext" @click="nextQuestion">
          <i class="fas fa-chevron-right"></i>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'Question',
  computed: {
    ...mapGetters({
      question: 'task/question',
      userAnswer: 'task/userAnswer',
      canNext: 'task/canNext',
      canBack: 'task/canBack',
    }),
    ...mapState({ currentNumber: (state) => state.task.currentNumber }),
  },
  methods: mapActions({
    setUserAnswere: 'task/setUserAnswere',
    nextQuestion: 'task/nextQuestion',
    backQuestion: 'task/backQuestion',
    removeUserAnswere: 'task/removeUserAnswere',
  }),
};
</script>