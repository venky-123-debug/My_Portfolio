<script>
  export let showScrollToTopButton = false
</script>

{#if showScrollToTopButton}
  <button on:click class="fixed bottom-6 right-6 text-white font-semibold z-20">
    <i class="fa-solid fa-angles-up"></i>
    &nbsp;Scroll to Top
  </button>
{/if}
