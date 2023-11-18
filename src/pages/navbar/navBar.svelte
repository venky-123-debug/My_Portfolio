<script>
    import Navcard from "./components/navcard.svelte"
  import sitemap from "./sitemap/sitemap.js"

</script>


<div class="flex fixed top-0 left-0 items-center bg-black w-full py-6 px-24 justify-between">
  <div class="flex items-center justify-center gap-3 text-lg">
    <i class="fa-solid fa-code fa-flip text-blue-500"></i>    <div class="text-blue-500 font-bold text-lg">
      Venkatesh <span class="text-white text-base">.</span>
      C
    </div>
  </div>

  <div class="flex items-center justify-center gap-6">
    {#each Object.keys(sitemap) as item,i}
    <a
    href={sitemap[item][0].route}
  >
    <Navcard title={sitemap[item][0].title}
    />
  </a>
    {/each}
  </div>
</div>
