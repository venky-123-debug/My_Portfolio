<script>
  import { onMount, afterUpdate } from "svelte"
  import { writable } from "svelte/store"

  // Import the SVG components
  import PuTTy from "../svg/PuTTY.svelte"
  import Filezilla from "../svg/filezilla.svelte"
  import Postmark from "../svg/Postmark.svelte"
  import Pm2 from "../svg/PM2.svelte"
  import Mongodb from "../svg/mongodb.svelte"
  import Jwt from "../svg/jwt.svelte"
  import Redis from "../svg/redis.svelte"

  const tools = [
    {
      name: "Putty",
      url: "https://www.putty.org/",
      icon: PuTTy,
      bgColor: "#000000cc",
      textColor: "#f7f7f7",
    },
    {
      name: "FileZilla",
      url: "https://filezilla-project.org/",
      icon: Filezilla,
      bgColor: "#000000cc",
      textColor: "#bb0000",
    },
    {
      name: "Postmark",
      url: "https://postmarkapp.com/",
      icon: Postmark,
      bgColor: "#000000cc",
      textColor: "#ffde00",
    },
    {
      name: "PM2",
      url: "https://pm2.keymetrics.io/",
      icon: Pm2,
      bgColor: "#000000cc",
      textColor: "#ffffff",
    },
    {
      name: "MongoDB Shell",
      url: "https://www.mongodb.com/docs/mongodb-shell/",
      icon: Mongodb,
      bgColor: "#000000cc",
      textColor: "#599636",
    },
    {
      name: "JWT",
      url: "https://jwt.io/",
      icon: Jwt,
      bgColor: "#000000cc",
      textColor: "#f7f7f7",
    },
    {
      name: "Redis",
      url: "https://redis.io/",
      icon: Redis,
      bgColor: "#000000cc",
      textColor: "#ff766d",
    },
  ]

  let currentIndex = writable(0)
  let toolsWithClones = [...tools, tools[0]] // Clone the first tool to make a continuous loop

  const nextCard = () => {
    currentIndex.update((n) => (n + 1) % tools.length)
  }

  // Move the first tool to the end when the transition ends to maintain the continuity.
  afterUpdate(() => {
    currentIndex.subscribe((index) => {
      if (index === tools.length) {
        toolsWithClones = [...tools, tools[0]] // Re-add the first tool to the end
      }
    })
  })

  // Auto-advance the carousel every 3 seconds
  onMount(() => {
    const interval = setInterval(nextCard, 3000)
    return () => clearInterval(interval)
  })
</script>

<div class="text-3xl font-bold pt-6 text-gray-200">Tools&nbsp;/&nbsp;SDK:</div>

<!-- Carousel container -->
<div class="carousel-container overflow-hidden">
  <div class="flex transition-transform duration-500 ease-in-out" style="transform: translateX(-{$currentIndex * 100}%);">
    {#each toolsWithClones as { name, url, icon, bgColor, textColor }, index}
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
    transition: transform 1s ease-in-out;
  }

  /* Add smooth transition effect */
  .transition-transform {
    transition: transform 0.5s ease-in-out;
  }
</style>
