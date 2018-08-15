<template>
  <div>
    <article class="nursery-img-area pure-g">
      <section class="photo-box">
        <img src="@/assets/images/nursery-house.png" alt="" class="nursery-img">
      </section>
      <section class="text-box pure-u-1 pure-u-md-1-2 pure-u-lg-2-3" id="">
            <div class="l-box" id="">
                <h2 class="text-box-head">保育園簡易MAP β版へようこそ！</h2>
                <p class="text-box-subhead">八潮市在住の個人製作による保育園簡易MAPです。</p>
          </div>
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
          <img class="card-img" src="@/assets/images/saitama/yashio.png" alt="">
          <div class="card-content">
            <h4 class="card-title">三郷市の保育園MAP</h4>
            <p class="card-text">埼玉県南部に位置する三郷市の保育園MAPです。</p>
          </div>
          <div class="card-link">
            <a href="/saitama/misato">三郷市の保育園MAPを見る</a>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // async asyncData () {
  //   let data = await axios.get('/api')
  //   console.log(data)
  //   return data.data
  // }
};
</script>

<style scoped>
.nursery-img-area {
  flex-flow: unset;
  margin-bottom: -25px;
}

.photobox,
.text-box {
  height: 350px;
  text-align: center;
  background-color: #f6f7f6;
  color: #000;
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
</style>

