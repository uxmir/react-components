"use client";
import React, { useRef, useState } from "react";
import Container from "../Container/Container";
import { IconPrinter } from "@tabler/icons-react";
interface tableData {
  id: number;
  product_name: string;
  category: string;
  company_name: string;
  warranty_date: string;
  status: string;
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
  },
];

const PrintingTable: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handlePrint = (id: number) => {
    setSelectedId(id);
    setTimeout(() => {
      window.print();
    }, 500);
  };
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      @media print {
        body * {
          visibility: hidden;
        }
        #printable-invoice, #printable-invoice * {
          visibility: visible;
        }
        #printable-invoice {
          position: absolute;
          left: 0;
          top: 0;
          display: block !important;
        }
      }
    `,
        }}
      />
      <div className="mt-10">
        <Container>
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full ">
              <thead className="bg-gray-50">
                <tr className="text-left text-sm font-semibold text-gray-600">
                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Product Name
                    </div>
                  </th>

                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Category
                    </div>
                  </th>

                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Company Name
                    </div>
                  </th>

                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Warranty Date
                    </div>
                  </th>

                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Status
                    </div>
                  </th>

                  <th className="px-6 py-4">
                    <div className="flex items-center gap-2 cursor-pointer">
                      Actions
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {productData?.map((data) => (
                  <tr key={data.id} className="hover:bg-gray-50 text-sm">
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
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium cursor-pointer
              `}
                      >
                        <IconPrinter
                          onClick={() => handlePrint(data.id)}
                          className="text-blue-600"
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>
      {/*========invoice====== */}
      <div id="printable-invoice" style={{ display: `none` }}>
        {(() => {
          const printedData = productData?.find((p) => p.id === selectedId);
          if (!printedData) return null;
          {
            return (
              <div className="p-10 bg-white text-black min-h-screen">
                {/* Header Section */}
                <div className="flex justify-between items-start border-b-2 border-gray-800 pb-5">
                  <div>
                    <h1 className="text-4xl font-bold uppercase tracking-wider text-gray-800">
                      Invoice
                    </h1>
                    <p className="text-sm mt-1">
                      Order ID: #000{printedData.id}
                    </p>
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-bold text-blue-600 uppercase">
                      {printedData.company_name}
                    </h2>
                    <p className="text-xs text-gray-500">
                      Official Product Warranty Document
                    </p>
                  </div>
                </div>

                {/* Info Section */}
                <div className="my-10 grid grid-cols-2 gap-10">
                  <div>
                    <p className="text-xs uppercase font-bold text-gray-400">
                      Bill To:
                    </p>
                    <p className="text-lg font-semibold mt-1">Customer Name</p>
                    <p className="text-sm text-gray-600 italic">
                      Verified Purchase
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase font-bold text-gray-400">
                      Date of Print:
                    </p>
                    <p className="text-sm font-medium">
                      {new Date().toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Product Table */}
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-800 text-white">
                      <th className="py-3 px-4 text-left text-sm uppercase">
                        Product Name
                      </th>
                      <th className="py-3 px-4 text-center text-sm uppercase">
                        Category
                      </th>
                      <th className="py-3 px-4 text-right text-sm uppercase">
                        Warranty Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 text-lg font-medium">
                        {printedData.product_name}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-600 capitalize">
                        {printedData.category}
                      </td>
                      <td className="py-4 px-4 text-right font-mono text-red-600">
                        {printedData.warranty_date}
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Status & Footer */}
                <div className="mt-20 flex justify-between items-center">
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-xs font-bold uppercase text-gray-400">
                      Product Status
                    </p>
                    <p
                      className={`text-xl font-bold  capitalize ${printedData?.status === "available" ? "text-green-700" : "text-red-700"}`}
                    >
                      {printedData.status}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-40 border-b border-gray-400 mb-2"></div>
                    <p className="text-xs text-gray-500 italic uppercase">
                      Authorized Signature
                    </p>
                  </div>
                </div>

                <div className="mt-16 text-center text-[10px] text-gray-400 uppercase tracking-widest border-t pt-5">
                  Thank you for your business. Terms and conditions apply for
                  warranty claims.
                </div>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default PrintingTable;
