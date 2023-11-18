<script>
  import NavBar from "../navbar/navBar.svelte"
  import { onMount, onDestroy, afterUpdate } from "svelte"

  let currentIndex = 0
  let texts = ["I'm Venkatesh. C", "I'm a Web Developer"]
  let currentText = texts[currentIndex]
  let interval
  let visibleText = false

  function typewriter(node, { speed = 1, reverse = false }) {
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

  const updateText = () => {
    currentIndex = (currentIndex + 1) % texts.length
    currentText = texts[currentIndex]
  }

  const toggleVisibility = () => {
    // Toggle the visibility every 500ms
    visibleText = !visibleText
  }

  onMount(() => {
    interval = setInterval(() => {
      toggleVisibility()
      updateText()
    }, 2500) // Toggle visibility and update text every 500ms
  })

  onDestroy(() => {
    clearInterval(interval)
  })

  afterUpdate(() => {
    if (!visibleText) updateText()
  })
</script>

<div class="relative flex min-h-screen select-none w-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
  <NavBar />
  <div class="flex justify-center m-auto h-full w-screen">
    <div class="flex flex-col mx-auto gap-3">
      <div class="text-4xl font-medium text-gray-300 text-center">Hello World</div>
      <div class="h-[48px]">
        {#if visibleText}
          <div class="text-5xl text-left font-semibold text-blue-500 w-full" transition:typewriter={{ speed: 1, reverse: false }} key={currentText}>
            {currentText}
          </div>
        {:else}
          <div class="text-5xl text-left font-semibold text-blue-500 w-full">&nbsp;</div>
        {/if}
      </div>
      <div class="text-3xl font-normal text-gray-300 text-center">based in Chennai, Tamil Nadu</div>
      <div class="text-center mt-6">
        <button type="button" class="rounded-md w-32 border border-green-300 bg-transparent py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-500">Hire Me</button>
      </div>
    </div>
  </div>

  <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-300">
    <i class="fa-solid fa-chevron-down fa-bounce fa-xl h-10 w-10 border border-[#a0a1a533] rounded-full flex items-center justify-center" />
  </div>
</div>
