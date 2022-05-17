<template>
  <section class="mobile-section">
    <div class="container-md m-auto">
      <div class="boxs d-flex">
        <div class="box-left p-relative col-50">
          <div class="box-img">
            <img src="@/assets/img/home-5-image-02.png" alt="" />
          </div>
          <div class="underlay-shape-grey p-absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="450px"
              height="454px"
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
          <div class="square-img-shape p-absolute">
            <img src="@/assets/img/maxcoach-shape-07.png" alt="" />
          </div>
          <!-- /.point-image-shape -->

          <div class="line-shape-img p-absolute">
            <img src="@/assets/img/maxcoach-shape-01.png" alt="" />
          </div>
          <!-- /.line-shape-img -->

          <div class="circle-shape p-absolute">
            <div></div>
          </div>
          <!-- /.circle-shape -->
        </div>
        <!-- /.box-left -->

        <div class="box-right col-40">
          <div class="title">
            <h4>what are you looking for?</h4>
            <h2>Learn on your <span>mobile</span> anytime!</h2>
          </div>
          <!-- /.title -->
          <div class="text">
            <p>
              Save lessons for later and revise or write notes at any time and
              on multiple devices on your way- Never interference with
              activities of anjoyment or other precious moments.
            </p>
          </div>
          <!-- /.info-list -->
          <div class="start">
            <button class="btn">Download our app</button>
          </div>
        </div>
        <!-- /.box-right -->
      </div>
      <!-- /.boxs -->
    </div>
    <!-- /.container-md -->
  </section>
  <!-- /.mobile-section -->
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.mobile-section {
  .container-md {
    padding-top: 9rem;
    .boxs {
      .box-left {
        .box-img {
          margin-left: 7.5rem;
        }
        .underlay-shape-grey {
          top: 6rem;
          left: -1.1rem;
          z-index: -1;
        }

        .square-img-shape {
          bottom: 3.3rem;
          right: -0.35rem;
          z-index: -1;
        }

        .line-shape-img {
          top: 15rem;
          left: -6.2rem;
        }

        .circle-shape {
          top: 3.33rem;
          right: 0.25rem;
          div {
            width: 60px;
            height: 60px;
            border: 8px solid #ecc5ab;
            border-radius: 50%;
          }
        }
      }
      .box-right {
        margin-left: 10%;
        padding-top: 5.85rem;
        .title {
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
            padding: 1rem 0 1.85rem;
            span {
              font-weight: 400;
              color: $btn;
            }
          }
        }
        .text {
          p {
            font-size: 14px;
            font-weight: 500;
          }
        }

        .start {
          margin: 3rem 0;
          button {
            text-transform: capitalize;
            transition: 0.66s;
            &:hover {
              background-color: #3f3a64;
              cursor: pointer;
              transform: scale(1.011);
            }
          }
        }
      }
    }
  }
}
</style>