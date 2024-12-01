<script>
  import Item from "./components/item.svelte"

  export let myDetails

  let menuOpen = false
  let menuItems = ["HOME", "ABOUT", "SERVICES", "SUMMARY", "CONTACT"]

  const handleNavigation = (e) => {
    try {
      console.log("Clicked Menu ID:", e.detail.id)
    } catch (error) {
      console.error(error)
    }
  }
</script>

<div class="fixed w-screen min-h-screen {menuOpen ? 'bg-black' : ''} overflow-hidden flex-col p-6 z-50">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <a href="/#" class="text-xl"><i class="fa-solid fa-code fa-flip color" /></a>
      <div class="flex-1">
        <div class="text-xl color font-semibold">
          {myDetails.name}
        </div>
      </div>
    </div>
    <button
      on:click={() => {
        menuOpen = !menuOpen
      }}
      type="button"
      class="w-10 h-10 text-white hover:scale-110"
    >
      <i class="fa-solid {menuOpen ? 'fa-x' : 'fa-bars text-lg'} "></i>
    </button>
  </div>
  {#if menuOpen}
    <Item {menuItems} on:nav={handleNavigation} />
  {/if}
</div>
