import { Navigate, Outlet } from "react-router";
import CmsHeader from "../../components/header/CmsHeader";
import Sidebar from "../../components/sidebar/CmsSidebar";
import useAuth from "../../lib/hooks/useAuth";

export default function CmsLayout() {

  const {loggedInUser} = useAuth();

  if(!loggedInUser) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        <Sidebar />

        <div className="ml-64">
          <CmsHeader />

          <main className="min-h-screen pt-16">
            <section className="p-6">
              <Outlet />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
