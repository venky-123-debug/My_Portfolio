<script>
  import EducationCard from "./components/educationCard.svelte"
  import Experince from "./components/experince.svelte"

  let items = [
    { year: "2017 - 2019", degree: "M.E (Cad/ Cam Engineering)", college: "Arignar Anna Institute of Engineering and Technology", objective: "Conducted diverse projects focused on the CAD design of components, employing advanced tools such as Catia and Ansys. Demonstrated proficiency in developing innovative solutions and ensuring optimal performance through meticulous analysis and modeling." },
    { year: "2011 - 2015", degree: "B.E (Mechanical Engineering)", college: "Rajalakshmi Engineering College", objective: "Applied theoretical knowledge to hands-on projects, honing practical skills. Engaged in diverse projects, fostering creativity and effective teamwork. Actively sought extracurricular opportunities for continuous learning." },
  ]

  let experience = [
    { year: "11-2022 - Present", role: "Junior Software Developer", org: "DocChain.io by Print2Block", objective: "Working on full stack projects using MESN (MongoDB, Express, Svelte and NodeJS) and TailwindCss for FrontEnd styling." },
    { year: "07-2022 - 11-2022", role: "Software Developer - Internship", org: "DocChain.io by Print2Block", objective: "Learnt about MESN (MongoDB, Express, Svelte and NodeJS) stack and did projects in Handlebars and Bootstrap v5 focused on REST API. " },
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
  <div class="text-3xl font-bold pt-6 text-gray-200">Skills:</div>

  <div class="flex items-center justify-around pt-3 w-full">
    <!-- mondodb -->
    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 598.88 1333.33" class="w-10 h-10" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
        <g fill-rule="nonzero">
          <path
            d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
            fill="#599636"
          />
          <path
            d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
            fill="#6cac48"
          />
          <path
            d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
            fill="#c2bfbf"
          />
        </g>
      </svg>
    </div>
    <!-- express icon -->

    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.33 773.55" class="w-10 h-10" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
        <path
          d="M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z"
          fill-rule="nonzero"
          fill="#fff"
        />
      </svg>
    </div>

    <!-- NodeJS -->
    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <i class="fa-brands text-3xl text-green-500 fa-node"></i>
    </div>
    <!-- svelte icon -->
    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.25 122.88" class="w-10 h-10">
        <defs>
          <style>
            .a {
              fill: #ff3e00;
            }
            .b {
              fill: #fff;
            }
          </style>
        </defs>
        <title>svelte</title>
        <path
          class="a"
          d="M95.73,16.26C84.32-.07,61.78-4.91,45.49,5.47L16.87,23.71A32.83,32.83,0,0,0,2,45.69a35.13,35.13,0,0,0-.55,6.14,34.69,34.69,0,0,0,4,16.06A33,33,0,0,0,.54,80.16a35,35,0,0,0,6,26.46c11.41,16.33,34,21.17,50.24,10.79L85.37,99.17a32.76,32.76,0,0,0,14.83-22,34.08,34.08,0,0,0,.55-6.13A34.72,34.72,0,0,0,96.8,55a33,33,0,0,0,4.91-12.26,36,36,0,0,0,.54-6.13,34.93,34.93,0,0,0-6.52-20.33Zm0,0Z"
        />
        <path
          class="b"
          d="M42.69,108.16a22.94,22.94,0,0,1-5.72.73A22.7,22.7,0,0,1,18.3,99.11a21,21,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,20.52,20.52,0,0,1,.69-2.67l.54-1.64L17.39,80a37.13,37.13,0,0,0,11.2,5.6l1.06.32-.1,1.06c0,.18,0,.37,0,.55a6.36,6.36,0,0,0,1.18,3.7,6.82,6.82,0,0,0,5.62,3,6.65,6.65,0,0,0,1.72-.22,6.28,6.28,0,0,0,1.76-.77L68.42,74.91a6,6,0,0,0,2.79-5.09A6.35,6.35,0,0,0,70,66.13a6.85,6.85,0,0,0-5.63-2.94,6.65,6.65,0,0,0-1.72.22,6,6,0,0,0-1.75.77L50,71.14a21.06,21.06,0,0,1-5.81,2.55,23.06,23.06,0,0,1-5.72.73A22.73,22.73,0,0,1,19.8,64.65a21.05,21.05,0,0,1-3.92-12.23,21.6,21.6,0,0,1,.32-3.68,19.82,19.82,0,0,1,8.92-13.23L53.74,17.28a21,21,0,0,1,5.81-2.56A23,23,0,0,1,65.27,14,22.74,22.74,0,0,1,84,23.76,21.05,21.05,0,0,1,87.87,36a21.72,21.72,0,0,1-.32,3.69,20.52,20.52,0,0,1-.69,2.67L86.32,44l-1.46-1.07a36.9,36.9,0,0,0-11.2-5.6L72.6,37l.1-1.06c0-.18,0-.37,0-.55a6.42,6.42,0,0,0-1.18-3.71,6.85,6.85,0,0,0-5.62-2.94A6.65,6.65,0,0,0,64.2,29a5.89,5.89,0,0,0-1.76.77L33.82,48a6,6,0,0,0-2.69,4A6.92,6.92,0,0,0,31,53.06a6.35,6.35,0,0,0,1.18,3.69,6.84,6.84,0,0,0,5.62,2.94,6.65,6.65,0,0,0,1.72-.22,6,6,0,0,0,1.76-.77l10.92-7a20.93,20.93,0,0,1,5.81-2.55,23,23,0,0,1,5.72-.73,22.74,22.74,0,0,1,18.68,9.77,21.05,21.05,0,0,1,3.92,12.23A20.64,20.64,0,0,1,86,74.14a19.78,19.78,0,0,1-8.92,13.23L48.51,105.6a21,21,0,0,1-5.82,2.56Zm0,0Z"
        />
      </svg>
    </div>
    <!-- tailwind-css -->
    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <svg id="Layer_1" data-name="Layer 1" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 73.29">
        <defs>
          <style>
            .cls-1 {
              fill: #06b6d4;
              fill-rule: evenodd;
            }
          </style>
        </defs>
        <title>tailwind-css</title>
        <path
          class="cls-1"
          d="M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
        />
      </svg>
    </div>
    <!-- js -->
      <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <i class="fa-brands text-3xl text-yellow-500 fa-js"></i>
    </div>

    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <i class="fa-brands text-3xl text-orange fa-html5"></i>
    </div>
    
  
    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <i class="fa-brands text-3xl text-rose-500 fa-git-alt"></i>
    </div>
    <div class="w-16 h-16 flex items-center justify-center rounded-md bg-[#000000cc]">
      <i class="fa-brands text-3xl text-sky-500 fa-bitbucket"></i>
    </div>
  </div>
</div>
