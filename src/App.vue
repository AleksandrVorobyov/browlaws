<template lang="pug">
#page.page
  <router-view/>
</template>

<style lang="scss">
:root {
  --bgPage: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url("~@/assets/img/page-back/pattern.jpg") top left / cover no-repeat;
  --bgNavigation: #fff;
  --mainPincClr: #d71a75;
  --linkFont: "TT-Italic";
  --socialLinearInst: linear-gradient(
    90deg,
    rgba(233, 229, 148, 1) 0%,
    rgba(238, 174, 202, 1) 100%
  );
  --socialLinearTele: linear-gradient(
    90deg,
    rgba(148, 227, 233, 1) 0%,
    rgba(61, 17, 255, 1) 100%
  );
  --socialLinearWhat: linear-gradient(
    90deg,
    rgb(136, 247, 103) 0%,
    rgb(14, 175, 54) 100%
  );
}

.container {
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}

::-webkit-scrollbar-button {
  width: 6px;
  height: 0px;
}

::-webkit-scrollbar-track {
  background-color: #32312e;
  box-shadow: 0px 0px 3px #000 inset;
}

::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background-color: #ffcb17;
  box-shadow: 0px 1px 1px #fff inset;
}

::-webkit-resizer {
  width: 7px;
  height: 0px;
}

::-webkit-scrollbar {
  width: 11px;
}

.relative {
  position: relative;
}
</style>

