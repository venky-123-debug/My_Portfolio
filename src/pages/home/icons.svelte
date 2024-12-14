<script>
  import { onMount } from "svelte"

  export let myDetails = {}
  let iconsArray = ["fa-brands fa-linkedin text-blue-500", "fa-brands fa-github text-white", "fa-brands fa-telegram text-cyan-500", "fa-solid fa-envelope text-white"]

  // Ensure icons are assigned when the component is initialized
  onMount(() => {
    if (myDetails?.socials?.length) {
      // Map through socials and assign icons reactively
      myDetails.socials = myDetails.socials.map((social, index) => ({
        ...social,
        icon: iconsArray[index % iconsArray.length], // Assign icons cyclically
      }))
    }
  })

  $: console.log(myDetails?.socials) // Debugging to check updated socials
</script>

{#if myDetails?.socials?.length}
  <div class="absolute items-center gap-0 flex flex-col bottom-0 right-[10%]">
    <!-- Render Social Links -->
    {#each myDetails.socials as social, i}
      <div class="flex flex-col items-center">
        <!-- Line above the circle -->
        {#if i > 0}
          <div class="h-5 w-[0.2px] color"></div>
        {/if}

        <!-- Circle with Icon -->
        <a href={social.url} target="_blank" class="relative flex hover:scale-110 h-8 w-8 items-center justify-center rounded-md border border-white text-center">
          <i class={social.icon}></i>
        </a>
      </div>
    {/each}
  </div>
{/if}

<style>
  .color {
    background-color: var(--color);
  }
</style>
