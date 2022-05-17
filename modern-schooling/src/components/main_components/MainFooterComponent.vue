<template>
  <section class="main-footer">
    <div class="container-md m-auto p-relative">
      <div class="title">
        <h4>
          Start today for etting
          <span> Online Certification </span>
        </h4>
        <h2>You can be your own guiding star with our help!</h2>
      </div>
      <!-- /.title -->

      <div class="start">
        <button class="btn">Get started now</button>
      </div>
      <!-- /.start -->
      <div class="images">
        <div class="cirle-shape p-absolute">
          <div></div>
        </div>
        <div class="line-img-shape p-absolute">
          <img src="@/assets/img/maxcoach-shape-01.png" alt="" />
        </div>
        <div class="semi-circle-img-shape p-absolute">
          <img height="105" src="@/assets/img/maxcoach-shape-02.png" alt="" />
        </div>
      </div>
      <!-- /.images -->
    </div>
    <!-- /.container-md -->
  </section>
  <!-- /.main-footer -->
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

.main-footer {
  background-color: #f8f8f8;
  .container-md {
    text-align: center;
    .title {
      h4 {
        font-weight: 600;
        font-size: 20px;
        span {
          color: $btn;
        }
      }
      h2 {
        font-weight: 600;
        font-size: 31px;
      }
    }
    .start {
      padding: 1.35rem 0 5.55rem;
      button {
        padding: 0.85rem 4.35rem;
        transition: 0.66s;
        &:hover {
          background-color: #3f3a64;
          cursor: pointer;
          transform: scale(1.011);
        }
      }
    }
    .images {
      .cirle-shape {
        top: 1rem;
        left: 2.8rem;
        div {
          width: 47px;
          height: 47px;
          border: 6px solid #e6dcd2;
          border-radius: 50%;
        }
      }
      .line-img-shape {
        top: 4.35rem;
        left: 3.5rem;
      }
      .semi-circle-img-shape {
        bottom: 3.5rem;
        right: 0;
      }
    }
  }
}
</style>