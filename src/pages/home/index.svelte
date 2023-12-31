<script>
  import { onMount, onDestroy, afterUpdate } from "svelte"
  import { push } from "svelte-spa-router"
  import NavBar from "../navbar/navBar.svelte"
  import About from "../about/index.svelte"
  import Cv from "../about/components/cv.svelte"
  import Services from "../whatIDo/index.svelte"
  import Summary from "../summaryPage/index.svelte"
  import Contact from "../contact/index.svelte"
  import IntroPage from "../introPage/index.svelte"

  let aboutPage
  let currentContent = "#/"

  onMount(() => {
    window.addEventListener("scroll", updateCurrentContent);
    window.addEventListener("hashchange", updateCurrentContent);
    updateCurrentContent();

  })

  onDestroy(() => {
    window.removeEventListener("scroll", updateCurrentContent);
    window.removeEventListener("hashchange", updateCurrentContent);
    clearInterval(interval)
  })
  function scrollToAbout() {
    aboutPage.scrollIntoView({ behavior: "smooth" })
  }
  function scrollToContact() {
    let contact = document.getElementById("contact")
    contact.scrollIntoView({ behavior: "smooth" })
  }

  const sections = [
    { id: "home", route: "#/" },
    { id: "about", route: "#/about" },
    { id: "services", route: "#/resume" },
    { id: "summary", route: "#/portfolio" },
    { id: "contact", route: "#/contact" },
  ]

  const updateCurrentContent = () => {
    const scrollPosition = window.scrollY

    for (const { id, route } of sections) {
      const element = document.getElementById(id)
      // console.log({element})

      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= window.innerHeight * 0.25) {
          currentContent = route
          // window.location.hash = currentContent
          // console.log({currentContent})
          break
        }
      }
    }
  }
</script>

<div class="flex flex-col overflow-x-hidden">
  <div class="relative flex flex-col min-h-screen select-none w-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
    <NavBar {currentContent} />

    
    <IntroPage on:click={scrollToContact} />
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
</div>

<style>
</style>
