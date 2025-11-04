import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Chat from "./modules/Chat/Chat"
import RootLayout from "./layout/RootLayout"

const AppRouter = () => {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RootLayout />}>
        <Route index element={<Chat text={"home"}/>} />
        <Route path="about" element={<Chat text={"about"}/>} />
      </Route>
    )
  )
  return <RouterProvider   router={router} />
}
export default AppRouter