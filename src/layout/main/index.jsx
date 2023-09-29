import Content from "./Content";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div id="wrapper" className="flex">
      <aside className="w-[350px] py-[30px] px-[40px]">
        <Sidebar />
      </aside>
      <main className="flex-1 border-l-[1px] border-l-gray-light">
        <Content />
      </main>
    </div>
  );
}
