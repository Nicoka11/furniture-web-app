<template>
  <div class="container">
    <div class="container-landing">
      <div class="wraper">
        <h1 class="title">
          Bits & <br />
          Plants
        </h1>
        <p class="subtitle">
          Decorative furniture and plants for your interiors
        </p>
        <a href="/#/home" class="cta-button">See more</a>
      </div>
      <img
        src="../assets/landing-page-bg.jpg"
        alt="Landing page background image"
        class="bg-image"
      />

      <div class="linear-gradient"></div>
    </div>
  </div>
</template>

<script>
  import gsap from "gsap";
  export default {
    components: {},
    data: () => ({}),
    methods: {
      animText: function(e) {
        console.log(e);
        gsap.to(".title", { rotation: 27, x: 100, duration: 1 });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .scroll-btn {
    display: block;
    position: relative;
    top: 90%;
    color: #fff;
    background: #333333;
  }
  .container {
    display: flex;
    justify-content: center;
  }
  .container-landing {
    width: 1100px;
    height: 85vh;
    position: relative;
    text-align: left;
  }
  .wraper {
    align-items: top;
    position: absolute;
  }
  .linear-gradient {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -8;
    background: rgb(255, 253, 247);
    background: linear-gradient(
      90deg,
      rgba(255, 253, 247, 0.77) 0%,
      rgba(255, 253, 247, 0) 100%
    );
  }
  .title {
    margin: 125px 0px 5px -12px;
    font-family: "Raleway", sans-serif;
    line-height: 81.8%;
    font-size: 10.625rem;
  }
  .subtitle {
    margin-bottom: 50px;
    font-size: 1.25rem;
    position: relative;
  }
  .cta-button {
    display: inline-block;
    text-decoration: none;
    font-size: 1.25rem;
    padding: 10px 45px;
    background-color: #2ca58d;
    color: #fffdf7;
    font-weight: 400;
    transition: all 0.1s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
    }
  }
  .bg-image {
    width: 61.2rem;
    height: 38rem;
    object-fit: cover;
    position: absolute;
    left: 125px;
    z-index: -10;
  }
</style>
