<script>
  import { onMount } from "svelte"

  let isMounted = false

  onMount(() => {
    isMounted = true
  })
</script>

<div class="relative">
  <div class="w-full mx-auto">
    <div class="text-center">
      <div class="w-full inline-flex flex-nowrap overflow-hidden relative">
        <ul class="flex items-center justify-center md:justify-start space-x-8" class:animate-infinite-scroll={isMounted}>
          <slot />
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-infinite-scroll {
    animation: infinite-scroll 30s linear infinite;
  }
</style>
