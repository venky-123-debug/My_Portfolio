<script>
  import { myDetails } from "../../scripts/myDetails"
  import EducationCard from "./components/educationCard.svelte"
  import Experince from "./components/experince.svelte"
  import Skills from "./components/skills.svelte"
  import ToolsSdk from "./components/tools-sdk.svelte"
  import ExpressJs from "./svg/expressJs.svelte"
  import Handlebars from "./svg/handlebars.svelte"
  import Mongodb from "./svg/mongodb.svelte"
  import Nginx from "./svg/nginx.svelte"
  import Svelte from "./svg/svelte.svelte"
  import Tailwind from "./svg/tailwind.svelte"
  let skills = [
    { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: "fa-html5", textColor: "text-orange", bgColor: "bg-[#000000cc]" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com", iconComponent: Tailwind, textColor: "text-[#06b6d4]", bgColor: "bg-[#000000cc]" },
    { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: "fa-js", textColor: "text-yellow-500", bgColor: "bg-[#000000cc]" },
    { name: "NodeJS", url: "https://nodejs.org/en", icon: "fa-node", textColor: "text-green-500", bgColor: "bg-[#000000cc]" },
    { name: "ExpressJS", url: "https://expressjs.com", iconComponent: ExpressJs, textColor: "text-[#fff]", bgColor: "bg-[#000000cc]" },
    { name: "MongoDB", url: "https://www.mongodb.com", iconComponent: Mongodb, textColor: "text-[#599636]", bgColor: "bg-[#000000cc]" },
    { name: "SvelteJS", url: "https://svelte.dev", iconComponent: Svelte, textColor: "text-[#ff3e00]", bgColor: "bg-[#000000cc]" },
    { name: "GIT", url: "https://git-scm.com", icon: "fa-git-alt", textColor: "text-green-500", bgColor: "bg-[#000000cc]" },
    { name: "NGINX", url: "https://nginx.org", iconComponent: Nginx, textColor: "text-[#009639]", bgColor: "bg-[#000000cc]" },
    { name: "Handlebars", url: "https://handlebarsjs.com", iconComponent: Handlebars, textColor: "text-[#f0772b]", bgColor: "bg-[#000000cc]" },
  ]
  let OSskills = [
    { name: "Ubuntu", url: "https://ubuntu.com", icon: "fa-ubuntu", textColor: "text-[#e95420]", bgColor: "bg-[#000000cc]" },
    { name: "Windows", url: "https://www.microsoft.com/en-in/windows", icon: "fa-windows", textColor: "text-[#0079d5]", bgColor: "bg-[#000000cc]" },
  ]
</script>

<div class="flex flex-col m-auto bg-aboutBg w-screen min-h-screen pb-60 overflow-hidden p-8">
  <div class="relative top-12 mx-auto h-32">
    <div class="relative text-center">
      <span class="text-8xl opacity-20 color font-bold relative z-10">SUMMARY</span>
      <div class="absolute w-3/4 mx-auto text-white text-4xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        RESUME
        <div class="border mt-3 border-green-300 border-b-2 w-1/4 mx-auto" />
      </div>
    </div>
  </div>
  <div class="text-3xl font-bold pt-6 text-gray-200">Experience:</div>
  <div class="flex w-full pt-3 items-start justify-center gap-6">
    <div class="w-full flex flex-col gap-6">
      {#each myDetails?.professionalExperience as item}
        <Experince {item} />
      {/each}
    </div>
  </div>
  <div class="text-3xl font-bold pt-16 text-gray-200">Education:</div>

  <div class="flex w-full pt-3 items-start justify-center gap-6">
    <div class="w-full flex flex-col gap-6">
      {#each myDetails?.educationalQualification as item}
        <EducationCard {item} />
      {/each}
    </div>
  </div>

  <Skills {skills} title={"Skills"} />
  <Skills skills={OSskills} title={"Operating Systems"} />

  <ToolsSdk />
</div>
