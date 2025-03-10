"use client";

import React from "react";

interface Action {
  label: string;
  onClick: (item: any) => void;
  icon?: JSX.Element;
}

interface TableProps {
  headers: string[];
  data: any[];
  actions?: Action[];
}

export const TableProducts = ({ headers, data, actions }: TableProps) => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-[#f3c176] uppercase bg-marron-principal">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
            {actions && (
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white border-b hover:bg-gray-200">
              <td className="px-6 py-4">{row.id}</td>
              <td className="px-6 py-4">{row.nombre}</td>
              <td className="px-6 py-4">{row.precio_lista}</td>
              <td className="px-6 py-4">{row.precio_mayorista}</td>
              <td className="px-6 py-4">{row.cantidad_disponible}</td>

              {actions && (
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.onClick(row)}
                        className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 transition-colors duration-300 py-2 px-4 rounded"
                      >
                        {action.icon}
                        <span>{action.label}</span>
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
