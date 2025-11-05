import { Link } from "react-router-dom";
const PageNotFound = ()=>{
  return (<> 
  <div className="flex flex-col justify-center items-center h-screen gap-6">
  <div className="text-[70px] font-bold text-center">404 Page Not Found</div>
  <Link to={"/"} className="border border-green-300 bg-green-700 rounded-md p-3 text-center block text-[#FFF] font-bold hover:text-[#F7EFE3] hover:bg-green-500" >Goto Home</Link>
  </div>
  
  </>
  )
}
export default PageNotFound;