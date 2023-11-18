import Home from "../Pages/home/page_1.svelte"

export default {
  "/home": Home,
  // The catch-all route must always be last
  "*": ErrorCode404,
}