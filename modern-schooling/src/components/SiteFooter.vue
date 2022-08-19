<template>
  <footer>
    <div class="container-md m-auto p-relative">
      <div class="infos d-flex j-space-b">
        <div class="info-left col-40">
          <div class="address" v-for="(address, n) in info_footer[0]" :key="n">
            <h4>{{ address.name }}</h4>
            <h5>{{ address.street }}</h5>
            <h5>{{ address.cellNumber }}</h5>
            <h6>{{ address.mail }}</h6>
          </div>
          <div class="icons">
            <font-awesome-icon
              icon="fa-brands fa-facebook-square"
              class="icon"
            />
            <font-awesome-icon icon="fa-brands fa-twitter" class="icon" />
            <font-awesome-icon icon="fa-brands fa-instagram" class="icon" />
            <font-awesome-icon icon="fa-brands fa-linkedin" class="icon" />
          </div>
        </div>
        <!-- /.info-left -->
        <div class="info-right col-40 d-flex">
          <div class="explore" v-for="(exp, n) in info_footer[1]" :key="n">
            <h4>{{ explore.name }}</h4>
            <ul class="d-flex flex-column wrap">
              <li v-for="list in explore.list" :key="list.id">
                {{ explore.list[list.id].name }}
              </li>
            </ul>
          </div>
          <!-- /.explore -->
          <div class="information" v-for="(info, n) in info_footer[2]" :key="n">
            <h4>{{ info.name }}</h4>
            <ul>
              <li v-for="list in information.list" :key="list.id">
              {{ information.list[list.id].name }}
              </li>
            </ul>
          </div>
          <!-- /.information -->
        </div>
        <!-- /.info-right -->
      </div>
      <!-- /.infos -->
      <div class="copy">
        <h4>&copy;2020 Maxcoach. All Rights Reserved</h4>
      </div>
      <div class="return-up p-absolute">
        <div>
          <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-up-long" /></a>
        </div>
      </div>
    </div>
    <!-- /.container-md -->
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      address: {
        name: "Address",
        street: "382 Ne 191st St # 87394 Miami, Fl 33179-3899",
        cellNumber: "+1(305)547-9909",
        info_days: "(9am-5pm EST, Monday-Friday)",
        mail: "support@maxcoach.com",
      },
      explore: {
        name: "Explore",
        list: [
          {
            name: "Start here",
            id: 0,
          },
          {
            name: "Blog",
            id: 1,
          },
          {
            name: "About us",
            id: 2,
          },
          {
            name: "Success story",
            id: 3,
          },
          {
            name: "Courses",
            id: 4,
          },
          {
            name: "Contact us",
            id: 5,
          },
        ],
      },
      information: {
        name: "Information",
        list: [
          {
            name: "Membership",
            id: 0,
          },
          {
            name: "Purchase guide",
            id: 1,
          },
          {
            name: "Privacy policy",
            id: 2,
          },
          {
            name: "Terms of services",
            id: 3,
          },
        ],
      },

      info_footer: [
        {
          address: {
            name: "Address",
            street: "382 Ne 191st St # 87394 Miami, Fl 33179-3899",
            cellNumber: "+1(305)547-9909",
            info_days: "(9am-5pm EST, Monday-Friday)",
            mail: "support@maxcoach.com",
          },
        },

        {
          explore: {
            name: "Explore",
            list: [
              {
                name: "Start here",
                id: 0,
              },
              {
                name: "Blog",
                id: 1,
              },
              {
                name: "About us",
                id: 2,
              },
              {
                name: "Success story",
                id: 3,
              },
              {
                name: "Courses",
                id: 4,
              },
              {
                name: "Contact us",
                id: 5,
              },
            ],
          },
        },

        {
          information: {
            name: "Information",
            list: [
              {
                name: "Membership",
                id: 0,
              },
              {
                name: "Purchase guide",
                id: 1,
              },
              {
                name: "Privacy policy",
                id: 2,
              },
              {
                name: "Terms of services",
                id: 3,
              },
            ],
          },
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";

footer {
  .container-md {
    margin-top: 3.5rem;
    .infos {
      .info-left {
        margin-left: 1rem;
        .address {
          h4 {
            color: #333;
            padding-bottom: 0.75rem;
          }
          h5 {
            font-size: 12.5px;
            color: #757575;
            padding: 0 0 0.75rem;
            font-weight: 500;
          }
          h6 {
            color: #757575;
            font-weight: 500;
            font-size: 11.5px;
          }
        }
        .icons {
          .icon {
            padding: 1.55rem 1.7rem 0 0;
            color: #aea8a8;
            font-size: 19px;
          }
        }
      }
      .info-right {
        margin-right: 6rem;
        .explore {
          h4 {
            color: #333;
          }
          ul {
            width: 270px;
            height: 100px;
            li {
              font-weight: 500;
              color: #757575;
              font-size: 12.5px;
              padding: 0.75rem 0 0;
            }
          }
        }
        .information {
          h4 {
            color: #333;
          }
          ul {
            li {
              color: #757575;
              font-weight: 500;
              font-size: 12.5px;
              padding: 0.75rem 0 0;
            }
          }
        }
      }
    }
    .copy {
      text-align: center;
      padding: 3.5rem 0 2.75rem;
      h4 {
        color: #a1a1a1;
        font-weight: 500;
        font-size: 14px;
      }
    }

    .return-up {
      bottom: 1.33rem;
      right: -7rem;
      div {
        width: 40px;
        height: 40px;
        background-color: $btn;
        padding: 0.5rem 0.95rem;
        border-radius: 50%;
        font-size: 18px;
        transition: 0.66s;
        &:hover {
          background-color: #3f3a64;
          cursor: pointer;
          transform: scale(1.044);
        }
        a {
          color: $white;
        }
      }
    }
  }
}
</style>