<template>
  <div class="container">
    <div class="collections">
      <div class="collection"></div>
      <div class="collection"></div>
      <div class="collection"></div>
      <div class="collection"></div>
      <div class="collection"></div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  $animation-duration: .4s;


  .container {
    display: flex;
    justify-content: center;
  }
  .collections {
    display: flex;
    justify-content: space-between;
    width: 1100px;
  }
  .collection {
    position: relative;
    display: inline-block;
    background-position: center;
    width: 100%;
    overflow: hidden;
    transition: all $animation-duration ease;

    &::after {
      display: inline-block;
      position: absolute;
      top: 1%;
      left: 58%;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font: 600 2.4rem/2.4rem 'Montserrat', sans-serif;
      letter-spacing: 5px;
      white-space: pre;
      text-align: left;
      z-index: 2;
      opacity: 0;
      transform: translateX(-3rem);
      transition: all $animation-duration ease

    }

    &::before {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      opacity: 1;
      background: linear-gradient(
        rgba(255, 253, 247, 1) 0%,
        rgba(255, 253, 247, 0) 100%
      );
      transform: translateY(-40rem);
      transition-property: transform;
      transition: all $animation-duration ease;
    }

    &:hover {
      &::before {
        transform: translateY(0px);
      }
      &::after{
        opacity: 1;
        transform: translateX(0);
        transition-delay: $animation-duration/3;
      }
    }

    &:nth-child(1) {
      background-image: url(../assets/collection/all/1.jpg);
      background-size: 450%;
      height: 35rem;
      &:hover {
        background-size: 500%;
      }
      &::after {
        content: "MEDITERRANEAN\aLIVING";
        color: #172E4E;
      }
    }
    &:nth-child(2) {
      background-image: url(../assets/collection/all/2.jpg);
      background-size: 370%;
      height: 40rem;
      &:hover {
        background-size: 420%;
      }
      &::after {
        content: "WINE TERRITORY\a EXPLORATION";
        color: #936F4D;
      }
    }
    &:nth-child(3) {
      background-image: url(../assets/collection/all/3.jpg);
      background-size: 190%;
      height: 30rem;
      &:hover {
        background-size: 240%;
      }
      &::after {
        content: "CONTEMPORARY\a DIVISION";
        color: #ba5a00;
      }
    }
    &:nth-child(4) {
      background-image: url(../assets/collection/all/4.jpg);
      background-size: 500%;
      height: 32rem;
      &:hover {
        background-size: 550%;
      }
      &::after {
        content: "URBAN\a DISCOVERY";
        color: #60574F;
      }
    }
    &:nth-child(5) {
      background-image: url(../assets/collection/all/5.jpg);
      background-size: 450%;
      height: 38rem;
      &:hover {
        background-size: 500%;
      }
      &::after {
        content: "WORKER\a SPACES";
        color: #60574F;
      }
    }

    &:not(:last-child) {
      margin-right: 45px;
    }
  }
</style>
