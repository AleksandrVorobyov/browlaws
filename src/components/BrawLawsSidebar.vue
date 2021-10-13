<template lang="pug">
section#sidebar.sidebar
  .sidebar-wrap
    .sidebar__logo
      router-link.sidebar__logo-link(to="/")
        img(
          :src="require('@/assets/img/' + sidebar.logo.src)",
          :alt="sidebar.logo.alt"
        )
    .sidebar__title
      h2.sidebar__title-text {{ sidebar.title }}
    .sidebar__list
      ul.sidebar__list-wrap
        li.sidebar__list-item(v-for="list in sidebar.list")
          router-link.sidebar__list-link(
            :to="list.href",
            @click="fixedPage(), sidebarUnlock(), scrollToTop()"
          )
            span {{ list.text }}
    .sidebar__contact
      h2.sidebar__social-title {{ sidebar.contact.title }}
      p.sidebar__social-text {{ sidebar.contact.adress }}
      .sidebar__social-map(v-html="sidebar.contact.map")
    .sidebar__social
      h2.sidebar__social-title {{ sidebar.social.title }}
      ul.sidebar__social-list
        li.sidebar__social-list-item(v-for="item in sidebar.social.list")
          a.sidebar__social-list-link(
            :href="item.href",
            target="_blank",
            :class="item.class"
          )
            img(:src="require('@/assets/img/' + item.src)")
            h4 {{ item.title }}
  button#sidebarBtn.sidebar__btn(
    @click="sidebarUnlock(), fixedPage()",
    type="button"
  )
    span
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["sidebar"]),
  },
  methods: {
    sidebarUnlock() {
      this.$store.commit("sidebarUnlock");
    },
    fixedPage() {
      this.$store.commit("fixedPage");
    },
    scrollToTop() {
      this.$store.commit("scrollToTop");
    },
  },
};
</script>
<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  overflow: visible;
  z-index: 2000;
  background: var(--bgsidebar);
  transition: right 0.5s ease-in-out;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-resizer {
    width: 0px;
    height: 0px;
  }

  @media (min-width: 480px) {
    border-left: 2px solid var(--mainPincClr);
    width: 400px;
    right: -400px;
  }

  @media (min-width: 1920px) {
    right: 0;
  }
}

.sidebar--active {
  right: 0;
}

.sidebar-wrap {
  background: var(--bgsidebar);
  z-index: 100;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  height: 100%;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-resizer {
    width: 0px;
    height: 0px;
  }
}

.sidebar__logo {
  margin: 0 30px 30px;
}

.sidebar__logo-link {
  display: block;
  position: relative;
  width: 100%;
  height: 200px;
  border-bottom: 2px solid var(--mainPincClr);
  img {
    position: relative;
    object-fit: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
}

.sidebar__contact,
.sidebar__social {
  margin-bottom: 20px;
}

.sidebar__title,
.sidebar__social-title,
.sidebar__social-title {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  color: var(--mainPincClr);
  font-family: var(--linkFont);
}

.sidebar__title-text,
.sidebar__social-title {
  font-size: 32px;
  line-height: 1;
  letter-spacing: 1px;
}

.sidebar__list-wrap {
  padding: 0;
  list-style: none;
  display: grid;
  gap: 20px;
}

.sidebar__list-link {
  display: block;
  position: relative;
  padding: 15px 30px;
  color: var(--mainPincClr);
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
  background: rgb(0, 0, 0);
  text-decoration: none;
  font-family: var(--linkFont);

  @media (min-width: 480px) {
    letter-spacing: 2px;
    font-size: 26px;
  }

  &::before {
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: #fff;
    content: "";
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0px 0px 10px #0003;
    transition: all 0.4s ease-in-out;
  }

  &::after {
    position: absolute;
    left: 0px;
    top: 0%;
    width: 100%;
    height: 100%;
    background: var(--mainPincClr);
    content: "";
    z-index: 5;
    box-shadow: 0px 0px 10px #0003;
    transition: all 0.4s ease-in-out;
  }

  &:hover {
    &::before {
      left: calc(100% - 20px);
    }

    &::after {
      left: 100%;
    }
  }
}

.router-link-active.sidebar__list-link {
  &::before {
    left: calc(100% - 20px);
  }

  &::after {
    left: 100%;
  }
}

.sidebar__social-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 20px;
}

.sidebar__social-list-link.sidebar__social-instagram:hover {
  background: var(--socialLinearInst);
}

.sidebar__social-list-link.sidebar__social-telegram:hover {
  background: var(--socialLinearTele);
}

.sidebar__social-list-link.sidebar__social-whatsapp:hover {
  background: var(--socialLinearWhat);
}

.sidebar__social-list-link {
  height: 60px;
  position: relative;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: #0003;
  text-decoration: none;
  border: 5px solid var(--mainPincClr);
  border-left: 5px solid var(--mainPincClr);
  transition: all 0.4s linear;

  @media (min-width: 480px) {
    border-left: 3px solid var(--mainPincClr);
  }

  img {
    position: relative;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }

  h4 {
    color: var(--mainPincClr);
    font-size: 18px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 2px;
    margin: 0;
  }
}

.sidebar__contact {
  padding: 0 20px;
}

.sidebar__social-text {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #000;
}

.sidebar__btn {
  position: fixed;
  display: block;
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  background: var(--mainPincClr);
  border-radius: 50%;
  z-index: 50;
  cursor: pointer;
  outline: none;
  border: none;
  opacity: 1;
  transition: right 0s linear, z-index 0s linear 0s, transform 0s linear 0s;
  box-shadow: 0px 0px 5px #000;
  visibility: visible;

  span {
    pointer-events: none;
  }
}

.sidebar__btn--active {
  right: calc(100% - 40px);
  z-index: 1000;
  transform: translateY(-50%) rotate(180deg);
  transition: right 0.5s ease-in-out, z-index 0s linear 0.5s,
    transform 0s linear 0.5s;

  @media (min-width: 480px) {
    right: 360px;
    transform: translateY(-50%);
    z-index: -1;
  }
}

.sidebar__btn::before {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  width: 2px;
  background: rgb(255, 255, 255);
  content: "";
  pointer-events: none;
}

.sidebar__btn::after {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  width: 2px;
  background: rgb(255, 255, 255);
  content: "";
  pointer-events: none;
}

.sidebar__btn span::before {
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  width: 2px;
  background: rgb(255, 255, 255);
  content: "";
  pointer-events: none;
}

@media (min-width: 1920px) {
  .sidebar__btn {
    display: none;
  }
}
</style>