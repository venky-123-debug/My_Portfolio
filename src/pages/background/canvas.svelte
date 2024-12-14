<script>
  import { onMount } from "svelte"

  let width, height, largeHeader, canvas, ctx, points, target
  let animateHeader = true
  let animationFrameId

  // Utility: Get the current value of --color from CSS
  const getColorFromCSS = () => {
    return getComputedStyle(document.documentElement).getPropertyValue("--color").trim()
  }
  let currentColor = getColorFromCSS() // Reactive color variable

  // Circle Class
  class Circle {
    constructor(pos, radius, color) {
      this.pos = pos
      this.radius = radius
      this.color = color
      this.active = 0
    }

    draw() {
      if (!this.active) return
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
      ctx.fillStyle = this.color || `rgba(156,217,249,${this.active})`
      ctx.fill()
    }
  }

  // Utility: Calculate squared distance
  const getDistance = (p1, p2) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2

  // Initialize the header
  function initHeader() {
    width = window.innerWidth
    height = window.innerHeight
    target = { x: width / 2, y: height / 2 }

    largeHeader.style.height = `${height}px`
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext("2d")

    points = []
    for (let x = 0; x < width; x += width / 20) {
      for (let y = 0; y < height; y += height / 20) {
        const px = x + Math.random() * (width / 20)
        const py = y + Math.random() * (height / 20)
        points.push({ x: px, y: py, originX: px, originY: py })
      }
    }

    // Find closest points and attach a Circle instance
    points.forEach((p1) => {
      p1.closest = points
        .filter((p2) => p1 !== p2)
        .sort((a, b) => getDistance(p1, a) - getDistance(p1, b))
        .slice(0, 5)

      p1.circle = new Circle(p1, 2 + Math.random() * 2, currentColor)
    })
  }

  // Update circle colors on CSS variable change
  const updateCircleColors = () => {
    points.forEach((p) => (p.circle.color = currentColor))
  }

  // Draw lines between points
  const drawLines = (p) => {
    if (!p.active) return
    ctx.beginPath()
    p.closest.forEach((cp) => {
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(cp.x, cp.y)
    })
    ctx.strokeStyle = `rgba(156,217,249,${p.active})`
    ctx.stroke()
  }

  // Animate points and circles
  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height)

      points.forEach((p) => {
        const distance = Math.abs(getDistance(target, p))
        p.active = distance < 4000 ? 0.3 : distance < 20000 ? 0.1 : distance < 40000 ? 0.02 : 0
        p.circle.active = p.active * 2

        drawLines(p)
        p.circle.draw()
      })
    }
    animationFrameId = requestAnimationFrame(animate)
  }

  // Event Handlers
  const mouseMove = (e) => (target = { x: e.clientX, y: e.clientY })
  const resize = () => initHeader()
  const scrollCheck = () => (animateHeader = document.body.scrollTop <= height)

  onMount(() => {
    largeHeader = document.getElementById("large-header")
    canvas = document.querySelector("canvas")

    initHeader()
    animate()

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("resize", resize)
    window.addEventListener("scroll", scrollCheck)

    // Watch for --color changes
    const observer = new MutationObserver(() => {
      currentColor = getColorFromCSS()
      updateCircleColors()
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", scrollCheck)
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  })
</script>

<!-- HTML Layout -->
<div id="large-header" class="relative w-full bg-cover bg-center backdrop-blur-md bg-opacity-50">
  <canvas class="w-full h-full"></canvas>
</div>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center">
  <slot />
</div>

<style>
  canvas {
    display: block;
  }
</style>
