<script>
  import { onMount, onDestroy } from "svelte"
  import About from "../about/index.svelte"
  import Services from "../whatIDo/index.svelte"
  import Summary from "../summaryPage/index.svelte"
  import Contact from "../contact/index.svelte"
  import IntroPage from "../introPage/index.svelte"
  import NewNavBar from "../newNavBar/index.svelte"
  import { myDetails } from "../../scripts/myDetails"
  import TopScroll from "../../shared/topScroll.svelte"
  import Scroll2Top from "../../shared/scroll2Top.svelte"

  let aboutPage
  let texts = []
  let menuOpen = false
  let showScrollToTopButton = false

  onMount(() => {
    texts = [myDetails.name, ...myDetails.runningText]
  })

  onDestroy(() => {
    clearInterval(interval)
  })
  function scrollToAbout() {
    aboutPage.scrollIntoView({ behavior: "smooth" })
  }
  function scrollToContact() {
    let contact = document.getElementById("contact")
    contact.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scroll animation
    })
  }
</script>

<div class="flex flex-col {menuOpen ? 'overflow-hidden h-full' : 'overflow-x-hidden'} ">
  <div class="relative flex flex-col min-h-screen select-none w-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
    {#if !menuOpen}
      <TopScroll bind:showScrollToTopButton />
    {/if}
    <NewNavBar {myDetails} bind:menuOpen />

    <IntroPage on:click={scrollToContact} bind:texts {myDetails} />
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-300">
      <!-- svelte-ignore missing-declaration -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <i
        on:click={() => {
          scrollToAbout()
        }}
        class="fa-solid fa-chevron-down cursor-pointer fa-bounce fa-xl h-10 w-10 border border-[#a0a1a533] rounded-full flex items-center justify-center"
      />
    </div>
  </div>
  <div id="about" bind:this={aboutPage}>
    <About />
  </div>
  <!-- <Cv /> -->
  <div id="services">
    <Services />
  </div>
  <div id="summary">
    <Summary />
  </div>

  <div id="contact">
    <Contact />
  </div>
  <Scroll2Top bind:showScrollToTopButton on:click={scrollToTop} />
</div>
