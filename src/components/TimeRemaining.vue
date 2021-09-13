<template>
  <div class="card">
    <h3 class="card-header mb-0 text-center">Sisa Waktu Sesi</h3>
    <div class="card-body">
      <div class="row">
        <div class="col">
          <div
            class="
              card card-body
              d-flex
              align-items-center
              justify-content-center
              bg-primary
            "
          >
            <h2>02</h2>
            Menit
          </div>
        </div>
        <div class="col">
          <div
            class="
              card card-body
              d-flex
              align-items-center
              justify-content-center
              bg-primary
            "
          >
            <h2>00</h2>
            Detik
          </div>
        </div>
      </div>
      <p class="text-center mb-0">
        Sisa Waktu Tryout <strong>03:29:09</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeRemaining',
};
</script>