<template>
  <div>
    <section>
      <div class="gallery">
        <div class="gallery__container"><div class="image hidden"></div></div>
        <div class="gallery__container"><div class="image hidden"></div></div>
        <div class="gallery__container"><div class="image hidden"></div></div>
        <div class="gallery__container"><div class="image hidden"></div></div>
        <div class="gallery__container"><div class="image hidden"></div></div>
        <div class="gallery__container"><div class="image hidden"></div></div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.observe();
    },
    methods: {
      observe: () => {
        setTimeout(() => {
          const observeOnScroll = function(entries) {
            entries.forEach((entry) => {
              console.log(entry.isIntersecting);
              if (!entry.isIntersecting) {
                entry.target.classList.remove("hidden");
              }
            });
          };
          const obsOptions = {
            threshold: 1,
          };
          const observer = new IntersectionObserver(
            observeOnScroll,
            obsOptions
          );

          const images = document.querySelectorAll(".image");
          images.forEach((img) => observer.observe(img));
        }, 1000);
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../styles/variables.scss";

  @mixin galleryImage($src, $axis, $bgPos, $row, $col) {
    & .image {
      background-image: $src;
      background-size: cover;
      @if $axis {
        background-position-y: $bgPos;
      } @else {
        background-position-x: $bgPos;
      }
      height: 100%;
      width: 100%;
    }
    grid-row: $row;
    grid-column: $col;
  }

  .hidden {
    transform: translateY(-100%);
  }

  section {
    display: inline-block;
    width: $main-width;
    height: 150px;
    margin-bottom: 5rem;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-gap: 1.5rem;
    width: $main-width;
    height: 200rem;
    position: relative;

    &__container {
      overflow: hidden;
      &:nth-child(1) {
        & .image {
          background-image: url(../assets/images/1.jpg);
          background-size: cover;
          background-position-y: 30%;
          height: 100%;
          width: 100%;
          transition: all 0.6s ease;
        }
        grid-row: 1/3;
        grid-column: 1/7;
      }

      &:nth-child(2) {
        & .image {
          background-image: url(../assets/images/2.jpg);
          background-size: cover;
          background-position-x: 70%;
          height: 100%;
          width: 100%;
          transition: all 0.6s ease;
        }
        grid-row: 3/6;
        grid-column: 1/3;
      }

      &:nth-child(3) {
        & .image {
          background-image: url(../assets/images/3.jpg);
          background-size: cover;
          background-position-x: 30%;
          height: 100%;
          width: 100%;
          transition: all 0.6s ease;
        }
        grid-row: 3/5;
        grid-column: 4/7;
      }

      &:nth-child(4) {
        & .image {
          background-image: url(../assets/images/4.jpg);
          background-size: cover;
          background-position-y: 30%;
          height: 100%;
          width: 100%;
          transition: all 0.6s ease;
        }
        grid-row: 5/8;
        grid-column: 3/7;
      }

      &:nth-child(5) {
        & .image {
          background-image: url(../assets/images/5.jpg);
          background-size: cover;
          background-position-y: 30%;
          height: 100%;
          width: 100%;
          transition: all 0.6s ease;
        }
        grid-row: 7/10;
        grid-column: 1/3;
      }

      &:nth-child(6) {
        & .image {
          background-image: url(../assets/images/6.jpg);
          background-size: cover;
          background-position-y: 30%;
          height: 100%;
          width: 100%;
          transition: all 0.6s ease;
        }
        grid-row: 8/10;
        grid-column: 3/7;
      }
    }
  }
</style>
