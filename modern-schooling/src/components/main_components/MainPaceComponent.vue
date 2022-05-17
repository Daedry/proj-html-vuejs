<template>
  <section class="pace-section">
    <div class="container-md m-auto">
      <div class="boxs d-flex">
        <div class="box-left col-50">
          <div class="title">
            <h4>why hesitate to register?</h4>
            <h2>Learn at your own <span>pace</span></h2>
          </div>
          <!-- /.title -->
          <div class="info-list">
            <ul>
              <li>
                <font-awesome-icon icon="fa-solid fa-check" />
                Select & customize courses to your preferences
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-check" />
                Change the tuttor and make arrangements
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-check" />
                Partecipate in events to join others
              </li>
              <li>
                <font-awesome-icon icon="fa-solid fa-check" />
                Get the desired ceertificate delivered at house
              </li>
            </ul>
          </div>
          <!-- /.info-list -->
          <div class="start">
            <button class="btn">Get started for free</button>
          </div>
        </div>
        <!-- /.box-left -->

        <div class="box-right col-50 p-relative">
          <div class="box-img">
            <img src="@/assets/img/home-5-image-01.png" alt="" />
          </div>
          <div class="underlay-shape-grey p-absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="470px"
              height="464px"
              fill="#ece8e4"
              viewBox="0 0 200 202"
            >
              <path
                class="elementor-shape-fill"
                d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"
              ></path>
            </svg>
          </div>
          <!-- /.underlay-shape-grey -->
          <div class="point-img-shape p-absolute">
            <img src="@/assets/img/maxcoach-shape-05.png" alt="" />
          </div>
          <!-- /.point-image-shape -->
        </div>
        <!-- /.box-rigth -->
      </div>
      <!-- /.boxs -->
    </div>
    <!-- /.container-md -->
  </section>
  <!-- /.pace-section -->
</template>

<script>
export default {
  name: "MainPace",
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.pace-section {
  .container-md {
    padding-top: 11rem;
    .boxs {
      .box-left {
        .title {
          width: 50%;
          h4 {
            text-transform: uppercase;
            font-weight: 500;
            color: #6e6b69;
            font-size: 13px;
          }
          h2 {
            font-size: 42px;
            font-weight: 600;
            line-height: 3rem;
            text-transform: capitalize;
            padding: 0.75rem 0 1.5rem;
            span {
              font-weight: 400;
              color: $btn;
            }
          }
        }
        .info-list {
          ul {
            li {
              padding: 0.5rem 0;
              .fa-check {
                padding: 0 0.5rem 0 0;
                color: $btn;
                font-weight: 900;
                font-size: 14px;
              }
            }
          }
        }

        .start {
          margin: 1.75rem 0;
          button {
            transition: 0.5s;
            &:hover {
              background-color: #3f3a64;
              cursor: pointer;
              transform: scale(1.011);
            }
          }
        }
      }
      .box-right {
        .box-img {
          margin-left: -1.5rem;
        }
        .underlay-shape-grey {
          top: 8rem;
          left: -8.25rem;
          z-index: -1;
        }

        .point-img-shape {
          bottom: 2.75rem;
          right: 4.55rem;
        }
      }
    }
  }
}
</style>