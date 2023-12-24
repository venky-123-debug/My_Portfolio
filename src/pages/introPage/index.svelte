<script>
  import { afterUpdate, onDestroy, onMount } from "svelte"
  

  let currentIndex = 0
  let texts = ["I'm Venkatesh. C", "I'm a Web Developer"]
  let currentText = texts[currentIndex]
  let interval
  let visibleText = false

  onMount(() => {
    interval = setInterval(() => {
      toggleVisibility()
      updateText()
    }, 2500)
  })

  afterUpdate(() => {
    if (!visibleText) updateText()
  })
  onDestroy(() => {
    clearInterval(interval)
  })
  const updateText = () => {
    currentIndex = (currentIndex + 1) % texts.length
    currentText = texts[currentIndex]
  }

  const toggleVisibility = () => {
    // Toggle the visibility every 500ms
    visibleText = !visibleText
  }
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
</script>

<div id="home" class="flex justify-center m-auto h-full w-screen">
  <div class="flex flex-col mx-auto gap-3">
    <div class="text-4xl font-medium text-gray-300 text-center">Hello World</div>
    <div class="h-[48px]">
      {#if visibleText}
        <div class="text-6xl text-center font-semibold text-green-300 w-full" transition:typewriter={{ speed: 1, reverse: false }}>
          {currentText}
        </div>
      {:else}
        <div class="text-6xl text-center font-semibold text-green-300 w-full">&nbsp;</div>
      {/if}
    </div>
    <div class="text-3xl mt-3 font-normal text-gray-300 text-center">based in Chennai, Tamil Nadu</div>
    <div class="text-center mt-6">
      <button on:click type="button" class="rounded-md w-32 border border-green-300 bg-transparent py-2 text-sm font-medium text-white hover:bg-green-600 active:bg-green-500">Hire Me</button>
    </div>
  </div>
</div>
