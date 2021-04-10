<template>
  <div class="nav">
    <div class="nav-container">
      <a href="/home" class="logo"></a>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/collection">Collection</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss" scoped>
  .logo {
    display: block;
    width: 51px;
    height: 51px;
    background: url(../assets/logo-small.svg);
    background-size: contain;
  }

  .nav {
    display: flex;
    justify-content: center;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1100px;
  }
  ul {
    margin: 0 0;
    &:first-child li a {
      color: #2ca58d;
      transition: all 0.2s ease;
    }
    li {
      a {
        text-decoration: none;
        color: #333333;
        transition: all .2s ease;
        &:hover {
          color: #90cbb8;
        }
      }
      margin: 28px 0;
      list-style-type: none;
      font-weight: 500;
      font-size: 1.1rem;
      cursor: pointer;
      display: inline-block;
      transition: all 0.2s ease;

      &:not(:last-child) {
        margin-right: 63px;
      }
    }
  }
</style>
