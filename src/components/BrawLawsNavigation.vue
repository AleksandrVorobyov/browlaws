<template lang="pug">
section.navigation
  .navigation-wrap
    .navigation__logo
      router-link.navigation__logo-link(to="/")
        img(
          :src="require('@/assets/img/' + navigation.logo.src)",
          :alt="navigation.logo.alt"
        )
    .navigation__title
      h2.navigation__title-text {{ navigation.title }}
    .navigation__list
      ul.navigation__list-wrap
        li.navigation__list-item(v-for="list in navigation.list")
          router-link.navigation__list-link(:to="list.href")
            span {{ list.text }}
    .navigation__contact
      h2.navigation__social-title {{ navigation.contact.title }}
      p.navigation__social-text {{ navigation.contact.adress }}
      .navigation__social-map(v-html="navigation.contact.map")
    .navigation__social
      h2.navigation__social-title {{ navigation.social.title }}
      ul.navigation__social-list
        li.navigation__social-list-item(v-for="item in navigation.social.list")
          a.navigation__social-list-link(
            :href="item.href",
            :class="item.class"
          )
            img(:src="require('@/assets/img/' + item.src)")
            h4 {{ item.title }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["navigation"]),
  },
};
</script>
<style lang="scss">
.navigation {
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2000;
  background: var(--bgNavigation);
  border-left: 2px solid var(--mainPincClr);

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
.navigation-wrap {
  position: relative;
}

.navigation__logo {
  margin: 0 30px 30px;
}

.navigation__logo-link {
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

.navigation__contact,
.navigation__social {
  margin-bottom: 20px;
}

.navigation__title,
.navigation__social-title,
.navigation__social-title {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  color: var(--mainPincClr);
  font-family: var(--linkFont);
}

.navigation__title-text,
.navigation__social-title {
  font-size: 32px;
  line-height: 1;
  letter-spacing: 1px;
}

.navigation__list {
}

.navigation__list-wrap {
  padding: 0;
  list-style: none;
  display: grid;
  gap: 20px;
}

.navigation__list-link {
  display: block;
  position: relative;
  padding: 15px 30px;
  color: var(--mainPincClr);
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 2px;
  background: rgb(0, 0, 0);
  text-decoration: none;
  font-family: var(--linkFont);

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

.router-link-active.navigation__list-link {
  &::before {
    left: calc(100% - 20px);
  }

  &::after {
    left: 100%;
  }
}

.navigation__social-list {
  padding: 0;
  margin: 0;
  list-style: none;
  display: grid;
  gap: 20px;
}

.navigation__social-list-link.navigation__social-instagram:hover {
  background: var(--socialLinearInst);
}

.navigation__social-list-link.navigation__social-telegram:hover {
  background: var(--socialLinearTele);
}

.navigation__social-list-link.navigation__social-whatsapp:hover {
  background: var(--socialLinearWhat);
}

.navigation__social-list-link {
  height: 60px;
  position: relative;
  width: 100%;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: #0003;
  text-decoration: none;
  border: 5px solid var(--mainPincClr);
  border-left: 3px solid var(--mainPincClr);
  transition: all 0.4s linear;

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

.navigation__contact {
  padding: 0 20px;
}

.navigation__social-text {
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #000;
}
</style>