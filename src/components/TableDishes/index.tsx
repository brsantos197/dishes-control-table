'use client'
import { BsPrinter } from "react-icons/bs";
import { Button } from "../Button";

interface TableDishesProps {}

export const TableDishes = ({}: TableDishesProps) => {

  const mainHallTables = Array(18).fill(0).map((_, index ) => index + 1)
  const backHallTables = Array(6).fill(0).map((_, index ) => index + 20)

  const allTables = [...mainHallTables, ...backHallTables]

  const printTable = () => {
    window.print()
  }

  return (
    <>
      <Button className='mb-2 ml-auto' onClick={printTable}>
        <BsPrinter />
        Imprimir
      </Button>
      <table className="border-collapse border border-zinc-950 font-normal table-fixed">
        <thead className="text-2xl">
          <tr>
            <th>Prato</th>
            <th>Mesas</th>
            <th>Garçom</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          {Array(7).fill(0).map((_, index ) => (
            <tr key={index}>
              <td></td>
              <td>
                <div className="grid grid-cols-12 p-4 gap-6">
                  {allTables.map(table => (
                    <label key={table} className="flex flex-col items-center gap-1">
                      {String(table).padStart(2, '0')}
                      <input type="checkbox" />
                    </label>
                  ))}
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}