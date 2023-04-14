import React from "react";
import { useGetOrdersQuery } from "../../app/apiSlice";

const Admin = () => {
  const { data } = useGetOrdersQuery();

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-white">
          <thead class="text-xs  uppercase text-primary bg-black ">
            <tr>
              <th scope="col" class="px-6 py-3">
                Client
              </th>
              <th scope="col" class="px-6 py-3">
                Plats
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Numero
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((order) => (
              <tr class=" border-b bg-gray-900 border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-primary whitespace-nowrap "
                >
                  {order.name}
                </th>
                <td class="px-6 py-4">{order.message}</td>
                <td class="px-6 py-4">{order.address}</td>
                <td class="px-6 py-4"> {order.telnum} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
