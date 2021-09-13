<template>
  <navbar />
  <main class="container">
    <div class="row my-4">
      <div class="col-lg-8">
        <question />
      </div>
      <div class="col-lg d-grid gap-4">
        <time-remaining />
        <question-history />
        <button class="btn btn-lg btn-primary btn-rounded">Finish</button>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Question from './components/Question.vue';
import QuestionHistory from './components/QuestionHistory.vue';
import TimeRemaining from './components/TimeRemaining.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Question,
    TimeRemaining,
    QuestionHistory,
  },
};
</script>
