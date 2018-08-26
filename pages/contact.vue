<template>
  <article class="contact-area">
    <p class=""><a href="https://team-project-europa.netlify.com/">制作者のWEBページ</a>よりお問い合わせをお願い致します。</p>  
  </article>
</template>

<style scoped>
.contact-area {
  background: url(~/assets/images/contact.jpg) no-repeat center;
  background-size: cover;
  margin-bottom: -20px;
  height: 1000px;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

.contact-area:before {
  content: "";
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  background: inherit;
  filter: grayscale(80%);
  z-index: -1;
}
p {
  border-radius: 0;
  color: #fff;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 1.2;
  text-align: center;
  max-width: 100%;
  margin-top: 250px;
  z-index: 2;
}

a {
    color: royalblue;
}
</style>
