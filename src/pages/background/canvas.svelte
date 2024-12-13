<script>
  import { onMount } from "svelte"

  let width, height, largeHeader, canvas, ctx, points, target
  let animateHeader = true
  let animationFrameId

  onMount(() => {
    initHeader()
    initAnimation()
    addListeners()

    // Cleanup event listeners when the component is destroyed
    return () => {
      // window.removeEventListener("mousemove", mouseMove)
      // window.removeEventListener("scroll", scrollCheck)
      // window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId) // Cleanup animation frame
    }
  })

  // Initialize canvas size and points
  function initHeader() {
    width = window.innerWidth
    height = window.innerHeight
    target = { x: width / 2, y: height / 2 }

    largeHeader = document.getElementById("large-header")
    largeHeader.style.height = `${height}px`

    // canvas = document.getElementById("demo-canvas")
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext("2d")

    // Generate points
    points = []
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + (Math.random() * width) / 20
        const py = y + (Math.random() * height) / 20
        const p = { x: px, originX: px, y: py, originY: py }
        points.push(p)
      }
    }

    // Find closest points
    for (let i = 0; i < points.length; i++) {
      let closest = []
      let p1 = points[i]
      for (let j = 0; j < points.length; j++) {
        let p2 = points[j]
        if (p1 !== p2) {
          let placed = false
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2
                placed = true
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2
                placed = true
              }
            }
          }
        }
      }
      p1.closest = closest
    }

    // Create circles for each point
    for (let i in points) {
      const c = new Circle(points[i], 2 + Math.random() * 2, "rgba(255,255,255,0.3)")
      points[i].circle = c
    }
  }

  // Event Handlers
  function addListeners() {
    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("scroll", scrollCheck)
    window.addEventListener("resize", resize)
  }

  function mouseMove(e) {
    const posx = e.pageX || e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
    const posy = e.pageY || e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    target.x = posx
    target.y = posy
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height
  }

  function resize() {
    width = window.innerWidth
    height = window.innerHeight
    largeHeader.style.height = `${height}px`
    canvas.width = width
    canvas.height = height
  }

  // Animation
  function initAnimation() {
    animate()
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height)

      points.forEach((point) => {
        // Detect points in range of the mouse target
        if (Math.abs(getDistance(target, point)) < 4000) {
          point.active = 0.3
          point.circle.active = 0.6
        } else if (Math.abs(getDistance(target, point)) < 20000) {
          point.active = 0.1
          point.circle.active = 0.3
        } else if (Math.abs(getDistance(target, point)) < 40000) {
          point.active = 0.02
          point.circle.active = 0.1
        } else {
          point.active = 0
          point.circle.active = 0
        }

        drawLines(point)
        point.circle.draw()
      })
    }

    // Request the next animation frame
    animationFrameId = requestAnimationFrame(animate)
  }

  // Canvas manipulation
  function drawLines(p) {
    if (!p.active) return

    p.closest.forEach((closestPoint) => {
      ctx.beginPath()
      ctx.moveTo(p.x, p.y)
      ctx.lineTo(closestPoint.x, closestPoint.y)
      ctx.strokeStyle = `rgba(156,217,249,${p.active})`
      ctx.stroke()
    })
  }

  // Circle constructor
  function Circle(pos, rad, color) {
    this.pos = pos || null
    this.radius = rad || null
    this.color = color || null

    this.draw = function () {
      if (!this.active) return
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false)
      ctx.fillStyle = `rgba(156,217,249,${this.active})`
      ctx.fill()
    }
  }

  // Utility function to calculate the distance
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
  }
</script>

<svelte:window on:mousemove={mouseMove} on:scroll={scroll} on:resize|stopPropagation={resize} />
<div id="large-header" class="relative w-full bg-cover bg-center backdrop-blur-md bg-opacity-50">
  <canvas bind:this={canvas} class="w-full h-full"></canvas>
</div>

<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 text-center">
  <slot />
</div>
