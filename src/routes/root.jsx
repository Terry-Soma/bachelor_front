import { Route, Routes } from "react-router-dom"
import MainLayout from "../layout/mainLayout"
import HelpPage from "../pages/Help"
import HomePage from "../pages/home"
import HutulburPage from "../pages/hutulbur"
import LoginPage from "../pages/Login"
import SchoolPage from "../pages/schools"

export default function Root() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/school' element={<SchoolPage />} />
        <Route path='/hutulbur' element={<HutulburPage />} />
        <Route path='/help' element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </MainLayout>
  )

}