<script>
  import html2pdf from "html2pdf.js"
  import Cv from "./cv.svelte"

  const downloadPDF = () => {
    const element = document.getElementById("cv")
    const options = {
      filename: "Venkatesh_Resume", // Set your desired filename here
    }
    html2pdf(element, options)
  }
</script>

<div class="w-full flex-col flex gap-3 divide-y divide-gray-500">
  <div class="flex items-center gap-3 pt-3">
    <div class="text-lg font-semibold text-gray-300">NAME:</div>
    <div class="text-lg font-normal text-gray-400">Venkatesh. C</div>
  </div>
  <div class="flex items-center gap-3 pt-3">
    <div class="text-lg font-semibold text-gray-300">Email:</div>
    <div class="text-lg font-normal text-green-400">venkatbe26494@gmail.com</div>
  </div>
  <div class="flex items-center gap-3 pt-3">
    <div class="text-lg font-semibold text-gray-300">Role:</div>
    <div class="text-lg font-normal text-gray-400">Web Developer</div>
  </div>
  <div class="flex items-center gap-3 pt-3">
    <div class="text-lg font-semibold text-gray-300">From:</div>
    <div class="text-lg font-normal text-gray-400">Chennai, TamilNadu</div>
  </div>
  <div class="text-center pt-6">
    <button on:click={downloadPDF} type="button" class="rounded-md w-32 border border-green-300 bg-transparent py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-500">Download CV</button>
  </div>
</div>
<div class="hidden">
  <Cv />
</div>
