<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../assets/img/logo.png" alt="logo" />
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
                <img class="me-1" src="../assets/img/user.png" alt="logo" />
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
</template>

<script>
export default {
  name: 'Navbar',
};
</script>