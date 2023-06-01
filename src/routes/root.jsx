import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import MainLayout from "../layout/mainLayout"
import ElsegchInfoPage from "../pages/Elsegch"
import HelpPage from "../pages/Help"
import HomePage from "../pages/home"
import HutulburPage from "../pages/hutulbur"
import LoginPage from "../pages/Login"
import SchoolPage from "../pages/schools"

export default function Root() {
  return (
    <MainLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <Routes>
        <Route path='/school' element={<SchoolPage />} />
        <Route path='/hutulbur' element={<HutulburPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* protected route */}
        <Route path="/elsegch" element={<ElsegchInfoPage />} />

        <Route path='/' element={<HomePage />} />
      </Routes>
    </MainLayout>
  )

}