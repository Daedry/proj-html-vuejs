<template>
  <section class="main-info-counter">
    <div class="container-lg">
      <div class="container-md m-auto d-flex j-space-a">
        <div class="finished-session info">
          <div>1.926</div>
          <h4>finished sessions</h4>
        </div>
        <!-- /.finished-session -->

        <div class="enrolled-learners info">
          <div>3.092+</div>
          <h4>Enrolled learners</h4>
        </div>
        <!-- /.enrolled-learners -->

        <div class="online-instructors info">
          <div>200</div>
          <h4>Online Instructors</h4>
        </div>
        <!-- /.online-instructors -->

        <div class="satisfaction-rate info">
          <div>100%</div>
          <h4>satisfaction rate</h4>
        </div>
        <!-- /.satisfaction-rate -->
      </div>
      <!-- /.container-md -->
    </div>
    <!-- /container-lg -->
  </section>
  <!-- /.info-counter -->
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.main-info-counter {
  .container-lg {
    background-color: #faf8f6;
    .container-md {
      margin-top: 3rem;
      text-align: center;
      .info {
        padding: 2.5rem 0rem;
        transition: all 0.44s;
        &:hover {
          cursor: pointer;
          transform: scale(1.011);
        }
        &:hover div {
          color: #3f3a64;
          cursor: pointer;
          transform: scale(1.022);
        }
        &:hover h4 {
          color: $btn;
          cursor: pointer;
          transform: scale(1.22);
        }
        div {
          font-size: 38px;
          font-weight: 600;
          color: $btn;
          transition: all 0.88s;
        }
        h4 {
          color: #4e547e;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          transition: all 0.44s;
        }
      }
    }
  }
}
</style>