<script>
  export let item
</script>

<div class="flex p-6 rounded-md flex-col h-full w-full bg-gray-900">
  <div class="p-3  flex-col gap-3 flex items-start ">
    <div class="text-base bg-primaryGreen text-white p-1.5 rounded-md font-semibold">
      {item.year}
    </div>
    <div class="text-2xl text-gray-200 font-semibold">
      {item.degree}
    </div>
    <!-- <div class="text-xl text-green-300 font-semibold">
      {item.special}
    </div> -->
    <div class="text-lg font-bold text-green-300 ">
      {item.college}
    </div>
    <div class="text-lg text-justify text-gray-400 font-normal">
      {item.objective}
    </div>
  </div>
</div>
