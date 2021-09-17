<template>
  <div
    class="modal fade"
    id="reviewModal"
    tabindex="-1"
    aria-labelledby="reviewModal"
    aria-hidden="true"
  >
    <div class="modal-dialog review-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Review</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <ul class="review-modal__numbers">
            <li
              v-for="(question, index) in questions"
              :key="index"
              :class="{
                'review-modal__number--done': userAnswers[index],
                'review-modal__number--current': index === currentNumber,
              }"
            >
              <button @click="setCurrentNumber(index)">{{ index + 1 }}</button
              >{{ userAnswers[index] }}
            </li>
          </ul>
          <div class="review-modal__footer">
            Question Answered
            <strong
              ><span>{{ numberAnswered }}</span> of
              {{ questions.length }}</strong
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'ReviewModal',
  computed: {
    ...mapState({
      questions: (state) => state.task.questions,
      userAnswers: (state) => state.task.userAnswers,
      currentNumber: (state) => state.task.currentNumber,
    }),
    ...mapGetters({ numberAnswered: 'task/numberAnswered' }),
  },
  methods: mapActions({ setCurrentNumber: 'task/setCurrentNumber' }),
};
</script>