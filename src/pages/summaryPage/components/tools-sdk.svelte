<script>
  import { onMount } from "svelte"

  // Import the SVG components
  import PuTTy from "../svg/PuTTY.svelte"
  import Filezilla from "../svg/filezilla.svelte"
  import Postmark from "../svg/Postmark.svelte"
  import Pm2 from "../svg/PM2.svelte"
  import Mongodb from "../svg/mongodb.svelte"
  import Jwt from "../svg/jwt.svelte"
  import Redis from "../svg/redis.svelte"

  const tools = [
    { name: "Putty", url: "https://www.putty.org/", icon: PuTTy, bgColor: "#000000cc", textColor: "#f7f7f7" },
    { name: "FileZilla", url: "https://filezilla-project.org/", icon: Filezilla, bgColor: "#000000cc", textColor: "#bb0000" },
    { name: "Postmark", url: "https://postmarkapp.com/", icon: Postmark, bgColor: "#000000cc", textColor: "#ffde00" },
    { name: "PM2", url: "https://pm2.keymetrics.io/", icon: Pm2, bgColor: "#000000cc", textColor: "#ffffff" },
    { name: "MongoDB Shell", url: "https://www.mongodb.com/docs/mongodb-shell/", icon: Mongodb, bgColor: "#000000cc", textColor: "#599636" },
    { name: "JWT", url: "https://jwt.io/", icon: Jwt, bgColor: "#000000cc", textColor: "#f7f7f7" },
    { name: "Redis", url: "https://redis.io/", icon: Redis, bgColor: "#000000cc", textColor: "#ff766d" },
  ]

  let carouselContainer
  let currentIndex = 1 // Start at the first card (to show the first one correctly)
  let clonedTools = [...tools, tools[0]] // Clone the first item at the end for smooth looping
  let duration = 1500
  // const updateCarousel = () => {
  //   const translateValue = -(currentIndex * 100)
  //   carouselContainer.style.transform = `translateX(${translateValue}%)`
  // }

  // const nextCard = () => {
  //   // If we reach the last original item, move back to the first item (cloned one)
  //   currentIndex = (currentIndex + 1) % clonedTools.length

  //   // If the index points to the cloned first item, immediately jump back to the first original item
  //   if (currentIndex === clonedTools.length - 1) {
  //     setTimeout(() => {
  //       currentIndex = 1 // Skip to the first original item
  //       updateCarousel()
  //     }, duration) // Timeout should match the transition duration
  //   }

  //   updateCarousel()
  // }

  // const prevCard = () => {
  //   // If we reach the first original item, move to the last cloned one
  //   if (currentIndex === 0) {
  //     currentIndex = clonedTools.length - 2
  //     updateCarousel()
  //     return
  //   }

  //   currentIndex = (currentIndex - 1 + clonedTools.length) % clonedTools.length
  //   updateCarousel()
  // }

  const updateCarousel = () => {
    if (currentIndex === 0) return // Avoid unnecessary updates when at the start

    // Remove items before the current index and add them to the end of the array
    clonedTools = [...clonedTools.slice(currentIndex), ...clonedTools.slice(0, currentIndex)]
    currentIndex = 0 // Reset currentIndex since the array is rearranged

    // Re-render carouselContainer and reset transform
    setTimeout(() => {
      carouselContainer.style.transition = "none" // Disable smooth transition
      carouselContainer.style.transform = `translateX(0%)`

      // Re-enable smooth transitions
      setTimeout(() => {
        carouselContainer.style.transition = "transform 0.5s ease-in-out"
      })
    }, 50) // Small delay for proper visual updates
  }
  const nextCard = () => {
    currentIndex = (currentIndex + 1) % clonedTools.length

    // When currentIndex reaches the end, dynamically rearrange the array
    if (currentIndex === clonedTools.length - 1) {
      updateCarousel() // Rearrange array to prevent jump
    } else {
      const translateValue = -(currentIndex * 100)
      carouselContainer.style.transform = `translateX(${translateValue}%)`
    }
  }
  const prevCard = () => {
    currentIndex = (currentIndex - 1 + clonedTools.length) % clonedTools.length

    // When currentIndex reaches the beginning, dynamically rearrange the array
    if (currentIndex === 0) {
      updateCarousel() // Rearrange array to prevent jump
    } else {
      const translateValue = -(currentIndex * 100)
      carouselContainer.style.transform = `translateX(${translateValue}%)`
    }
  }

  const goToCard = (index) => {
    currentIndex = index + 1 // Skip the cloned first card (starting from index 1)
    updateCarousel()
  }

  // Auto-advance the carousel every 3 seconds
  onMount(() => {
    const interval = setInterval(nextCard, duration)
    return () => clearInterval(interval)
  })
</script>

<div class="text-3xl font-bold pt-6 text-gray-200">Tools&nbsp;/&nbsp;SDK:</div>

<div class="flex items-center gap-3 pt-6 justify-between h-16">
  <button type="button" class="bg-[#000000cc] text-center rounded-md p-3 w-10 min-h-full" on:click={prevCard}><i class="fa-solid fa-chevron-left text-color" /></button>
  <div class="w-full text-center overflow-hidden min-h-full">
    <div class="flex transition-transform duration-500 ease-in-out" bind:this={carouselContainer}>
      {#each clonedTools as { name, url, icon, bgColor, textColor }, index}
        <a href={url} target="_blank" style="background-color: {bgColor};" class="flex-shrink-0 w-full p-3 rounded-md flex items-center justify-center hover:scale-105 transition duration-150 card">
          <div class="text-lg font-semibold" style="color: {textColor};">
            {name}
          </div>
          <div class="pl-2 flex items-center justify-center w-16">
            <svelte:component this={icon} />
          </div>
        </a>
      {/each}
    </div>
  </div>
  <button type="button" class="bg-[#000000cc] text-center p-3 w-10 rounded-md min-h-full" on:click={nextCard}><i class="fa-solid fa-chevron-right text-color" /></button>
</div>

<!-- Dots Navigation -->
<div class="text-center mt-6">
  {#each tools as _, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="dot" on:click={() => goToCard(index)} class:selected={index === currentIndex}></span>
  {/each}
</div>

<style>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Add smooth transition effect */
  .transition-transform {
    transition: transform 0.5s ease-in-out;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: gray;
    margin: 0 5px;
    cursor: pointer;
  }

  .dot.selected {
    background-color: white;
  }
</style>
