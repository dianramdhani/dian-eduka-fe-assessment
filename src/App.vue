<template>
  <navbar />
  <main class="container">
    <div class="row my-4">
      <div class="col-lg">
        <question />
      </div>
      <div class="col-lg-3">
        <time-remaining class="mb-4" />
        <question-history class="mb-4" />
        <button
          class="btn btn-lg btn-primary btn-rounded w-100"
          v-show="inProgress"
          @click="stop"
        >
          Finish
        </button>
      </div>
    </div>
  </main>
  <review-modal></review-modal>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Navbar from './components/Navbar.vue';
import Question from './components/Question.vue';
import QuestionHistory from './components/QuestionHistory.vue';
import TimeRemaining from './components/TimeRemaining.vue';
import ReviewModal from './components/ReviewModal.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Question,
    TimeRemaining,
    QuestionHistory,
    ReviewModal,
  },
  computed: mapState({ inProgress: (state) => state.time.inProgress }),
  methods: {
    ...mapActions({ stop: 'time/stop' }),
  },
};
</script>
