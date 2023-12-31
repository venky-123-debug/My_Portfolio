<script>
  export let item;
</script>

<div class="relative pl-8 sm:pl-32 py-1 group">
    <!-- Purple label -->
    <div class="font-caveat font-bold text-2xl text-blue-500 mb-1 sm:mb-0" style="padding-top: 6px;">{item.college}</div>
    <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
    <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] sm:before:-mt-[14px] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primaryGreen after:border-4 after:box-content after:border-gray-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:-translate-y-[1.375rem]">
        <!-- <time class="sm:absolute left-0 -translate-y-[1.5rem] inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-gray-900 rounded-md">{item.year}</time> -->
        <div class="text-xl  text-green-300">{item.degree}</div>
    </div>
  <div class="text-sm text-gray-400">{item.year}</div>
</div>


