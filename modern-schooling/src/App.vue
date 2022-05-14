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
                <li class="p-relative">
                  <span
                    >Shop <font-awesome-icon icon="fa-solid fa-angle-down"
                  /></span>
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                  <div class="counter-expense p-absolute">
                    <div class="counter">0</div>
                  </div>
                </li>
              </ul>
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

    <main>
      <div class="main-head p-relative">
        <div class="container-md m-auto d-flex">
          <div class="head-left col-50">
            <div class="side-text col-80">
              <h2>Colmplete Your Dreams in JavaS Programming</h2>
              <p>
                Learn any coding programing in distance and for a reasonable
                fee. You don't have to struggle alone, you've got our assistance
                and help.
              </p>
            </div>
            <button class="btn">
              <font-awesome-icon icon="fa-solid fa-download" /> Download free
              E-books
            </button>
          </div>
          <!-- /.head-left -->

          <div class="head-right col-50">
            <div class="side-img">
              <img height="570" src="@/assets/img/hero-image.png" alt="" />
            </div>
          </div>
          <!-- /.head-right -->

          <div class="side-table p-absolute d-flex flex-column j-space-a">
            <div class="triangle">
              <img
                height="19"
                src="@/assets/img/triangular-ruler-for-school.png"
                alt=""
              />
            </div>
            <font-awesome-icon icon="fa-solid fa-life-ring icon" />
            <font-awesome-icon icon="fa-solid fa-book icon" />
            <font-awesome-icon icon="fa-solid fa-cart-shopping icon" />
          </div>

          <div class="jumbo-overlay p-absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              fill="rgba(222, 219, 217, 0.564)"
              version="1.1"
              preserveAspectRatio="none"
              width="105%"
              height="2000px"
            >
              <path
                class="elementor-shape-fill"
                d="M100,6.21724894e-15 L100,79.7754703 C99.7919362,79.7904198 99.6381974,79.8027262 99.5387835,79.8123897 C99.4256772,79.823384 99.3041657,79.8260447 99.1946857,79.8368479 C98.0926947,79.9455898 96.8446759,80.1450278 96.0566669,80.3249475 C95.1164427,80.5396213 93.6651585,81.0424133 91.7028144,81.8333235 C91.1881986,82.0648898 90.6629331,82.3321219 90.1270181,82.6350198 C89.591103,82.9379178 88.7808989,83.4254899 87.6964058,84.0977361 L84.5866785,86.505496 C83.9146556,87.0756533 83.3999022,87.5308769 83.0424183,87.8711667 C82.6706034,88.2250983 82.3219339,88.542792 81.9256169,88.9363773 C81.5083908,89.3507275 81.0415644,89.840935 80.5708891,90.2075771 C80.5694243,90.2087181 79.879045,90.9348069 79.6966916,91.0931301 C79.6786428,91.1088004 79.619181,91.1783162 79.6134287,91.1806951 C79.5856944,91.1921647 79.4872823,91.3143998 79.2325655,91.5654126 C78.9778486,91.8164253 78.4398261,92.3343122 78.4004716,92.3632772 C78.3852088,92.3745107 78.392749,92.3842318 78.3758447,92.404756 C78.3491619,92.4371525 78.297362,92.4837356 78.2713401,92.5087419 C78.1637093,92.6121724 78.057958,92.7052899 77.9412752,92.8201952 C77.9165042,92.8445888 77.8915476,92.8692319 77.8664085,92.8941052 C77.5163916,93.2404218 77.1310001,93.6313644 76.71875,94.0148783 C75.2657705,95.366577 73.5033569,96.917444 71.8705734,97.9003807 C70.9731573,98.4406259 70.1135532,98.9247458 69.344824,99.2158182 C67.7865314,99.8058517 66.6383515,99.8725302 66.5625,99.8951541 C65.9370497,100.081705 65.026153,100.01931 63.8298099,99.7079704 C64.7659815,99.9771782 64.7185432,99.9771782 63.6874951,99.7079704 C62.9475222,99.3188802 62.4074807,99.0301938 62.0673707,98.8419114 C61.8786639,98.7374448 61.673915,98.5226524 61.4899272,98.3670131 C61.1903999,98.1136365 60.6170457,97.6081983 60.0811799,96.985446 C59.3300042,96.1124731 58.6118857,95.0936327 58.4683822,94.958848 C56.7254333,92.8360206 54.6654939,87.8275853 54.21875,87.4847052 C54.1053147,87.3976425 52.2376405,83.2507606 50,77.6976587 C47.9421254,72.5906776 45.5976116,66.2821297 43.4375,61.1176887 C41.1008376,55.5311461 39.2000795,51.649717 38.6979167,50.8121989 C38.4600638,50.4155028 37.3864888,48.4156228 36.1120817,46.6631568 C35.2477791,45.4746348 34.1630442,44.3456814 33.4375,43.6987268 C32.7119558,43.0517722 31.709781,42.2398109 30.6626803,42.1439083 C30.2356184,42.1047942 29.5251709,42.1444477 29.1201362,42.1439083 C29.0325991,42.1437917 28.1329894,42.1824102 27.1396439,41.8896899 C25.9452799,41.5377333 24.5848063,40.8076085 23.9308866,40.295173 C22.8856727,39.476105 21.6969743,38.3949718 20.9413937,37.4307381 C20.5662547,36.9520047 19.4846561,35.6658156 18.5123771,34.1142672 C18.0017289,33.2993821 16.652903,31.0615524 15.5607311,29.0022448 C14.5429598,27.0832206 13.7630462,25.3063307 13.6950881,25.3220678 C13.5647384,25.3522529 12.1582089,21.8557564 9.63623595,17.1783979 C9.10017282,16.1841924 8.49929577,14.9056754 7.41107192,13.1440893 C7.07564424,12.6011084 6.59991624,11.9188319 6.14393284,11.2720612 C5.88126255,10.8994874 3.6065072,5.72114201 3.39886357,5.35133855 C2.3562704,3.49452944 1.22331587,-0.39125009 -7.81597009e-14,-6.30600005 L100,6.21724894e-15 Z"
                id="path-1"
              ></path>
            </svg>
          </div>
        </div>
        <!-- /.container-md -->
      </div>
      <!-- /.main-head -->

      <section class="main-build-section">
        <div class="container-md m-auto">
          <div class="title">
            <h4>Start learning coding languages</h4>
            <h2>Build your dream <span>Today</span></h2>
          </div>
          <div class="boxs d-flex">
            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-01.png" alt="" />
              </div>
              <div class="box-text">
                <h4>Idea Discussion</h4>
                <p>
                  Get teamed up with the specialists who work and teach coding
                  for years at famous universities.
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>

            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-02.png" alt="" />
              </div>
              <div class="box-text">
                <h4>Web Developement</h4>
                <p>
                  Learn to start building a webpage from scratch. You decide
                  your own pace, couse and speed.
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>

            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-03.png" alt="" />
              </div>
              <div class="box-text">
                <h4>System administration</h4>
                <p>
                  Learners are encouraged to study the mechanism and structure
                  of system administration
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>

            <div class="box col-25">
              <div class="box-img">
                <img src="@/assets/img/home-5-image-box-04.png" alt="" />
              </div>
              <div class="box-text">
                <h4>Graphic Design</h4>
                <p>
                  Have a passion for graphics and arts? Show your talentnts with
                  confidence and self-assertiveness.
                </p>
              </div>
              <button>
                Start now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
              </button>
            </div>
          </div>
          <!-- /.boxs -->
        </div>
        <!-- /.containe-md -->
      </section>
      <!-- /.main-build-section -->
    </main>
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
          cursor: pointer;
          font-size: 14px;
          .fa-angle-down {
            font-size: 9px;
            vertical-align: middle;
          }
          .fa-cart-shopping {
            font-size: 18px;
            margin: 0 1rem;
          }
          .counter-expense {
            bottom: 1rem;
            right: 1.5rem;
            background-color: $btn;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            .counter {
              text-align: center;
              line-height: 17px;
              font-weight: 550;
              font-size: 11px;
              color: $white;
            }
          }
        }
      }
      .fa-circle-user {
        font-size: 18px;
        margin-top: 0.5rem;
        cursor: pointer;
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
          padding: .75rem;
          color: $btn;
        }
      }
    }
  }
}

