import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";

export default function AppWrapper({ children }) {
  return (
    <div className="flex">
      <Navbar />
      <div className="ml-0 lg:ml-64 w-full">
        <Header />
        <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
      </div>
    </div>
  );
}
