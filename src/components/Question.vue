<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex align-items-center justify-content-between">
        TPS - Penalaran Umum
        <span class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-primary btn-rounded">
            <i class="fas fa-chevron-left"></i>
          </button>
          1
          <button type="button" class="btn btn-outline-primary btn-rounded">
            <i class="fas fa-chevron-right"></i>
          </button>
        </span>
      </div>
    </div>
    <div class="card-body">
      <div class="card card-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
        consequuntur reiciendis id numquam, qui beatae autem earum harum itaque
        ipsa totam doloribus voluptatum quibusdam expedita fugit animi error,
        ratione dolore!
      </div>
      <div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionA"
          />
          <label class="form-check-label" for="optionA"> Default radio </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionB"
            checked
          />
          <label class="form-check-label" for="optionB">
            Default checked radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionC"
            checked
          />
          <label class="form-check-label" for="optionC">
            Default checked radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionD"
            checked
          />
          <label class="form-check-label" for="optionD">
            Default checked radio
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="optionE"
            checked
          />
          <label class="form-check-label" for="optionE">
            Default checked radio
          </label>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="d-flex align-items-center justify-content-between">
        <button type="button" class="btn btn-outline-primary btn-rounded">
          Hapus Jawaban
        </button>
        <span class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-primary btn-rounded">
            <i class="fas fa-chevron-left"></i>
          </button>
          1
          <button type="button" class="btn btn-outline-primary btn-rounded">
            <i class="fas fa-chevron-right"></i>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
};
</script>

<style lang="scss" scoped>
</style>