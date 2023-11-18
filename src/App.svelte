<script>
  // import NavBar from "./Pages/navbar/navBar.svelte"
  // import Page_1 from "./Pages/home/page_1.svelte"
  import Router from "svelte-spa-router"
  import routes from "./Routes/route"
</script>
<!-- <div class="min-h-screen flex w-screen overflow-hidden"> 
  <NavBar />
  <Page_1 />
</div> -->
<Router {routes}  />

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    font-family: "Nunito", sans-serif;
  }
  @layer base {
    html {
      -webkit-tap-highlight-color: transparent;
    }
  }

  .topShadow {
    box-shadow: 0 -10px 10px -5px rgba(0, 0, 0, 0.5);
  }
  .bottomShadow {
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.5);
  }
</style>
