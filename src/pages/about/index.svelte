<script>
  export let myDetails = {}
  let dynamicExperience = (() => {
    let diff = new Date() - new Date(2022, 10) // November 2022 (month index 10)
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    let months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44))
    return `${years} year${years !== 1 ? "s" : ""}${months > 0 ? ` ${months} month${months !== 1 ? "s" : ""}` : ""}`
  })()
</script>

<div class="flex flex-col m-auto bg-aboutBg w-screen min-h-screen overflow-hidden p-8">
  <div class="relative top-12 mx-auto h-32">
    <div class="relative text-center">
      <span class="text-8xl opacity-10 color font-bold relative z-10">ABOUT ME</span>
      <div class="absolute w-3/4 mx-auto text-white text-4xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Know Me More
        <div class="border mt-3 border-green-300 border-b-2 w-1/4 mx-auto" />
      </div>
    </div>
  </div>

  <div class="flex w-full pt-24 items-start gap-6">
    <div class="w-4/6 flex flex-col gap-3">
      <div class="text-3xl font-bold text-white">
        A Passionate&nbsp;
        <strong class="color">{myDetails.role}</strong>
      </div>
      <div class="text-lg font-normal text-gray-400">Results-driven web developer specializing in crafting efficient, scalable, and visually appealing web solutions. Skilled in front-end frameworks, back-end APIs, and full-stack development. I am passionate about solving complex challenges and staying up-to-date with cutting-edge technologies.</div>

      <!-- <div class="mt-6 text-lg font-normal text-gray-400">
        <strong>Highlights:</strong>
        <ul class="list-disc pl-6 mt-2">
          <li>Developed a secure document-verification system for Docchain.io.</li>
          <li>Led the development of an interactive web portal with 1,000+ users.</li>
          <li>Certified in Full Stack Web Development (e.g., by XYZ).</li>
        </ul>
      </div> -->

      <!-- <div class="flex flex-wrap gap-2 mt-4">
        <span class="px-3 py-1 bg-gray-800 rounded-full text-green-300">JavaScript</span>
        <span class="px-3 py-1 bg-gray-800 rounded-full text-green-300">Node.js</span>
        <span class="px-3 py-1 bg-gray-800 rounded-full text-green-300">Svelte</span>
        <span class="px-3 py-1 bg-gray-800 rounded-full text-green-300">MongoDB</span>
        <span class="px-3 py-1 bg-gray-800 rounded-full text-green-300">Docker</span>
        <span class="px-3 py-1 bg-gray-800 rounded-full text-green-300">Tailwind CSS</span>
      </div> -->
    </div>

    <!-- <div class="w-2/6">
      <Details />
    </div> -->
  </div>

  <div class="pt-8 flex items-center justify-around w-full">
    <div class="flex flex-col w-1/2 gap-3 items-center justify-center border-r border-gray-500">
      <div class="text-5xl font-bold text-gray-500">{dynamicExperience}</div>
      <div class="text-2xl font-semibold color">Experience</div>
    </div>
    <div class="flex flex-col w-1/2 items-center justify-center">
      <div class="text-5xl font-bold text-gray-500">1+</div>
      <div class="text-2xl font-semibold color">Projects Done</div>
    </div>
  </div>

  <!-- Call to Action -->
  <div class="text-center mt-8">
    <a href="/assets/resume/venkat_resume.pdf" download="Venkatesh_C_Resume.pdf" class="inline-flex items-center rounded-md px-6 py-3 border border-green-300 bg-transparent text-green-300 hover:bg-green-600 hover:text-white">
      <i class="fa-solid fa-download mr-2"></i>
      Download My Resume
    </a>
  </div>
</div>
