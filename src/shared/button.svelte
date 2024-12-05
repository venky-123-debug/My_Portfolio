<script>
  export let type = "button" // Allow button type to be configurable
  export let disabled = false // Control button's disabled state
  export let className = "" // Allow extra classes
  export let title = "button"
</script>

<button {type} {disabled} class="rounded-md px-3 font-semibold py-1.5 relative text-center overflow-hidden w-12 md:w-32 focus:outline-none {disabled ? 'bg-gray-400 cursor-not-allowed' : 'text-white'} {className}" on:click>
  {title}
</button>
