import { fetchFilteredCustomers } from "@/app/lib/data";
import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";

export default async function Page() {
  const customers = await fetchFilteredCustomers("")
  return (
    <main>
      <CustomersTable customers={customers}></CustomersTable>
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Customers',
};