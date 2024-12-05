<script>
  export let item
</script>

<div class="relative pl-8 sm:pl-32 py-2 group">
  <!-- Institution Name -->
  <div class="font-caveat font-bold text-2xl color mb-1 sm:mb-0" style="padding-top: 6px;">
    {item.institution}
  </div>
  <!-- Degree & Year Section -->
  <div
    class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] sm:before:-mt-[14px] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primaryGreen after:border-4 after:box-content after:border-color after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:-translate-y-[1.375rem]"
  >
    <div class="text-xl color text-green-300">{item.course}</div>
  </div>
  <!-- Year Completed -->
  <div class="text-sm text-gray-400">{item.yearCompleted}</div>
  <!-- Percentage -->
  <div class="text-sm text-gray-400">{item.percentage}%</div>
  <!-- University -->
  <div class="text-sm color text-gray-400">{item.university}</div>
</div>
