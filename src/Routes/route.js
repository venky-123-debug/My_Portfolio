import Home from "../Pages/home/index.svelte"
import About from "../Pages/about/index.svelte"
import services from "../Pages/whatIDo/index.svelte"
import Summary from "../Pages/summaryPage/index.svelte"
import Contact from "../Pages/contact/index.svelte"
import ErrorCode404 from "../Pages/404/index.svelte"


export default {
  "/": Home,
  "/about": About,
  "/resume":services,
  "/portfolio":Summary,
  "/contact": Contact,
  // The catch-all route must always be last
  "*": ErrorCode404,
}