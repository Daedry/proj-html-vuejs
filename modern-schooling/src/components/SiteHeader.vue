<template>
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
              <li v-for="list in lists" :key="list.id">
                {{ list.name }}
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </li>
            </ul>
            <div class="shop p-relative">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              <div class="counter-expense p-absolute">
                <div class="counter">0</div>
              </div>
            </div>
            <font-awesome-icon icon="fa-solid fa-circle-user" />
          </div>
        </div>

        <div class="search d-flex">
          <input type="search" placeholder="Search..." />
          <div class="icon-search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return {
      lists: [
        {
          name: "Home",
          id: "0",
        },
        {
          name: "Pages",
          id: "1",
        },
        {
          name: "Courses",
          id: "2",
        },
        {
          name: "Feature",
          id: "3",
        },
        {
          name: "Blog",
          id: "4",
        },
        {
          name: "Shop",
          id: "5",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";

header {
  background-color: $bg-main-head;

  .nav {
    width: 100%;
    height: 70px;

    .logo {
      margin-top: 0.5rem;
    }

    .nav-list {
      ul {
        margin-left: 15rem;
        flex-flow: row wrap;
        font-weight: 500;
        li {
          padding: 0 1rem;
          margin-top: 0.5rem;
          font-size: 14px;
          transition: 0.22s;
          &:hover {
            transform: scale(1.11);
            cursor: pointer;
            color: $btn;
          }

          .fa-angle-down {
            font-size: 9px;
            vertical-align: middle;
          }
        }
      }
      .shop {
        .fa-cart-shopping {
          font-size: 16px;
          padding: 0.7rem 1.25rem 0 0rem;
          // margin: 0 0.5rem 0 -1.5rem;
          transition: 0.11s;
          &:hover + .counter-expense {
            background-color: #3f3a64;
            cursor: pointer;
            transform: scale(1.022);
          }
        }
        .counter-expense {
          bottom: 1rem;
          right: 0.55rem;
          background-color: $btn;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          transition: 0.11s;
          &:hover {
            background-color: #3f3a64;
            cursor: pointer;
            transform: scale(1.011);
          }

          .counter {
            text-align: center;
            line-height: 17px;
            font-weight: 550;
            font-size: 11px;
            color: $white;
          }
        }
        &:hover {
          transform: scale(1.1);
          cursor: pointer;
          color: #3f3a64;
        }
      }
      .fa-circle-user {
        font-size: 18px;
        margin-top: 0.5rem;
        transition: 0.22s;
        &:hover {
          transform: scale(1.11);
          cursor: pointer;
          color: $btn;
        }
      }
    }
    .search {
      input {
        width: 150px;
        height: 2.5rem;
        border: none;
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem;
        outline: none;
        text-indent: 1rem;
      }
      .icon-search {
        width: 40px;
        height: 40px;
        background-color: white;
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
        .fa-magnifying-glass {
          padding: 0.75rem;
          color: $btn;
        }
      }
    }
  }
}
</style>