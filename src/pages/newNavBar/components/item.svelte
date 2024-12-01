<script>
  import { createEventDispatcher } from "svelte"
  export let menuItems = [] // Expecting an array of menu items

  const dispatch = createEventDispatcher()
</script>

<div class="navLinks grid pb-10 text-center bg-black">
  <ul>
    {#each menuItems as item}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li on:click={() => dispatch("nav", { id: item.toLowerCase() })} class="cursor-pointer hover:text-color" data-text={item}>
        {item}
      </li>
    {/each}
  </ul>
</div>

<style>
  .navLinks > ul li {
    margin: auto;
    font-size: 30px;
    width: 100%;
    padding: 15px 0px;
    display: block;
    color: rgb(255, 255, 255, 0.7);
  }
  .navLinks > ul li::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    transform: translate(-50%, -50%);
    align-items: center;
    font-size: 4em;
    font-weight: 400;
    font-family: monoton;
    color: rgb(255, 255, 255, 0.2);
    z-index: 1;
    pointer-events: none;
    opacity: 0;
    letter-spacing: 100px;
    transition: all 0.4s ease;
  }

  .navLinks ul li:hover::after {
    content: attr(data-text);
    opacity: 1;
    letter-spacing: 10px;
  }
</style>
