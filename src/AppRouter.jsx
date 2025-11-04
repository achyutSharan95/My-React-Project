import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Chat from "./modules/Chat/Chat"
import RootLayout from "./layout/RootLayout"
import MyStuff from "./modules/MyStuff/MyStuff"
import HomeChat from "./modules/HomeChat/HomeChat"
import Discover from "./modules/Discover/Discover"

const AppRouter = () => {

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"  element={<RootLayout />}>
        <Route path="chat" element={<Chat/>} />
        <Route path="mystuff" element={<MyStuff/>} />
        <Route path="discover" element={<Discover/>} />
        <Route index element={<HomeChat/>} />
      </Route>
    )
  )
  return <RouterProvider   router={router} />
}
export default AppRouter