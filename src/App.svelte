<script>
  import Router from "svelte-spa-router"
  import routes from "./Routes/route"
  import { afterUpdate, onMount } from "svelte"

  let scrollPercentage = 0
  let showScrollToTopButton = false

  function updateScrollBar() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
    const rawScrollPercentage = (window.scrollY / scrollableHeight) * 100

    // Ensure that scrollPercentage is never less than zero and never exceeds 100
    scrollPercentage = Math.max(0, Math.min(rawScrollPercentage, 100))

    // Show or hide the Scroll to Top button based on scroll position
    showScrollToTopButton = window.scrollY > window.innerHeight
  }

  function scrollToTop() {
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

    // Set the initial value of scrollPercentage to 0
    scrollPercentage = 0

    // Initial call to set the initial scrollPercentage
    updateScrollBar()

    // Cleanup event listener on component destruction
    return () => {
      window.removeEventListener("scroll", updateScrollBar)
    }
  })

  afterUpdate(() => {
    updateScrollBar()
  })
</script>

<svelte:window on:scroll={updateScrollBar} />

<div class="relative">
  <div class="progress-bar-container">
    <div class="progress-bar" style="width: {scrollPercentage}%"></div>
  </div>

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

  .progress-bar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px; /* Adjust the height of the scroll bar */
    background: #ddd; /* Background color of the scroll bar container */
    z-index: 1000;
    transition: width 0.3s; /* Add transition for smooth width change */
  }

  .progress-bar {
    height: 100%;
    background: #3b82f6; /* Color of the scroll bar */
  }
</style>
