<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="./assets/img/logo.png" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item d-flex align-items-center me-4">
            <a class="nav-link" href="#">Event</a>
          </li>
          <li class="nav-item d-flex align-items-center me-4">
            <div class="dropdown text-end">
              <a
                href="#"
                class="d-block link-dark text-decoration-none dropdown-toggle"
                id="product"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </a>
              <ul
                class="dropdown-menu text-small"
                aria-labelledby="product"
                style=""
              >
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item d-flex align-items-center me-4">
            <a class="nav-link" href="#">Ranking</a>
          </li>
          <li class="nav-item d-flex align-items-center me-4">
            <div class="dropdown text-end">
              <a
                href="#"
                class="d-block link-dark text-decoration-none dropdown-toggle"
                id="profile"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img class="me-1" src="./assets/img/user.png" alt="logo" />
                Profile
              </a>
              <ul
                class="dropdown-menu text-small"
                aria-labelledby="profile"
                style=""
              >
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container">
    <div class="row my-4">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-header">
            <div class="d-flex align-items-center justify-content-between">
              TPS - Penalaran Umum
              <span class="d-flex align-items-center">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-rounded"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                1
                <button
                  type="button"
                  class="btn btn-outline-primary btn-rounded"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </span>
            </div>
          </div>
          <div class="card-body">
            <div class="card card-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              consequuntur reiciendis id numquam, qui beatae autem earum harum
              itaque ipsa totam doloribus voluptatum quibusdam expedita fugit
              animi error, ratione dolore!
            </div>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="optionA"
                />
                <label class="form-check-label" for="optionA">
                  Default radio
                </label>
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
                <button
                  type="button"
                  class="btn btn-outline-primary btn-rounded"
                >
                  <i class="fas fa-chevron-left"></i>
                </button>
                1
                <button
                  type="button"
                  class="btn btn-outline-primary btn-rounded"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg d-grid gap-4">
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

        <div class="card">
          <div class="card-header">
            Question Answered
            <h3><span class="text-secondary">3</span> of 20</h3>
          </div>
          <div class="card-body test">
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
            <div class="d-inline-flex flex-column align-items-center">
              <button class="btn btn-outline-primary btn-rounded">1</button>
              20.5
            </div>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary btn-rounded">Review</button>
          </div>
        </div>

        <button class="btn btn-lg btn-primary btn-rounded">Finish</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style scoped lang="scss">
.card-header,
.card-footer {
  border: unset;
  background: unset;
}

.test {
  & > div {
    width: 20%;
  }
  & button {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
