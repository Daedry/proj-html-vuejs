<template>
  <section class="main-career-perspective">
    <div class="container-md m-auto p-relative">
      <div class="boxs">
        <div class="box d-flex">
          <div class="box-img col-50">
            <img
              height="480"
              src="@/assets/img/about-us-03-image-01.png"
              alt=""
            />
            <div class="underlay-shape-lilla p-absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="345px"
                height="347px"
                fill="#b6b7d2"
                viewBox="0 0 200 202"
              >
                <path
                  class="elementor-shape-fill"
                  d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z"
                ></path>
              </svg>
            </div>
            <!-- /.underlay-shape-lilla -->
          </div>
          <!-- /.box-img -->

          <div class="box-text col-50 p-relative">
            <div class="title">
              <h5>dream with <span>maxcoach</span></h5>
              <h2>Consctruct a <span>Stunnig</span> Career Perspective</h2>
            </div>

            <div class="cards">
              <div class="card">
                <div class="wrap d-flex j-space-b">
                  <h4>Multiple Platforms Supported for Teaching & Studying</h4>
                  <font-awesome-icon icon="fa-solid fa-circle-minus" />
                </div>

                <div class="text">
                  <p>
                    MaxCoach supports the act of teaching and learning on
                    multiple platforms like online of offline via material
                    download. We know things aren't supposed to be devoured in a
                    short time, you can always access our knowledge from any
                    device.
                  </p>
                </div>
              </div>
              <!-- /.card -->

              <div class="card">
                <div class="wrap wrap-plus d-flex j-space-b">
                  <h4>Multiple Course Participation at the Same Time</h4>
                  <font-awesome-icon icon="fa-solid fa-circle-plus" />
                </div>
              </div>
              <!-- /.card -->

              <div class="card">
                <div class="wrap wrap-plus d-flex j-space-b">
                  <h4>Track Study Progress & Deliver Prompt Feedback</h4>
                  <font-awesome-icon icon="fa-solid fa-circle-plus" />
                </div>
              </div>
              <!-- /.card -->
            </div>
            <!-- /.box-text -->
          </div>
        </div>
        <!-- /.box -->
      </div>
      <!-- /.boxs -->
    </div>
    <!-- /.container-md -->
  </section>
  <!-- /.main-career-perspective -->
</template>

<script>
export default {
  name: 'MainCareer'
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.main-career-perspective {
  .container-md {
    margin-top: 8rem;
    .boxs {
      .box {
        .box-img {
          img {
            margin-left: 3.75rem;
          }

          .underlay-shape-lilla {
            top: 5.4rem;
            left: -4.15rem;
            z-index: -1;
          }
        }
        .box-text {
          left: 1.2rem;
          .title {
            h5 {
              text-transform: uppercase;
              font-weight: 500;
              color: #6e6b69;

              span {
                font-weight: 600;
              }
            }
            h2 {
              font-size: 44px;
              font-weight: 600;
              line-height: 3.25rem;
              text-transform: capitalize;
              padding: 0.75rem 0 2.25rem;
              span {
                font-weight: 400;
                color: $btn;
              }
            }
          }

          .cards {
            .card {
              width: 95%;
              margin-bottom: 2rem;
              box-shadow: 8px 8px 40px 4px #dfdddd;
              .wrap {
                background-color: #62c5b5;
                border-radius: 0.3rem;
                h4 {
                  padding: 0.75rem 1rem;
                  color: white;
                  font-weight: 510;
                }
                .fa-circle-plus,
                .fa-circle-minus {
                  padding: 1rem;
                }
                .fa-circle-plus {
                  color: #8c89a2;
                }
                .fa-circle-minus {
                  color: $white;
                }
              }

              .wrap-plus {
                background-color: $white;
                h4 {
                  color: #6e6b69;
                }
              }

              .text {
                background-color: rgb(255, 255, 255);
                p {
                  padding: 1.45rem 1.75rem;
                  color: #6e6b69;
                  font-weight: 400;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>