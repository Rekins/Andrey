<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
//#region Vendor
@import '~reset.scss/reset.scss';
@import '~bootstrap/scss/bootstrap-grid.scss';
@import '~katex/dist/katex.min.css';

[class^='col'] {
  display: flex;
}
//#endregion

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: $typ-sans-serif;
}

h1 {
  font-size: 3.8rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2.4rem;
}

h4 {
  font-size: 1.8rem;
}

h5 {
  font-size: 1.2rem;
}

h6 {
  font-size: 0.8rem;
}

a {
  padding: 0.1rem;
  color: $c-accent;
  text-decoration: none;
  border-bottom: 2px solid $c-accent;
  transition: $tran-default;

  &:hover {
    color: $c-text-dark;
    border-bottom-color: $c-text-dark;
  }
}
</style>
