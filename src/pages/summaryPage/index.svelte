<script>
  import EducationCard from "./components/educationCard.svelte"
  import Experince from "./components/experince.svelte"

  let items = [
    { year: "2017 - 2019", degree: "M.E (Cad/ Cam Engineering)", college: "Arignar Anna Institute of Engineering and Technology", objective: "Conducted diverse projects focused on the CAD design of components, employing advanced tools such as Catia and Ansys. Demonstrated proficiency in developing innovative solutions and ensuring optimal performance through meticulous analysis and modeling." },
    { year: "2011 - 2015", degree: "B.E (Mechanical Engineering)", college: "Rajalakshmi Engineering College", objective: "Applied theoretical knowledge to hands-on projects, honing practical skills. Engaged in diverse projects, fostering creativity and effective teamwork. Actively sought extracurricular opportunities for continuous learning." },
  ]

  let experience = [
    { year: "11-2022 - Present", role: "Junior Software Developer", org: "DocChain.io by Print2Block", objective: "Conducted diverse projects focused on the CAD design of components, employing advanced tools such as Catia and Ansys. Demonstrated proficiency in developing innovative solutions and ensuring optimal performance through meticulous analysis and modeling." },
    { year: "07-2022 - 11-2022", role: "Software Developer - Internship", org: "DocChain.io by Print2Block", objective: "Experienced a lot ." },
  ]
</script>

<div class="flex flex-col m-auto bg-aboutBg w-screen min-h-screen pb-60 overflow-hidden p-8">
  <div class="relative top-12 mx-auto h-32">
    <div class="relative text-center">
      <span class="text-8xl opacity-10 text-gray-500 font-bold relative z-10">SUMMARY</span>
      <div class="absolute w-3/4 mx-auto text-white text-4xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        RESUME
        <div class="border mt-3 border-green-300 border-b-2 w-1/4 mx-auto" />
      </div>
    </div>
  </div>
  <div class="text-3xl font-bold pt-16 text-gray-200">Education:</div>
  <div class="flex w-full pt-3 items-start justify-center gap-6">
    <div class="w-full flex gap-6">
      {#each items as item (item.year)}
        <EducationCard {item} />
      {/each}
    </div>
  </div>
  <div class="text-3xl font-bold pt-6 text-gray-200">Experience:</div>
  <div class="flex w-full pt-3 items-start justify-center gap-6">
    <div class="w-full flex gap-6">
      {#each experience as item (item.year)}
        <Experince {item} />
      {/each}
    </div>
  </div>
</div>
