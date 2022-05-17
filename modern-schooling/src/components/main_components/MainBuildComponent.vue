<template>
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
              Get teamed up with the specialists who work and teach coding for
              years at famous universities.
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
              Learn to start building a webpage from scratch. You decide your
              own pace, couse and speed.
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
              Learners are encouraged to study the mechanism and structure of
              system administration
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
</template>

<script>
export default {
  name: "MainBuild",
};
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";

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
            margin: 0.75rem 0.85rem;
            font-size: 13px;
          }
        }
        button {
          border: none;
          color: #8e8ca4;
          background-color: $white;
          padding: 0.5rem 1rem;
          &:hover {
            cursor: pointer;
            background-color: #f8f8f8;
            border-radius: 0.3rem;
            color: $btn;
            font-weight: 500;
          }
        }
      }
    }
  }
</style>