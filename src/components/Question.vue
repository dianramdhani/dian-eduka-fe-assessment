<template>
  <div class="card question mb-4">
    <div class="question__header">
      TPS-Penalaran Umum
      <span class="question__navigator">
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        1
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
      </span>
    </div>
    <div class="card">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta
      pariatur nemo temporibus voluptas hic veniam, quibusdam magni voluptate
      alias ducimus adipisci est inventore illum praesentium blanditiis aperiam
      error quisquam?
    </div>
    <p class="question__text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta
    </p>
    <ul class="question__options">
      <li>
        <span>A</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod
        praesentium beatae officiis ipsum facere perspiciatis sequi numquam cum
        voluptatum aliquam blanditiis ut assumenda veniam amet deserunt,
        molestias quo necessitatibus.
      </li>
      <li class="question__option--active">
        <span>B</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod
        praesentium beatae officiis ipsum facere perspiciatis sequi numquam cum
        voluptatum aliquam blanditiis ut assumenda veniam amet deserunt,
        molestias quo necessitatibus.
      </li>
      <li>
        <span>C</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod
        praesentium beatae officiis ipsum facere perspiciatis sequi numquam cum
        voluptatum aliquam blanditiis ut assumenda veniam amet deserunt,
        molestias quo necessitatibus.
      </li>
      <li>
        <span>D</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quod
        praesentium beatae officiis ipsum facere perspiciatis sequi numquam cum
        voluptatum aliquam blanditiis ut assumenda veniam amet deserunt,
        molestias quo necessitatibus.
      </li>
    </ul>
    <div class="question__footer">
      <button class="btn btn-outline-primary btn-rounded">Hapus Jawaban</button>
      <span class="question__navigator">
        <button>
          <i class="fas fa-chevron-left"></i>
        </button>
        1
        <button>
          <i class="fas fa-chevron-right"></i>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
};
</script>