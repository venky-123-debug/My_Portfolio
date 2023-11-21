import Home from "../Pages/home/index.svelte"
import About from "../Pages/about/index.svelte"
import ErrorCode404 from "../Pages/404/index.svelte"


export default {
  "/": Home,
  "/about": About,
  // The catch-all route must always be last
  "*": ErrorCode404,
}