<script>
  import NavBar from "./Pages/navbar/navBar.svelte"
  import Page_1 from "./Pages/home/page_1.svelte"
</script>
<div class="min-h-screen flex w-screen overflow-hidden"> 
  <NavBar />
  <Page_1 />
</div>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
