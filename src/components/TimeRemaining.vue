<template>
  <div class="card time-remaining">
    <h3 class="time-remaining__title">Sisa Waktu Sesi</h3>
    <div class="time-remaining__time">
      <div>{{ twoDigit(leftTime.minutes) }} <span>Menit</span></div>
      <div>{{ twoDigit(leftTime.seconds) }} <span>Detik</span></div>
    </div>
    <div class="time-remaining__remainder">
      Sisa Waktu Tryout <span>{{ leftTimeText }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'TimeRemaining',
  methods: {
    twoDigit(number) {
      return number < 10 ? `0${number}` : `${number}`;
    },
  },
  computed: {
    ...mapState({
      leftTime: (state) => state.time.leftTime,
      inProgress: (state) => state.time.inProgress,
    }),
    leftTimeText() {
      return this.inProgress
        ? `${this.twoDigit(this.leftTime.hours)}:${this.twoDigit(
            this.leftTime.minutes
          )}:${this.twoDigit(this.leftTime.seconds)}`
        : '00:00:00';
    },
  },
};
</script>