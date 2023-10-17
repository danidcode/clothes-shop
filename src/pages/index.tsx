import Catalog from "components/Catalog";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col space-y-8 ">
      <Catalog />
    </div>
  );
};

export default HomePage;
