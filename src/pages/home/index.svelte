<script>
  import NavBar from "../navbar/navBar.svelte";

  let text = "I'm a Web Developer";

  function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<div
  class="relative flex min-h-screen w-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
>
  <NavBar />
  <div class="flex justify-center m-auto h-full w-screen ">
    <div class="flex flex-col mx-auto gap-3">
      <div class="text-4xl font-normal text-gray-300 text-center">hello world</div>
      <div class="text-5xl text-left font-semibold text-blue-500" transition:typewriter>{text}</div>
    </div>
  </div>
</div>
