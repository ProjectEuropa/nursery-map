<template>
  <div>
    <article class="nursery-img-area pure-g">
      <section class="top-title">
        <p class="">保育園を見つける</p>
        <p class="sub-text">地元の保育園の地図を探そう</p>
        <a class="pure-button pure-button-primary button-secondary btn-text" href="/list">一覧を見る</a>
      </section>
    </article>
    <article class="card-area">
      <h3>最近の追加MAP</h3>
      <div class="flex">
        <section class="card">
          <img class="card-img" src="@/assets/images/saitama/yashio.png" alt="">
          <div class="card-content">
            <h4 class="card-title">八潮市の保育園MAP</h4>
            <p class="card-text">埼玉県南部に位置する八潮市の保育園MAPです。</p>
          </div>
          <div class="card-link">
            <a href="/saitama/yashio">八潮市の保育園MAPを見る</a>
          </div>
        </section>
        <section class="card">
          <img class="card-img" src="@/assets/images/saitama/misato.png" alt="">
          <div class="card-content">
            <h4 class="card-title">三郷市の保育園MAP</h4>
            <p class="card-text">埼玉県南部に位置する三郷市の保育園MAPです。</p>
          </div>
          <div class="card-link">
            <a href="/saitama/misato">三郷市の保育園MAPを見る</a>
          </div>
        </section>
        <section class="card">
          <img class="card-img" src="@/assets/images/saitama/souka.png">
          <div class="card-content">
            <h4 class="card-title">草加市の保育園MAP</h4>
            <p class="card-text">埼玉県南部に位置する草加市の保育園MAPです。</p>
          </div>
          <div class="card-link">
            <a href="/saitama/souka">草加市の保育園MAPを見る</a>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
};
</script>

<style scoped>
.nursery-img-area {
  background: url(~/assets/images/nursery-building.jpg) no-repeat center;
  background-size: cover;
  margin-bottom: -20px;
  height: 800px;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.nursery-img-area:before {
  content: "";
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  background: inherit;
  filter: blur(6px);
  z-index: -1;
}
.top-title {
  border-radius: 0;
  color: #fff;
  font-family: Raleway;
  font-size: 120px;
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 1.2;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  z-index: 2;
}

.sub-text, .btn-text {
  font-size: 30px;
  font-weight: 700;
}

.button-secondary {
  background: rgb(66, 184, 221);
}

.nursery-img {
  height: auto;
  height: 350px;
}

.l-box {
  padding-top: 55px;
}

.flex {
  display: flex;
  justify-content: space-evenly;
}

.card-area {
  background-color: aliceblue;
  padding-bottom: 30px;
}

.card {
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  width: 350px;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
}

@media screen and (max-width: 480px){
  .flex {
    flex-wrap: wrap;
  }
}
</style>

