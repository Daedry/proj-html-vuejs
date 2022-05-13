<template>
  <div id="app">
    <header>
      <div class="container-md m-auto">
        <div class="nav d-flex j-space-b al-center">
          <div class="nav-left">
            <div class="logo">
              <img height="25" src="@/assets/img/dark-logo.png" alt="" />
            </div>
          </div>

          <div class="nav-right">
            <div class="nav-list d-flex">
              <ul class="d-flex">
                <li>
                  Home <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Pages <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Courses <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Feature <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Blog <font-awesome-icon icon="fa-solid fa-angle-down" />
                </li>
                <li>
                  Shop <font-awesome-icon icon="fa-solid fa-angle-down" />
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </li>
              </ul>
              <font-awesome-icon icon="fa-solid fa-circle-user" />
            </div>
          </div>

          <div class="search d-flex">
            <input type="search" />
            <div class="icon-search">
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.nav {
  width: 100%;
  height: 70px;

  .logo {
    color-interpolation-filters: auto;
  }

  .nav-list {
    ul {
      margin-left: 9rem;
      flex-flow: row wrap;
      li {
        padding: 0 0.5rem;
        margin-top: 0.5rem;
        cursor: pointer;
        font-size: 14px;

        .fa-angle-down {
          font-size: 9px;
          // padding: 0.3rem;
          vertical-align: middle;
        }
        .fa-cart-shopping {
          font-size: 16px;
          margin: 0 1rem;
        }
      }
    }
    .fa-circle-user {
      font-size: 22px;
      margin-top: 0.3rem;
      cursor: pointer;
    }
  }
  .search {
    input {
      width: 120px;
      height: 2rem;
      border: none;
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      // margin-top: .55rem;
      outline: none;
      text-indent: 5px;
    }
    .icon-search {
      width: 32px;
      height: 32px;
      background-color: white;
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      .fa-magnifying-glass {
        padding: 0.5rem;
      }
    }
  }
}
</style>
