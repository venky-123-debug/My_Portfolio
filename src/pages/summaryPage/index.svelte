<script>
  import { myDetails } from "../../scripts/myDetails"
  import EducationCard from "./components/educationCard.svelte"
  import Experince from "./components/experince.svelte"
  import Skills from "./components/skills.svelte"
  import ToolsSdk from "./components/tools-sdk.svelte"
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
  <Skills />
  <ToolsSdk />
</div>
