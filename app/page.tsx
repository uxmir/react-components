"use cient";
import React from "react";
import DataTable from "./components/DataTableWithShortingSystem/DataTable";
import Api from "./components/ApiIntregationWithRedux/Api";
const page:React.FC = () => {
  return (
    <>

        <div>
       <DataTable/>
        </div>
    </>
  );
};

export default page;
