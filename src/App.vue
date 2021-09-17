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
          @click="finish"
        >
          Finish
        </button>
      </div>
    </div>
  </main>
  <review-modal></review-modal>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import axios from 'axios';
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
  async mounted() {
    const questions = await axios
      .get('/api/questions')
      .then(({ data }) => data.questions);
    this.setQuestions(questions);
    this.$store.dispatch('time/start');
    this.$watch(
      () => this.inProgress,
      () => {
        if (this.inProgress === false) {
          this.finish();
        }
      }
    );
  },
  computed: mapState({ inProgress: (state) => state.time.inProgress }),
  methods: {
    ...mapMutations({
      setQuestions: 'task/setQuestions',
      setKeyAnswers: 'task/setKeyAnswers',
    }),
    ...mapActions({
      stop: 'time/stop',
    }),
    async finish() {
      const keyAnswers = await axios
        .get('/api/key-answers')
        .then(({ data }) => data.keyAnswers.map(({ key }) => key));
      this.setKeyAnswers(keyAnswers);
      this.stop();
    },
  },
};
</script>
