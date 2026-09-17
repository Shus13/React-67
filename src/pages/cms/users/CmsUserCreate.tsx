import { Link } from "react-router";
import TransactionTable from "./Table";

export default function CmsUserCreate() {
  return (
    <>
      <div className="flex justify-between">
        <div>
            <h1 className="text-4xl font-semibold">Create User</h1>
        </div>

        <div>
            <input type="text" placeholder="Search...." className="w-80 p-2 m-2 rounded-full bg-amber-50 border "/>

        <Link to="/cms/user/signup">
          <button className="bg-green-500 m-2 p-4 rounded-full cursor-pointer text-whit">
            Create User
          </button>{" "}
        </Link>
        </div>
      </div>

      {/* Table with prev next and number at the botto, */}
      <div className=" w-full h-screen flex justify-center items-center">
        <TransactionTable /> 
      </div>
    </>
  );
}
