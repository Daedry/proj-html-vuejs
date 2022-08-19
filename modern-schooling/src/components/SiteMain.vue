<template>
  <main>
      
    <MainHead />

    <MainBuild />

    <MainCareer />

    <MainCounter />

    <MainCourses />

    <MainPace />

    <MainMobile />

    <MainEvents />

    <MainTestimonial />

    <MainFooter />

  </main>
</template>

<script>
import MainHead from "@/components/main_components/MainHeadComponent.vue";
import MainBuild from "@/components/main_components/MainBuildComponent.vue";
import MainCareer from "@/components/main_components/MainCareerComponent.vue";
import MainCounter from "@/components/main_components/MainCounterComponent.vue";
import MainCourses from "@/components/main_components/MainCoursesComponent.vue";
import MainPace from "@/components/main_components/MainPaceComponent.vue";
import MainMobile from "@/components/main_components/MainMobileComponent.vue";
import MainEvents from "@/components/main_components/MainEventsComponent.vue";
import MainTestimonial from "@/components/main_components/MainTestimonialComponent.vue";
import MainFooter from "@/components/main_components/MainFooterComponent.vue";

export default {
  name: "SiteMain",
  components: {
    MainHead,
    MainBuild,
    MainCareer,
    MainCounter,
    MainCourses,
    MainPace,
    MainMobile,
    MainEvents,
    MainTestimonial,
    MainFooter,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";

</style>