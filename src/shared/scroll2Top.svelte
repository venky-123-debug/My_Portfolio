<script>
  export let showScrollToTopButton = false
</script>

{#if showScrollToTopButton}
  <button on:click class="fixed bottom-6 right-6 bg-opacity-50 bg-amber-600 hover:bg-amber-500 active:bg-amber-600 px-3 py-1.5 rounded-md text-white font-semibold z-20">
    <i class="fa-solid fa-angles-up"></i>
    &nbsp;Scroll to Top
  </button>
{/if}
