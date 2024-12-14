<script>
  import { onMount } from "svelte"

  // Define the logo data
  let logos = [
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg", alt: "Facebook" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg", alt: "Disney" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg", alt: "Airbnb" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg", alt: "Apple" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/spark.svg", alt: "Spark" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg", alt: "Samsung" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg", alt: "Quora" },
    { src: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg", alt: "Sass" },
  ]

  // Duplicate the logos array for seamless scrolling
  let logosDuplicated = [...logos, ...logos]

  let isMounted = false

  onMount(() => {
    isMounted = true // Set the flag to true once the component is mounted
  })
</script>

<div class="relative font-inter antialiased">
  <main class="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
    <div class="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
      <div class="text-center">
        <!-- Logo Carousel animation -->
        <div class="w-full inline-flex flex-nowrap overflow-hidden relative">
          <ul class="logos-list flex items-center justify-center md:justify-start space-x-8" class:animate-infinite-scroll={isMounted}>
            {#each logosDuplicated as { src, alt }}
              <li>
                <img {src} {alt} class="max-w-none" />
              </li>
            {/each}
          </ul>
        </div>
        <!-- End: Logo Carousel animation -->
      </div>
    </div>
  </main>
</div>

<!-- Tailwind CSS Animations -->
<style>
  /* Animation for infinite scroll */
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-infinite-scroll {
    animation: infinite-scroll 30s linear infinite;
  }
</style>
