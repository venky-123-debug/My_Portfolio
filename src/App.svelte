<script>
  import Router from "svelte-spa-router"
  import routes from "./Routes/route"
  import { onMount } from "svelte"

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    })
  }

  onMount(() => {
    setTimeout(() => {
      const load = document.getElementById("mainLoader")
      load.style.display = "none"
      const mainContent = document.getElementById("mainContent")
      mainContent.style.display = "block"
    }, 500)
  })
</script>

<div class="relative">
  <div class="height">
    <Router {routes} />
  </div>

  {#if showScrollToTopButton}
    <button on:click={scrollToTop} class="fixed bottom-6 right-6 text-white font-semibold z-20">
      <i class="fa-solid fa-angles-up"></i>
      &nbsp;Scroll to Top
    </button>
  {/if}
</div>

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

  .height {
    height: auto;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
