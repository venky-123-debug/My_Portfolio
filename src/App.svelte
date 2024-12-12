<script>
  import { onMount } from "svelte"
  import Home from "./pages/home/index.svelte"
  import ColorPicker from "./shared/colorPicker.svelte"
  import Background from "./pages/background/index.svelte"

  onMount(() => {
    setTimeout(() => {
      const load = document.getElementById("mainLoader")
      load.style.display = "none"
      const mainContent = document.getElementById("mainContent")
      mainContent.style.display = "block"
    }, 500)
  })
</script>

<div>
  <!-- <Home /> -->
  <ColorPicker />

  <Background />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    font-family: "Nunito", sans-serif;
  }

  @layer base {
    html {
      -webkit-tap-highlight-color: transparent;
    }
  }

  .height {
    height: auto;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .card:hover {
    box-shadow: 0 4px 12px var(--color); /* Apply shadow with CSS variable */
  }
</style>
