import React from "react";

const App = () => {
  return (
    <div className=" bg-gray-200 min-h-screen">
      <div className=" bg-blue-800 w-full h-24 items-center justify-center flex">
        <div className=" flex flex-row justify-between items-center gap-32">
          <div>
            <h1 className=" font-bold text-4xl text-white p-4">
              Medical Invoice
            </h1>
          </div>

          <div className=" flex items-center flex-col text-white">
            <p className=" text-sm">Invoice Number</p>
            <p className=" text-sm">Order Date</p>
          </div>

          <div className=" flex items-center flex-col text-white">
            <p className=" text-sm">INV-67575</p>
            <p className=" text-sm">June 18, 2020</p>
          </div>
        </div>
      </div>

      <div className=" bg-white h-fit m-3 px-8 p-6">
        <div className=" flex flex-row items-center justify-between">
          <div className=" items-center justify-center flex gap-36">
            <div>
              <div className=" bg-blue-50 p-2 rounded-md">
                <h3 className=" text-xl font-semibold">Patient Information</h3>
              </div>
              <p className=" mt-3">Angela Ping</p>
              <p className="mt-4">(555) 555-555</p>
              <p className="mt-4">Rosewood Lanesample11, Happy Village</p>
              <p>New York, Ny, 433545</p>
              <p>United States</p>
            </div>
            {/* second */}

            <div className=" -mt-24">
              <div className=" bg-blue-50 p-2 rounded-md">
                <h3 className=" text-xl font-semibold">
                  Prescribing Physicians Information
                </h3>
              </div>
              <p className=" mt-3"> Richard Glenn</p>
              <p className="mt-4">(555) 555-555</p>
            </div>
          </div>
        </div>

        <div className=" w-full h-0.5 bg-gray-400 mt-12"></div>
        <h1 className=" font-bold text-3xl text-gray-600">
          Medical Equipment/Supply
        </h1>

     
        <div className=" flex ">
          {/* numbers */}
          <div className=" flex flex-col ">
            <div className="bg-blue-100 w-12 h-[44px] mt-[22px] ">
              <span></span>
            </div>
            <div className="bg-blue-100  h-12 pt-2 text-center ">
              <span className=" ">1</span>
            </div>

            <div className="bg-blue-100  h-12 pt-2 text-center   ">
              <span className="  ">2</span>
            </div>
            <div className="bg-blue-100 pt-2 text-center h-12   ">
              <span className="  ">3</span>
            </div>
            <div className="bg-blue-100  h-12 pt-2 text-center  ">
              <span className="  ">4</span>
            </div>
            <div className="bg-blue-100  h-12 pt-2 text-center  ">
              <span className="  ">5</span>
            </div>
            <div className="bg-blue-100  h-12 pt-2 text-center  ">
              <span className="  ">6</span>
            </div>
            <div className="bg-blue-100  h-12 pt-2 text-center  ">
              <span className="  ">7</span>
            </div>
          </div>
{/* table */}
          <table className="mt-6 table-auto w-full mb-6 border-collapse border  shadow-sm">
            <thead className="bg-blue-100 h-12">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700">
                  Description
                </th>
                <th className="px-4 py-2 text-left text-gray-700">Quantity</th>
                <th className="px-4 py-2 text-left text-gray-700">
                  Unit Price
                </th>
                <th className="px-4 py-2 text-left text-gray-700">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply1</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>
              <tr className="border-t border-gray-300 bg-gray-50">
                <td className="px-4 py-2 text-gray-600">Medical Supply2</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply3</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply3</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>

              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply4</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>

              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply5</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply6</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>
              <tr className="border-t border-gray-300">
                <td className="px-4 py-2 text-gray-600">Medical Supply7</td>
                <td className="px-4 py-2 text-gray-600">1</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
                <td className="px-4 py-2 text-gray-600">$10</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className=" w-full h-0.5 mb-12  bg-gray-400 mt-4"></div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center">
            <p className=" font-semibold text-xl">Payment Method</p>
            <div className=" bg-blue-50 w-16 p-2 ml-3">Cash</div>
          </div>

          <div  className=" flex items-center justify-between bg-blue-50 w-60 p-2">
<p className=" text-xl font-semibold">Total Amount</p>
<p>$226</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
