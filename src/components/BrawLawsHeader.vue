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
          span.header__avatar-img
            img(:src="require('@/assets/img/' + item.src)")
          h3.header__avatar-nails-title {{ item.title }}
      .header__info
        .header__info-bg
          img(:src="require('@/assets/img/' + header.info.bg)")
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
  padding: 40px 0 100px;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  z-index: 500;

  @media (min-width: 480px) {
    padding: 100px 0;
  }

  @media (min-width: 720px) {
    padding: 150px 0;
  }

  @media (min-width: 769px) {
    padding: 200px 0;
  }

  @media (min-width: 1920px) {
    width: calc(100% - 400px);
  }
}

.header-wrap {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 100px;
  align-items: center;
  justify-items: center;
  height: 100%;

  @media (min-width: 720px) {
    gap: 150px;
  }

  @media (min-width: 1220px) {
    grid-template-columns: 1fr 1fr;
    gap: 0px;
  }
}

.header__avatar {
  position: relative;
  gap: 40px;
  grid-template-areas: "avatarMain" "avatarPerm" "avatarBrow" "avatarEye" "avatarNail";
  grid-template-columns: 1fr;
  display: grid;
  width: 100%;
  justify-items: center;

  @media (min-width: 480px) {
    gap: 40px;
    grid-template-areas: "avatarMain avatarMain" "avatarPerm avatarBrow" "avatarEye avatarNail";
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 720px) {
    display: flex;
    width: auto;
  }
}

.header__avatar-main {
  position: relative;
  display: block;
  width: 300px;
  height: 300px;
  border-radius: 35%;
  transform: rotate(45deg);
  z-index: 5;
  grid-area: avatarMain;

  @media (min-width: 480px) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: 1500px) {
    width: 500px;
    height: 500px;
  }

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

.header__avatar-main-img {
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

    @media (min-width: 1500px) {
      width: calc(100% - 60px);
      height: calc(100% - 60px);
    }
  }
}

.header__avatar-img {
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  background: rgb(128, 0, 117);
  border-radius: 24px;
  z-index: 5;
  overflow: hidden;

  @media (min-width: 480px) {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    border-radius: 35%;
    height: 100%;
  }

  img {
    transform: scale(1.2);
    position: absolute;
    top: 20px;
    left: 45px;
    width: calc(100% - 90px);
    height: calc(100% - 40px);
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    overflow: hidden;
    pointer-events: none;

    @media (min-width: 480px) {
      left: 30px;
      top: 30px;
      width: calc(100% - 60px);
      height: calc(100% - 60px);
      transform: rotate(-45deg) scale(1.2);
    }

    @media (min-width: 1500px) {
      width: calc(100% - 60px);
      height: calc(100% - 60px);
    }
  }
}

.header__avatar-perm,
.header__avatar-brow,
.header__avatar-eyelashes,
.header__avatar-nails {
  position: relative;
  display: block;
  width: 100%;
  height: 200px;
  z-index: 5;

  @media (min-width: 480px) {
    width: 200px;
    height: 200px;
    border-radius: 35%;

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

  @media (min-width: 720px) {
    position: absolute;
    width: 150px;
    height: 150px;
  }

  @media (min-width: 1500px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 1700px) {
    width: 250px;
    height: 250px;
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
  grid-area: avatarPerm;

  @media (min-width: 480px) {
    transform: rotate(45deg);
  }

  @media (min-width: 720px) {
    bottom: -40%;
    right: -40%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  @media (min-width: 1700px) {
    bottom: -50%;
    right: -50%;
  }
}

.header__avatar-brow {
  grid-area: avatarBrow;

  @media (min-width: 480px) {
    transform: rotate(45deg);
  }

  @media (min-width: 720px) {
    bottom: -40%;
    left: -40%;
    transform: translate(50%, -50%) rotate(45deg);
  }

  @media (min-width: 1700px) {
    bottom: -50%;
    left: -50%;
  }
}

.header__avatar-eyelashes {
  grid-area: avatarEye;

  @media (min-width: 480px) {
    transform: rotate(45deg);
  }

  @media (min-width: 720px) {
    top: -40%;
    right: -40%;
    transform: translate(-50%, 50%) rotate(45deg);
  }

  @media (min-width: 1700px) {
    top: -50%;
    right: -50%;
  }
}

.header__avatar-nails {
  grid-area: avatarNail;

  @media (min-width: 480px) {
    transform: rotate(45deg);
  }

  @media (min-width: 720px) {
    top: -40%;
    left: -40%;
    transform: translate(50%, 50%) rotate(45deg);
  }

  @media (min-width: 1700px) {
    top: -50%;
    left: -50%;
  }
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
  font-size: 18px;
  font-family: var(--linkFont);
  color: #fff;
  text-shadow: 1px 2px 4px #000000;
  text-align: center;
  z-index: 10;
  pointer-events: none;

  @media (min-width: 480px) {
    transform: rotate(-45deg);
  }

  @media (min-width: 1500px) {
    font-size: 22px;
  }

  @media (min-width: 1700px) {
    font-size: 26px;
  }

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
  width: 100%;
  padding: 40px 0px 40px;

  @media (min-width: 480px) {
    width: 400px;
    padding: 40px 15px 15px;
  }

  @media (min-width: 720px) {
    width: 500px;
    height: 650px;
    padding: 65px 15px 15px;
  }
}

.header__info-bg {
  position: absolute;
  top: -50px;
  left: -50px;
  width: 100%;
  height: calc(100% + 100px);
  z-index: -1;
  filter: saturate(0.5);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% + 100px);
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    height: 100%;
  }
}

.header__info-title {
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
  line-height: 2;
  letter-spacing: 2px;
  font-family: var(--linkFont);
  border: 2px solid var(--mainPincClr);
  border-radius: 30px;

  @media (min-width: 480px) {
    font-size: 24px;
  }

  @media (min-width: 720px) {
    font-size: 28px;
  }
}

.header__info-text {
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 1px;

  @media (min-width: 480px) {
    font-size: 17px;
  }

  @media (min-width: 720px) {
    font-size: 20px;
    line-height: 1.5;
  }
}
</style>