import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Chat from "./modules/Chat/Chat"
import RootLayout from "./layout/RootLayout"
import MyStuff from "./modules/MyStuff/MyStuff"
import HomeChat from "./modules/HomeChat/HomeChat"
import Discover from "./modules/Discover/Discover"
import PageNotFound from "./common/component/PageNotFound"
import Settings from "./modules/Settings/Settings"

const AppRouter = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="chat" element={<Chat />} />
        <Route path="mystuff" element={<MyStuff />} />
        <Route path="discover" element={<Discover />} />
        <Route index element={<HomeChat />} />
        <Route path="profile" element={<Settings />}>
          <Route path="account" element={<div>Account Page</div>} />
          <Route path="voice-setting" element={<div>Voice Setting Page</div>} />
          <Route path="share-pi" element={<div>Share Pi with other Page</div>} />
          <Route path="help-feedback" element={<div>Help & feedback Page</div>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
export default AppRouter