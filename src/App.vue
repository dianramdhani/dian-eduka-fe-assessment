<template>
  <navbar />
  <main class="container">
    <div class="row my-4">
      <div class="col-lg-9">
        <question />
      </div>
      <div class="col-md">
        <time-remaining class="mb-4" />
        <question-history class="mb-4" />
        <button class="btn btn-lg btn-primary btn-rounded w-100">Finish</button>
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
