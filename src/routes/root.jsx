import { Route, Router, Routes } from "react-router-dom"
import App from "../App"
import MainLayout from "../layout/mainLayout"
import HomePage from "../pages/home"
import HutulburPage from "../pages/hutulbur"
import SchoolPage from "../pages/schools"

export default function Root() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/school' element={<SchoolPage />} />
        <Route path='/hutulbur' element={<HutulburPage />} />
      </Routes>
    </MainLayout>
  )

}