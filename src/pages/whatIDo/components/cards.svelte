<!-- 

<div class="flex items-center gap-3">
  <div class="w-24 h-24 aspect-square bg-aboutBg items-center justify-center flex rounded-md">
    <div></div>
    <div class="text-primaryGreen text-4xl">
      <i class="fa-solid fa-tv"></i>
    </div>
  </div>
  <div class="flex flex-col gap-1">
    <div class="text-xl text-gray-200 font-bold">Web Design</div>
    <div class="text-lg text-gray-400">
      Experienced in crafting visually engaging websites with a focus on seamless functionality through coding expertise.
    </div>
  </div>
</div> -->

<script>
  export let item
</script>

<div class="flex items-center gap-3">
  <div class="w-24 h-24 aspect-square bg-aboutBg items-center justify-center flex rounded-md">
    <div></div>
    <div class="text-primaryGreen text-4xl">
      <i class="{item.logo}"></i>
    </div>
  </div>
  <div class="flex flex-col gap-1">
    <div class="text-xl text-gray-200 font-bold">{item.title}</div>
    <div class="text-lg text-gray-400 text-justify">{item.description}</div>
  </div>
</div>

