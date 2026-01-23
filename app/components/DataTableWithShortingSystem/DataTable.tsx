"use client"
import React, { useMemo, useState } from 'react'
import Container from '../Container/Container'
import { IconSelector } from '@tabler/icons-react';
interface tableData{
    id:number;
    product_name:string;
    category:string;
    company_name:string;
    warranty_date:string;
    status:string
}
 const productData: tableData[] = [
  {
    id: 1,
    product_name: "Vivo Y20",
    category: "phone",
    company_name: "vivo",
    warranty_date: "20/10/2032",
    status: "available",
  },
  {
    id: 2,
    product_name: "iPhone 13",
    category: "phone",
    company_name: "apple",
    warranty_date: "15/08/2031",
    status: "available",
  },
  {
    id: 3,
    product_name: "Galaxy S22",
    category: "phone",
    company_name: "samsung",
    warranty_date: "10/06/2030",
    status: "out of stock",
  },
  {
    id: 4,
    product_name: "MacBook Pro M2",
    category: "laptop",
    company_name: "apple",
    warranty_date: "01/01/2033",
    status: "available",
  },
  {
    id: 5,
    product_name: "ThinkPad X1",
    category: "laptop",
    company_name: "lenovo",
    warranty_date: "22/04/2031",
    status: "maintenance",
  },
  {
    id: 6,
    product_name: "Dell UltraSharp U2723",
    category: "monitor",
    company_name: "dell",
    warranty_date: "18/09/2030",
    status: "available",
  },
  {
    id: 7,
    product_name: "HP LaserJet Pro",
    category: "printer",
    company_name: "hp",
    warranty_date: "05/05/2029",
    status: "out of stock",
  },
  {
    id: 8,
    product_name: "Sony WH-1000XM5",
    category: "headphone",
    company_name: "sony",
    warranty_date: "12/12/2032",
    status: "available",
  },
  {
    id: 9,
    product_name: "iPad Air 5",
    category: "tablet",
    company_name: "apple",
    warranty_date: "30/03/2031",
    status: "available",
  },
  {
    id: 10,
    product_name: "Logitech MX Master 3",
    category: "accessory",
    company_name: "logitech",
    warranty_date: "25/11/2028",
    status: "expired",
  },
  {
    id: 11,
    product_name: "Canon EOS 90D",
    category: "camera",
    company_name: "canon",
    warranty_date: "14/07/2030",
    status: "available",
  },
  {
    id: 12,
    product_name: "Asus ROG Strix",
    category: "laptop",
    company_name: "asus",
    warranty_date: "09/09/2032",
    status: "available",
  }
];

const DataTable:React.FC = () => {
const [sortData,setSortData]=useState<{key:keyof tableData,direction:'asc'|'desc'}| null>(null)
const [searchText,setSearchText]=useState<string>("")
const sortedData=useMemo(()=>{
 const sortItems =[...productData]
 if(!sortData) return sortItems;
 sortItems.sort((a,b)=>{
 if(a[sortData.key]<b[sortData.key]){
    return sortData?.direction==="asc"?-1:1
 }
  if(a[sortData.key]>b[sortData.key]){
    return sortData?.direction==="asc"?1:-1
 }
 return 0
 })  
 return sortItems
},[sortData])
const requestSort=(key:keyof tableData)=>{
    let direction:'asc'|'desc'='asc';
    if(sortData && sortData.key===key && sortData.direction==="asc"){
        direction="desc"
    }
    setSortData({key,direction})
}
//filter logic
const filteredData=useMemo(()=>{
return sortedData.filter((i)=>{
  return i.product_name.toLowerCase().includes(searchText.toLowerCase())||
  i.category.toLowerCase().includes(searchText.toLowerCase())||
  i.company_name.toLowerCase().includes(searchText.toLowerCase())||
  i.warranty_date.toLowerCase().includes(searchText.toLowerCase())||
  i.status.toLowerCase().includes(searchText.toLowerCase())
})
},[searchText,sortedData])
  return (
    <div>
      <Container>
        <input 
        type='text'
        placeholder='Search by Company Name or Category or status or warranty date....'
        value={searchText}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearchText(e.target.value)}
        className='w-[300px] py-2 rounded border-gray-300 border px-5 my-5'
        />
   <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
  <table className="w-full ">
    <thead className="bg-gray-50">
      <tr className="text-left text-sm font-semibold text-gray-600">
        <th className="px-6 py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            Product Name
            <IconSelector
              size={16}
              className="text-gray-400 hover:text-black"
              onClick={() => requestSort("product_name")}
            />
          </div>
        </th>

        <th className="px-6 py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            Category
            <IconSelector
              size={16}
              className="text-gray-400 hover:text-black"
              onClick={() => requestSort("category")}
            />
          </div>
        </th>

        <th className="px-6 py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            Company
            <IconSelector
              size={16}
              className="text-gray-400 hover:text-black"
              onClick={() => requestSort("company_name")}
            />
          </div>
        </th>

        <th className="px-6 py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            Warranty
            <IconSelector
              size={16}
              className="text-gray-400 hover:text-black"
              onClick={() => requestSort("warranty_date")}
            />
          </div>
        </th>

        <th className="px-6 py-4">
          <div className="flex items-center gap-2 cursor-pointer">
            Status
            <IconSelector
              size={16}
              className="text-gray-400 hover:text-black"
              onClick={() => requestSort("status")}
            />
          </div>
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-100">
      {filteredData.map((data) => (
        <tr
          key={data.id}
          className="hover:bg-gray-50 text-sm"
        >
          <td className="px-6 py-4 font-medium text-gray-900">
            {data.product_name}
          </td>

          <td className="px-6 py-4 text-gray-600 capitalize">
            {data.category}
          </td>

          <td className="px-6 py-4 text-gray-600 capitalize">
            {data.company_name}
          </td>

          <td className="px-6 py-4 text-gray-600">
            {data.warranty_date}
          </td>

          <td className="px-6 py-4">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                ${
                  data.status === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }
              `}
            >
              {data.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </Container>
    </div>
  )
}

export default DataTable
