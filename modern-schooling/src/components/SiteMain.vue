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
import MainHead from "@/components/main_components/MainHeadComponent";
import MainBuild from "@/components/main_components/MainBuildComponent";
import MainCareer from "@/components/main_components/MainCareerComponent";
import MainCounter from "@/components/main_components/MainCounterComponent";
import MainCourses from "@/components/main_components/MainCoursesComponent";
import MainPace from "@/components/main_components/MainPaceComponent";
import MainMobile from "@/components/main_components/MainMobileComponent";
import MainEvents from "@/components/main_components/MainEventsComponent";
import MainTestimonial from "@/components/main_components/MainTestimonialComponent";
import MainFooter from "@/components/main_components/MainFooterComponent";

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