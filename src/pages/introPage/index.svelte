<script>
  import { afterUpdate, onDestroy, onMount } from "svelte"
  import Icons from "../home/icons.svelte"
  import Button from "../../shared/button.svelte"

  export let texts = []
  export let myDetails = {}

  let currentIndex = 0
  let currentText = ""
  let interval
  let visibleText = false

  $: if (texts.length && currentText === "") {
    currentText = texts[currentIndex]
    startTypewriter()
  }

  const startTypewriter = () => {
    interval = setInterval(() => {
      toggleVisibility()
    }, 3700)
  }

  onMount(() => {
    // Start typewriter immediately after texts are loaded
    if (texts.length) {
      currentText = texts[currentIndex]
      startTypewriter() // Start without waiting for interval onMount
    }
  })

  afterUpdate(() => {
    if (!visibleText) updateText()
  })

  onDestroy(() => {
    clearInterval(interval)
  })

  const updateText = () => {
    if (texts.length > 0) {
      currentIndex = (currentIndex + 1) % texts.length
      currentText = texts[currentIndex]
    }
  }

  const toggleVisibility = () => {
    visibleText = !visibleText
  }

  const typewriter = (node, { speed = 1, reverse = false }) => {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`)
    }

    const text = node.textContent
    const duration = text.length / (speed * 0.01)

    return {
      duration,
      tick: (t) => {
        let i
        if (reverse) {
          i = Math.trunc(text.length * (1 - t))
        } else {
          i = Math.trunc(text.length * t)
        }
        node.textContent = text.slice(0, i)
      },
    }
  }
</script>

<div class="flex justify-center m-auto h-full w-screen">
  <div class="flex flex-col mx-auto gap-3">
    <div class="lg:text-2xl sm:text-base md:text-lg text-sm font-medium text-gray-300 text-center">Hello World</div>
    <span class="lg:text-2xl sm:text-base md:text-lg text-sm text-center font-semibold text-white">
      I'm&nbsp; <span class="text-color font-bold lg:text-4xl sm:text-lg md:text-xl text-base">{myDetails.name}</span>
    </span>
    <span class="lg:text-4xl sm:text-lg md:text-xl text-base text-color font-bold text-center text-white">
      <span class="">{myDetails.role}</span>
    </span>
    <div class="lg:h-[48px] h-5 sm:h-10 flex justify-center items-center">
      {#if visibleText}
        <span class="lg:text-5xl sm:text-base md:text-lg text-sm font-semibold text-color" transition:typewriter={{ speed: 1 }}>
          {currentText}
        </span>
      {:else}
        <span class="text-6xl font-semibold text-green-300">&nbsp;</span>
      {/if}
    </div>
    <div class="lg:text-2xl sm:text-base md:text-lg text-sm mt-3 font-normal text-gray-300 text-center">Based in {myDetails?.personalInfo?.city}, {myDetails?.personalInfo?.state}</div>
    <!-- <div class="text-center mt-6">
      <button type="button" on:click class="rounded-md w-32 border border-green-300 bg-transparent py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-500">Hire Me</button>
    </div> -->
    <div class="text-center mt-6">
      <Button on:click type="button" title="Let's Collaborate" className="hover:bg-blue-500 active:bg-blue-600" iconClass="fa-handshake" />
    </div>
    <!-- <div class="text-center mt-6">
      <Button on:click type="button" title="Hire Me" className="bg-blue-600 hover:bg-blue-500 active:bg-blue-600" />
    </div> -->
  </div>
</div>

<Icons />

<style>
  .text-color {
    color: var(--color);
  }
</style>
