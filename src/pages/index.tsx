import Sidebar from "../components/SideBar";
import { AllProvider } from "../components/TodoContext";
import TodoForm from "../components/TodoForm";

const IndexPage = () => {
  return (
    <AllProvider>
      <div className="container">
        <Sidebar />
        <TodoForm />
      </div>
    </AllProvider>
  );
};

export default IndexPage;