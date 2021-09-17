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
            <li class="review-modal__number--done"><button>1</button>E</li>
            <li class="review-modal__number--done"><button>1</button>E</li>
            <li class="review-modal__number--done"><button>1</button>-</li>
            <li class="review-modal__number--current"><button>1</button>-</li>
            <li><button>1</button>-</li>
            <li><button>1</button>-</li>
            <li><button>1</button>-</li>
            <li><button>1</button>-</li>
            <li><button>1</button>-</li>
            <li><button>1</button>-</li>
            <li><button>1</button>-</li>
          </ul>
          <div class="review-modal__footer">
            Question Answered <strong><span>3</span> of 20</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ReviewModal',
  computed: mapState({
    questions: (state) => state.task.questions,
    userAnswers: (state) => state.task.userAnswers,
    currentNumber: (state) => state.task.currentNumber,
  }),
};
</script>