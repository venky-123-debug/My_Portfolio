<script>
  import Logo from "../summaryPage/svg/logo.svelte"
  import Item from "./components/item.svelte"

  export let myDetails

  export let menuOpen = false
  let menuItems = ["HOME", "ABOUT", "SERVICES", "SUMMARY", "CONTACT"]

  const handleNavigation = (e) => {
    try {
      menuOpen = false
      let element = document.getElementById(e.detail.id)
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" })
      }, 50)

      console.log("Clicked Menu ID:", e.detail.id)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<div class="fixed w-screen {menuOpen ? 'bg-black z-50 min-h-screen' : 'z-10 bg-opacity-50 backdrop-blur-md'} overflow-hidden flex-col p-6">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <!-- <a href="/#" class="text-xl"><i class="fa-solid fa-code fa-flip color" /></a> -->
      <a href="/" class="flex-1">
        <div class="text-xl color flex gap-2 items-center font-semibold">
          <span class="w-6 aspect-square color bg-black bg-opacity-70 rounded-md">
            <Logo />
            <!-- <img class="w-6 aspect-square color bg-black bg-opacity-70 rounded-md" src="assets/logo.svg" alt="logo" /> -->
          </span>
          {`< ${myDetails.name} />`}
        </div>
      </a>
    </div>
    <button
      on:click={() => {
        menuOpen = !menuOpen
      }}
      type="button"
      class="text-white hover:scale-110"
    >
      <i class="fa-solid text-xl {menuOpen ? 'fa-x' : 'fa-bars text-lg'} "></i>
    </button>
  </div>
  {#if menuOpen}
    <Item {menuItems} on:nav={handleNavigation} />
  {/if}
</div>
