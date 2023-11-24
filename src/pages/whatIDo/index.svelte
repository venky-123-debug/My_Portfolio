<script>
import Cards from "./components/cards.svelte"
    let items = [
    { title: 'Web Design', description: 'Experienced in crafting visually engaging websites with a focus on seamless functionality through coding expertise.', logo:"fa-solid fa-tv" },
    { title: 'App Design & Develop', description: 'Crafting user-friendly frontend applications with seamless experiences using Svelte and Tailwind CSS for efficient coding.', logo:"fa-solid fa-paintbrush" },
    { title: 'Backend', description: 'Backend development expertise with MongoDB, Node.js, and Express for scalable applications and efficient server-side functionality.', logo:"fa-solid fa-code" },
    
  ];

</script>
<div class="flex flex-col m-auto bg-servicesBg w-screen min-h-full pb-60 overflow-hidden p-8">
  <div class="relative top-12 mx-auto h-32">
    <div class="relative text-center">
      <span class="text-8xl opacity-10 text-gray-500 font-bold relative z-10">SERVICES</span>
      <div class="absolute w-3/4 mx-auto text-white text-4xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        WHAT I DO?
        <div class="border mt-3 border-green-300 border-b-2 w-1/4 mx-auto" />
      </div>
    </div>
  </div>

  <div class="flex w-full pt-24 items-start justify-center gap-6">
    <div class="w-full grid grid-cols-2 gap-8">
      {#each items as item (item.title)}
      <Cards {item} />
    {/each}
    </div>
  </div>
</div>