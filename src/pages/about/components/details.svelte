<script>
  import html2pdf from "html2pdf.js"
  import Cv from "./cv.svelte"
  import { onMount } from "svelte"

  let element

  onMount(() => {
    element = document.getElementById("cv")
  })

  // const downloadPDF = () => {
  //   const element = document.getElementById("cv")
  //   const options = {
  //     filename: "Venkatesh_Resume", // Set your desired filename here
  //   }
  //   html2pdf(element, options)
  // }

  // const downloadPDF = () => {
  //   const element = document.getElementById('cv');

  //   html2pdf(element, {
  //     margin: 1,
  //     filename: 'Venkatesh_Resume',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  //     pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  //     output: 'blob',
  //     // style: styles,
  //   });
  // };

  // const downloadPDF = () => {
  //   if (!element) {
  //     console.error("Element with ID 'cv' not found.")
  //     return
  //   }

  //   // Create a clone of the element to avoid altering the original styles
  //   const clonedElement = element.cloneNode(true)

  //   // Include the Tailwind CSS stylesheet in the cloned element
  //   const tailwindStylesheet = document.createElement("link")
  //   tailwindStylesheet.rel = "stylesheet"
  //   tailwindStylesheet.href = "https://cdn.jsdelivr.net/npm/tailwindcss@3.2.4/dist/tailwind.min.css" // Adjust the URL based on your Tailwind version
  //   clonedElement.appendChild(tailwindStylesheet)

  //   // Download the PDF with the cloned element
  //   html2pdf(clonedElement, {
  //     margin: 10,
  //     filename: "your-cv.pdf",
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  //     pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  //     output: "blob",
  //   })
  // }
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
  <!-- <div class="text-center pt-6">
    <button on:click={downloadPDF} type="button" class="rounded-md w-32 border border-green-300 bg-transparent py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-500">Download CV</button>
  </div> -->
</div>
<div class="hidden">
  <Cv />
</div>
