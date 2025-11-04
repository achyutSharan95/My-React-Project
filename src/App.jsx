import { Suspense,lazy } from "react"
import AppRouter from "./AppRouter.jsx"
import Loader from "./Loader.jsx";
const App = ()=>{
  return(
    <Suspense fallback={<Loader />}>
    <AppRouter />
  </Suspense>
  )
}
export default App