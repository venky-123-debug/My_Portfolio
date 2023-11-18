<script>
  export let title=""
  export let route
  
  let currentContent = location.hash
  console.log({currentContent})
  console.log({route})
</script>

<div class="flex  group relative items-cente justify-center">
  <div class="{currentContent ==route? "text-blue-500": "text-orange"} font-semibold text-base">{title}</div>
  <span
  class="absolute -bottom-1 left-0 h-[2px] w-0 {currentContent ==route? "bg-blue-500 w-full": "bg-orange group-hover:w-full"}  transition-all duration-300 "
/>
</div>