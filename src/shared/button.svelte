<script>
  export let type = "button" // Allow button type to be configurable
  export let disabled = false // Control button's disabled state
  export let className = "" // Allow extra classes
  export let title = "button"
  export let iconClass = ""
</script>

<button {type} {disabled} class="text-center inline-flex items-center rounded-md text-sm md:text-base px-3 py-1.5 md:px-6 md:py-3 border overflow-hidden focus:outline-none {disabled ? 'bg-gray-400 cursor-not-allowed' : 'text-white'} {className}" on:click>
  <i class="fa-solid {iconClass}" />
  &nbsp;&nbsp;
  {title}
</button>
