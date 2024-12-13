<script>
  export let title = ""
  export let skills = []

  // Array of skills
</script>

<div class="text-3xl font-bold pt-6 text-gray-200">{title}:</div>

<div class="grid-cols-1 items-center justify-around pt-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
  {#each skills as skill}
    <a href={skill.url} target="_blank" class="flex items-center justify-center hover:scale-105 transition duration-150 card w-full h-16 p-3 rounded-md {skill.bgColor}">
      <div class="w-auto flex items-center justify-center h-full text-lg font-semibold {skill.textColor}">
        {skill.name}
      </div>
      <div class="w-16 h-full pl-2 flex items-center justify-center">
        {#if skill.iconComponent}
          <svelte:component this={skill.iconComponent} />
        {:else}
          <i class="fa-brands text-3xl {skill.textColor} {skill.icon}"></i>
        {/if}
      </div>
    </a>
  {/each}
</div>
