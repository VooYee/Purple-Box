"use client"

import { ColumnDef } from "@tanstack/react-table"

// Columns for Table 1
export type CompanyData = {
  name: string
  companyName: string
  website: string
}

export const companyColumns: ColumnDef<CompanyData>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
  },
  {
    accessorKey: "website",
    header: "Website",
  },
]

// Columns for Table 2
export type ContactData = {
  name: string
  email: string
  phone: string
  date: Date
}

export const contactColumns: ColumnDef<ContactData>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => new Date(getValue() as string).toLocaleDateString(),
  },
]