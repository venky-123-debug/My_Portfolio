<script>
  import html2pdf from 'html2pdf.js';

  const downloadCV = () => {
    // const cvContent = `
    //   <div class="w-full flex-col flex gap-3 divide-y divide-gray-500">
    //     <div class="flex items-center gap-3 pt-3">
    //       <div class="text-lg font-semibold text-gray-300">NAME:</div>
    //       <div class="text-lg font-normal text-gray-400">Venkatesh. C</div>
    //     </div>
    //     <div class="flex items-center gap-3 pt-3">
    //       <div class="text-lg font-semibold text-gray-300">Email:</div>
    //       <div class="text-lg font-normal text-green-400">venkatbe26494@gmail.com</div>
    //     </div>
    //     <div class="flex items-center gap-3 pt-3">
    //       <div class="text-lg font-semibold text-gray-300">Role:</div>
    //       <div class="text-lg font-normal text-gray-400">Web Developer</div>
    //     </div>
    //     <div class="flex items-center gap-3 pt-3">
    //       <div class="text-lg font-semibold text-gray-300">From:</div>
    //       <div class="text-lg font-normal text-gray-400">Chennai, TamilNadu</div>
    //     </div>
    //   </div>
    // `;

    // const element = document.createElement('div');
    // element.innerHTML = cvContent;

    // html2pdf(element, {
    //   margin: 10,
    //   filename: 'MyCV.pdf',
    //   image: { type: 'jpeg', quality: 0.98 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    // });
  };
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
    <button on:click={downloadCV} type="button" class="rounded-md w-32 border border-green-300 bg-transparent py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-500">Download CV</button>
  </div>
</div>
