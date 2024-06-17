import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
// import { useGetFilmsQuery } from "./redux/filmsApi";

function App() {
  // const {
  //   data = [],
  //   isLoading,
  //   error,
  // } = useGetFilmsQuery({ page: 2, limit: 10 });
  return (
    <>
      <Home />
    </>
  );
}

export default App;
