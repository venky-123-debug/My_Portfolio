<script>
  export let item

  const parseMonthYearString = (monthYearString) => {
    const [month, year] = monthYearString.split(" ")
    const monthIndex = new Date(Date.parse(`1 ${month} 2000`)).getMonth()
    return new Date(year, monthIndex)
  }

  const calculateMonthDifference = (startDateStr, endDateStr) => {
    const startDate = parseMonthYearString(startDateStr)
    let endDate = endDateStr === "present" ? new Date() : parseMonthYearString(endDateStr)

    const totalMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    const yearText = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""
    const monthText = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : ""

    return `${yearText}${yearText && monthText ? " " : ""}${monthText}`
  }

  let startDateStr = item.startDate
  let endDateStr = item.current ? "present" : item.endDate

  let durationText = calculateMonthDifference(startDateStr, endDateStr)
</script>

<div class="relative pl-8 sm:pl-32 py-2 group">
  <div class="font-caveat font-bold text-2xl text-blue-500 mb-1 sm:mb-0">{item.role}</div>
  <div
    class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-500 sm:before:ml-[6.5rem] sm:before:-mt-[14px] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primaryGreen after:border-4 after:box-content after:border-gray-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:-translate-y-[1.375rem]"
  >
    <div class="text-xl text-green-300">{item.company}</div>
  </div>
  <div class="text-sm text-gray-400">{startDateStr} - {endDateStr === "present" ? "Present" : endDateStr}. {durationText}</div>
  <!-- Content -->
  <div class="text-gray-400 mt-6">{item.objective}</div>
</div>
