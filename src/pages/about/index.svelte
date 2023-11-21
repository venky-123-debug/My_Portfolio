<script>
  import Details from "./components/details.svelte"
</script>

<div class="flex flex-col m-auto bg-aboutBg w-screen min-h-screen overflow-hidden p-8">
  <div class="relative top-12 mx-auto h-32">
    <div class="relative text-center">
      <span class="text-8xl opacity-10 text-gray-500 font-bold relative z-10">ABOUT ME</span>
      <div class="absolute w-3/4 mx-auto text-white text-4xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Know Me More
        <div class="border mt-3 border-green-300 border-b-2 w-1/4 mx-auto" />
      </div>
    </div>
  </div>

  <div class="flex w-full pt-24 items-start gap-6">
    <div class="w-4/6 flex flex-col gap-3">
      <div class="text-3xl font-bold text-white">
        I'm <strong class="text-green-300">Venkatesh. C,</strong>
        a Web Developer
      </div>
      <div class="text-lg text-justify font-normal text-gray-400">Results-driven web developer with a passion for creating efficient, user-friendly, and visually appealing websites. Leveraging a strong foundation in front-end and back-end technologies, I aim to contribute innovative solutions to enhance user experiences.</div>
      <div class="text-lg text-justify font-normal text-gray-400">Seeking a challenging role where I can apply my technical skills, creativity, and dedication to deliver high-quality web applications while staying abreast of emerging trends and technologies in the ever-evolving world of web development.</div>
    </div>
    <div class="w-2/6">
      <Details />
    </div>
  </div>

  <div class="pt-8 flex items-center justify-around w-full">
    <div class="flex flex-col w-1/2 items-center justify-center border-r border-gray-500">
      <div class="text-5xl font-bold text-gray-400">1+</div>
      <div class="text-xl font-semi text-gray-500">Years Experiance</div>
    </div>
    <div class="flex flex-col w-1/2 items-center justify-center">
      <div class="text-5xl font-bold text-gray-400">1+</div>
      <div class="text-xl font-semi text-gray-500">Projects Done</div>
    </div>
  </div>
</div>
