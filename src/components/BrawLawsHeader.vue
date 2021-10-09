<template lang="pug">
section.header
  .container
    .header-wrap
      .header__avatar
        .header__avatar-main
          .header__avatar-main-img
            img(:src="require('@/assets/img/' + header.avatar.main.src)")
        router-link(
          v-for="item in header.avatar.list",
          :to="item.href",
          :class="item.class"
        )
          .header__avatar-img
            img(:src="require('@/assets/img/' + item.src)")
          h3.header__avatar-nails-title {{ item.title }}
      .header__info
        .header__info-bg
          img(src="@/assets/img/header/pergament.png")
        h1.header__info-title {{ header.info.title }}
        p.header__info-text(v-for="item in header.info.text") {{ item }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["header"]),
  },
};
</script>
<style scoped lang="scss">
.header {
  position: relative;
  padding: 200px 0;
  height: 100vh;
  width: calc(100% - 400px);
  overflow: hidden;
  z-index: 500;
}

.header-wrap {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 100%;
}

.header__avatar {
  position: relative;
}

.header__avatar-main {
  position: relative;
  display: block;
  width: 500px;
  height: 500px;
  border-radius: 35%;
  transform: rotate(45deg);
  z-index: 5;

  &::before {
    position: absolute;
    content: "";
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgb(73, 3, 67);
    border-radius: 35%;
    z-index: -5;
    animation: circleRotate 5s linear 0s infinite alternate-reverse;
  }
}

.header__avatar-main-img,
.header__avatar-img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgb(128, 0, 117);
  border-radius: 35%;
  z-index: 5;
  overflow: hidden;

  img {
    transform: rotate(-45deg) scale(1.2);
    position: absolute;
    top: 30px;
    left: 30px;
    width: calc(100% - 60px);
    height: calc(100% - 60px);
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;
  }
}

.header__avatar-perm,
.header__avatar-brow,
.header__avatar-eyelashes,
.header__avatar-nails {
  position: absolute;
  display: block;
  width: 250px;
  height: 250px;
  border-radius: 35%;
  z-index: 5;

  &::before {
    position: absolute;
    content: "";
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    background: rgb(73, 3, 67);
    border-radius: 35%;
    z-index: -5;
    animation: circleRotate 5s linear 0s infinite alternate-reverse;
  }
}

.header__avatar-perm,
.header__avatar-brow,
.header__avatar-eyelashes,
.header__avatar-nails {
  img {
    filter: drop-shadow(2px 4px 6px black) grayscale(0.2);
  }

  &:hover {
    .header__avatar-nails-title::before {
      background: rgba(0, 0, 0, 0.6);
    }
  }
}

.header__avatar-perm {
  bottom: -50%;
  right: -50%;
  transform: translate(-50%, -50%) rotate(45deg);
}

.header__avatar-brow {
  bottom: -50%;
  left: -50%;
  transform: translate(50%, -50%) rotate(45deg);
}

.header__avatar-eyelashes {
  top: -50%;
  right: -50%;
  transform: translate(-50%, 50%) rotate(45deg);
}

.header__avatar-nails {
  top: -50%;
  left: -50%;
  transform: translate(50%, 50%) rotate(45deg);
}

.header__avatar-nails-title {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  font-family: var(--linkFont);
  color: #fff;
  text-shadow: 1px 2px 4px #000000;
  transform: rotate(-45deg);
  text-align: center;
  z-index: 10;
  pointer-events: none;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background: #0003;
    border-radius: 50%;
    z-index: -5;
    transition: 0.4s linear;
  }
}

@keyframes circleRotate {
  to {
    transform: rotate(360deg);
  }
}

.header__info {
  position: relative;
  border-radius: 30px;
  width: 500px;
  height: 650px;
  padding: 65px 15px 15px;
}

.header__info-bg {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 100%;
  height: 800px;
  z-index: -1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 100px);
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.header__info-title {
  margin-bottom: 30px;
  text-align: center;
  font-size: 28px;
  line-height: 2;
  letter-spacing: 2px;
  font-family: var(--linkFont);
  border: 2px solid var(--mainPincClr);
  border-radius: 30px;
}

.header__info-text {
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}
</style>