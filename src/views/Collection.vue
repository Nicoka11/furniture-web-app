<template>
  <div class="container">
    <div class="collections">
      <div class="collection">
        <div class="image"></div>
      </div>
      <div class="collection">
        <div class="image"></div>
      </div>
      <div class="collection">
        <div class="image"></div>
      </div>
      <div class="collection">
        <div class="image"></div>
      </div>
      <div class="collection">
        <div class="image"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";
  $animation-duration: 0.4s;

  @mixin collection-settings($height, $image, $content, $color){
      height: $height;
      & .image {
        background-position: center;
        background-image: $image;
      }
      &::after {
        content: $content;
        color: $color;
      }
    }

  .container {
    display: flex;
    justify-content: center;
  }
  .collections {
    display: flex;
    justify-content: space-between;
    width: $main-width;
  }
  .collection {
    position: relative;
    display: inline-block;
    width: 100%;
    overflow: hidden;
    transition: all $animation-duration ease;
    & .image {
      background-size: cover;
      width: 100%;
      height: 100%;
      transition: all 0.4s ease;
    }

    &:hover .image {
      transform: scale(1.2);
    }

    &::after {
      display: inline-block;
      position: absolute;
      top: 1%;
      right: 1%;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font: 600 2.4rem/2.4rem "Montserrat", sans-serif;
      letter-spacing: 5px;
      white-space: pre;
      text-align: left;
      z-index: 2;
      opacity: 0;
      transform: translateX(-3rem);
      transition: all $animation-duration ease;
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
      transform: translateY(-100%);
      transition-property: transform;
      transition: all $animation-duration ease;
    }

    &:hover {
      &::before {
        transform: translateY(0%);
      }
      &::after {
        opacity: 1;
        transform: translateX(0);
        transition-delay: $animation-duration/3;
      }
    }
    &:nth-child(1) {
      @include collection-settings(70vh,url(../assets/collection/all/1.jpg),"MEDITERRANEAN\aLIVING",#172e4e)
    }
    &:nth-child(2) {
      @include collection-settings(79vh,url(../assets/collection/all/2.jpg),"WINE TERRITORY\a EXPLORATION",#936f4d)
    }
    &:nth-child(3) {
      @include collection-settings(60vh,url(../assets/collection/all/3.jpg),"CONTEMPORARY\a DIVISION",#ba5a00)
    }
    &:nth-child(4) {
      @include collection-settings(68vh,url(../assets/collection/all/4.jpg),"URBAN\a DISCOVERY",#60574f)
    }
    &:nth-child(5) {
      @include collection-settings(75vh,url(../assets/collection/all/5.jpg),"WORKER\a SPACES",#60574f)
    }

    &:not(:last-child) {
      margin-right: 45px;
    }
  }
</style>
