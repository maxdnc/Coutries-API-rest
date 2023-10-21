// react router
import { Outlet } from "react-router-dom";
// component
import NavBar from "@/components/layouts/NavBar";
import { Toaster } from "../ui/toaster";

export default function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <Toaster />
    </>
  );
}
