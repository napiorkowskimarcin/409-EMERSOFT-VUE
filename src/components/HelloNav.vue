<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#collapse_target"
    >
      Show more
    </button>
    <div class="collapse navbar-collapse" id="collapse_target">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="">Visual product</a></li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Components
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="">Components1</a></li>
        <li class="nav-item"><a class="nav-link" href="">Components2</a></li>
        <li class="nav-item"><a class="nav-link" href="">Components3</a></li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Components4
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>

        <li class="nav-item"><a class="nav-link" href="">Components5</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HelloNav",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
