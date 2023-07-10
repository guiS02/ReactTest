import Search from "../components/Search/Search";

const Home = () => {

  const storeUser = async(userName:string) => {
    localStorage.setItem("userName", userName);
  };

  return (
    <div>
      <Search storeUser={storeUser} />
    </div>
  );
};

export default Home
