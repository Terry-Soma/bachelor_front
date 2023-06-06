import { useContext, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import ElsegchContext from "../context/ElsegchContext"
import MainLayout from "../layout/mainLayout"
import ElsegchInfoPage from "../pages/Elsegch"
import HelpPage from "../pages/Help"
import HomePage from "../pages/home"
import HutulburPage from "../pages/hutulbur"
import LoginPage from "../pages/Login"
import Logout from "../pages/logout"
import SchoolPage from "../pages/schools"

export default function Root() {
  const Ectx = useContext(ElsegchContext);
  useEffect(() => {
    const burtgel_Id = localStorage.getItem("burtgel_Id");
    const email = localStorage.getItem("email");
    const emailVerified = localStorage.getItem("EV");
    if (burtgel_Id && email) {
      Ectx.autoLogin(burtgel_Id, email, emailVerified)
    }
  }, [])
  return (
    <MainLayout>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path='/school' element={<SchoolPage />} />
        <Route path='/hutulbur' element={<HutulburPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />

        {/* protected route */}
        <Route path="/elsegch" element={<ElsegchInfoPage />} />

        <Route path='/' element={<HomePage />} />
      </Routes>
      
      <ToastContainer />  
    </MainLayout>
  )

}