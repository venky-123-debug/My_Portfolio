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
  let totalItems = tools.length
  let clonedTools = [...tools, tools[0]] // Clone the first item at the end for smooth looping

  const updateCarousel = () => {
    const translateValue = -(currentIndex * 100)
    carouselContainer.style.transform = `translateX(${translateValue}%)`
  }

  const nextCard = () => {
    // If we reach the last original item, move back to the first item (cloned one)
    currentIndex = (currentIndex + 1) % clonedTools.length

    // If the index points to the cloned first item, immediately jump back to the first original item
    if (currentIndex === clonedTools.length - 1) {
      setTimeout(() => {
        currentIndex = 1 // Skip to the first original item
        updateCarousel()
      }, 500) // Timeout should match the transition duration
    }

    updateCarousel()
  }

  const prevCard = () => {
    // If we reach the first original item, move to the last cloned one
    if (currentIndex === 0) {
      currentIndex = clonedTools.length - 2
      updateCarousel()
      return
    }

    currentIndex = (currentIndex - 1 + clonedTools.length) % clonedTools.length
    updateCarousel()
  }

  const goToCard = (index) => {
    currentIndex = index + 1 // Skip the cloned first card (starting from index 1)
    updateCarousel()
  }

  // Auto-advance the carousel every 3 seconds
  onMount(() => {
    const interval = setInterval(nextCard, 3000)
    return () => clearInterval(interval)
  })
</script>

<div class="text-3xl font-bold pt-6 text-gray-200">Tools&nbsp;/&nbsp;SDK:</div>

<!-- Carousel container -->
<div class="carousel-container overflow-hidden relative">
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

  <!-- Chevron buttons -->
  <button class="chevron left" on:click={prevCard}>&lt;</button>
  <button class="chevron right" on:click={nextCard}>&gt;</button>
</div>

<!-- Dots Navigation -->
<div class="dots-navigation">
  {#each tools as _, index}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span class="dot" on:click={() => goToCard(index)} class:selected={index === currentIndex}></span>
  {/each}
</div>

<style>
  .carousel-container {
    position: relative;
    width: 100%;
    height: 200px;
  }

  .card {
    height: 200px; /* Adjust height as per your card's size */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Add smooth transition effect */
  .transition-transform {
    transition: transform 0.5s ease-in-out;
  }

  /* Chevron buttons */
  .chevron {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  .chevron.left {
    left: 10px;
  }

  .chevron.right {
    right: 10px;
  }

  .dots-navigation {
    text-align: center;
    margin-top: 20px;
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
