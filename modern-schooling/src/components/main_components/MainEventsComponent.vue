<template>
  <section class="events-section">
    <div class="container-md m-auto">
      <div class="title">
        <h4>Get in contact now</h4>
        <h2>Upcoming <span>Events</span></h2>
      </div>
      <div class="events d-flex j-space-a wrap">
        <div class="event d-flex j-space-b col-47">
          <div class="text">
            <h5>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              Texas, US
            </h5>
            <h3>Storytellyng Workshop</h3>
          </div>
          <!-- /.text -->
          <div class="info">
            <div class="date">
              <div>22</div>
              <h5>nov</h5>
            </div>
            <div class="ticket">
              <button class="btn">Get ticket</button>
            </div>
          </div>
          <!-- /.info -->
        </div>
        <!-- /.event -->

        <div class="event d-flex j-space-b col-47">
          <div class="text">
            <h5>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              New York, US
            </h5>
            <h3>Painting Art Contest 2020</h3>
          </div>
          <!-- /.text -->
          <div class="info">
            <div class="date">
              <div>10</div>
              <h5>oct</h5>
            </div>
            <div class="ticket">
              <button class="btn">Get ticket</button>
            </div>
          </div>
          <!-- /.info -->
        </div>
        <!-- /.event -->

        <div class="event d-flex j-space-b col-47">
          <div class="text">
            <h5>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              Hamburg, Germany
            </h5>
            <h3>International Art Fair 2020</h3>
          </div>
          <!-- /.text -->
          <div class="info">
            <div class="date">
              <div>23</div>
              <h5>nov</h5>
            </div>
            <div class="ticket">
              <button class="btn">Get ticket</button>
            </div>
          </div>
          <!-- /.info -->
        </div>
        <!-- /.event -->

        <div class="event d-flex j-space-b col-47">
          <div class="text">
            <h5>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              Illinois, US
            </h5>
            <h3>Street Performance: Call for Artist</h3>
          </div>
          <!-- /.text -->
          <div class="info">
            <div class="date">
              <div>15</div>
              <h5>dec</h5>
            </div>
            <div class="ticket">
              <button class="btn">Get ticket</button>
            </div>
          </div>
          <!-- /.info -->
        </div>
        <!-- /.event -->

        <div class="event d-flex j-space-b col-47">
          <div class="text">
            <h5>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              Illinois, US
            </h5>
            <h3>Consumer Food Safety Education Conference</h3>
          </div>
          <!-- /.text -->
          <div class="info">
            <div class="date">
              <div>22</div>
              <h5>nov</h5>
            </div>
            <div class="ticket">
              <button class="btn">Get ticket</button>
            </div>
          </div>
          <!-- /.info -->
        </div>
        <!-- /.event -->

        <div class="event d-flex j-space-b col-47">
          <div class="text">
            <h5>
              <font-awesome-icon icon="fa-solid fa-location-dot" />
              Dubai
            </h5>
            <h3>How meditation improve your mental healt?</h3>
          </div>
          <!-- /.text -->
          <div class="info">
            <div class="date">
              <div>22</div>
              <h5>nov</h5>
            </div>
            <div class="ticket">
              <button class="btn">Get ticket</button>
            </div>
          </div>
          <!-- /.info -->
        </div>
        <!-- /.event -->
      </div>
      <!-- /.events -->

      <div class="foot">
        <h5>
          Exited about our event?
          <span>
            View all events
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </span>
        </h5>
      </div>
    </div>
    <!-- /.container-md -->
  </section>
  <!-- /.events-section -->
</template>

<script>
export default {
  name: "MainEvents",
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.events-section {
  .container-md {
    margin-top: 8.5rem;
    .title {
      text-align: center;
      h4 {
        font-size: 13px;
        font-weight: 500;
        text-transform: uppercase;
        color: #6e6b69;
      }
      h2 {
        font-size: 42px;
        padding: 0.5rem 0;
        font-weight: 600;
        span {
          font-weight: 500;
          color: $btn;
        }
      }
    }

    .events {
      margin: 2.55rem 0 1.5rem;
      .event {
        margin-bottom: 1.75rem;
        background-color: #f8f8f8;
        border-radius: 0.35rem;
        transition: 0.45s;
        &:hover {
          box-shadow: 3px 3px 10px 2px #dbd9d9d3;
          cursor: pointer;
          background-color: $white;
        }
        .text {
          width: 70%;
          padding: 2rem;
          h5 {
            font-weight: 500;
            color: #969391;
          }
          h3 {
            padding: 0.65rem 0;
            font-weight: 600;
            font-size: 17px;
          }
        }
        .info {
          padding: 1rem 1.5rem 1rem 0rem;
          .date {
            text-align: center;
            div {
              font-size: 44px;
              color: $btn;
            }
            h5 {
              text-transform: uppercase;
              color: #333;
            }
          }
          .ticket {
            padding-bottom: 0.75rem;
            button {
              padding: 0.4rem 1.75rem;
              transition: 0.5s;
              &:hover {
                background-color: #3f3a64;
                cursor: pointer;
                transform: scale(1.022);
              }
            }
          }
        }
      }
    }

    .foot {
      text-align: center;
      h5 {
        font-size: 15px;
        font-weight: 600;
        color: #74716f;
        span {
          font-weight: 700;
          color: $btn;
          transition: 0.44s;
          &:hover {
            color: #3f3a64;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>