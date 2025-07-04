import SideView from "@/components/adminSideView";
import CreateBlog from "@/components/createBlog";

const Admin = async () => {
  return (
    <main className="flex mt-7 p-3 gap-1 h-screen">
      <CreateBlog />
      <SideView />
    </main>
  );
};

export default Admin;
