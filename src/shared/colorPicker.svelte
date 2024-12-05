<script>
  let showColorPicker = false
  let colors = [
    "#F87171", // Red
    "#FBBF24", // Yellow
    "#34D399", // Green
    "#60A5FA", // Blue
    "#A78BFA", // Purple
    // "#F472B6", // Pink
    // "#9CA3AF", // Gray
    // "#F59E0B", // Amber
    // "#38BDF8", // Sky Blue
    "#22C55E", // Lime
    "#6366F1", // Indigo
    "#E11D48", // Rose
  ]

  const selectColor = (color) => {
    document.documentElement.style.setProperty("--color", color)
  }
</script>

<div class="flex items-start gap-3 fixed top-20 z-50 right-0">
  <button
    on:click={() => {
      showColorPicker = !showColorPicker
    }}
    type="button"
    title="Change Color theme"
    class="order-2 h-12 w-12 color rounded-md text-2xl border border-[#a0a1a533]"
  >
    <i class="fa-solid fa-gear fa-spin"></i>
  </button>
  {#if showColorPicker}
    <div class="flex order-1 flex-col items-center p-3 border rounded-md border-[#a0a1a533]">
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {#each colors as color}
          <button type="button" class="w-6 h-6 rounded-md border-[#a0a1a533] shadow-md hover:scale-110 transform transition duration-200 focus:outline-none" style="background-color: {color}" on:click={() => selectColor(color)} aria-label="Select color">
            <span class="sr-only">{color}</span>
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  button:focus {
    outline: none;
  }
  .color {
    color: var(--color);
  }
</style>
