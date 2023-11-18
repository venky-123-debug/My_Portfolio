import Home from "../Pages/home/index.svelte"
import ErrorCode404 from "../Pages/404/index.svelte"


export default {
  "/home": Home,
  // The catch-all route must always be last
  "*": ErrorCode404,
}