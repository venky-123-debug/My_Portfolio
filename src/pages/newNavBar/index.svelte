<script>
  export let myDetails

  let menuOpen = false
</script>

<div class="fixed w-screen min-h-screen overflow-hidden pt-6 pr-12 z-50 pb-4 pl-12">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-3">
      <a href="/#" class="text-xl"><i class="fa-solid fa-code fa-flip color" /></a>
      <div class="flex-1">
        <div class="text-xl color font-semibold">
          {myDetails.name}
        </div>
      </div>
    </div>
    <button
      on:click={() => {
        menuOpen = !menuOpen
      }}
      type="button"
      class="w-10 h-10 text-white hover:scale-110"
    >
      <i class="fa-solid fa-bars text-lg"></i>
    </button>
  </div>
  {#if menuOpen}
    <div class="navLinks bg-black">
      <ul>
        <li class="buttons" data-text="HOME">HOME</li>
        <li class="buttons" data-text="SKILLS">SKILLS</li>
        <li class="buttons" data-text="ABOUT">ABOUT</li>
        <li class="buttons" data-text="PORTFOLIO">PORTFOLIO</li>
        <li class="buttons" data-text="CONTACT">CONTACT</li>
      </ul>
    </div>
  {/if}
</div>

<style>
  .navLinks {
    position: relative;
    text-align: center;
    display: grid;
  }

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
