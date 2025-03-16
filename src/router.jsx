import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./app/Index";
import Main from "./app/Main";
import ServicePage from "./app/Service";
import ProjectApp from "./app/Projects";
import CallApp from "./app/Call";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main />} >
                    <Route index element={<Index />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/projects" element={<ProjectApp />} />
                    <Route path="/call" element={<CallApp />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}