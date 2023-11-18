<script>
  export let title=""
</script>

<button on:click|stopPropagation type="button" class="flex  group relative items-cente justify-center">
  <div class="text-orange font-semibold text-base">{title}</div>
  <span
  class="absolute -bottom-1 left-0 h-[2px] w-0 bg-orange transition-all duration-300 group-hover:w-full"
/>
</button>