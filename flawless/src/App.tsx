import { Navigation } from "modules/Navigation"
import "./index.css"
import { MainPage } from "pages/MainPage/MainPage"
import { Route, Routes } from "react-router"
import { AdminPage } from "pages/AdminPage/AdminPage"

export function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/admin" element={<AdminPage />} />
            </Routes>
        </div>
    )
}