main {
  height: 2000px;
  .main-head {
    background-color: $bg-main-head;
    overflow-x: hidden;
    padding: 2.75rem 0 2.5rem;
    .head-left {
      .side-text {
        margin-top: 3.75rem;
        h2 {
          font-size: 42px;
          font-weight: 550;
          line-height: 3.15rem;
        }
        p {
          margin: 1.5rem 0;
          font-size: 17px;
          font-weight: 420;
          color: $text-light;
        }
      }
      button {
        .fa-download {
          padding-right: 0.25rem;
        }
      }
    }

    .head-right {
      .side-img {
        position: relative;
        margin-left: 4.3rem;
        z-index: 1;
      }
    }
    .jumbo-overlay {
      bottom: -49.5rem;
      left: 0rem;
      transform: rotatex(102deg);
    }
    .side-table {
      width: 2.5rem;
      height: 9rem;
      background-color: $white;
      border-radius: 0.4rem;
      right: 0;
      top: 6.4rem;
      .triangle {
        padding: 0.25rem 0.75rem 0;
      }
      .fa-cart-shopping {
        padding-bottom: 0.25rem;
      }
    }
  }

  .main-build-section {
    margin-top: 4rem;
    .title {
      text-align: center;
      h4 {
        text-transform: uppercase;
        padding: 0 0 0.5rem;
        font-size: 13px;
        font-weight: 400;
        color: #757081;
      }
      h2 {
        text-transform: capitalize;
        font-weight: 600;
        font-size: 34px;
        span {
          text-transform: uppercase;
          font-weight: 400;
          color: $btn;
          font-size: 36px;
        }
      }
    }

    .boxs {
      margin: 4rem 0;
      .box {
        text-align: center;
        // .box-img {
        // }
        .box-text {
          h4 {
            color: #333;
            padding-top: 0.5rem;
            font-weight: 590;
          }
          p {
            color: #7e7e7e;
            margin: 0.85rem;
            font-size: 13px;
          }
        }
        button {
          border: none;
          color: #8e8ca4;
          background-color: $white;
        }
      }
    }
  }
}
</style>
