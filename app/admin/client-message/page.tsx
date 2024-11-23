import { companyColumns, contactColumns } from "./columns"
import { DataTable } from "./data-table"

async function getCompanyData(): Promise<{ name: string; companyName: string; website: string }[]> {
  return [
    { name: "John Doe", companyName: "Tech Innovators", website: "https://techinnovators.com" },
    { name: "Jane Smith", companyName: "Green Future Corp", website: "https://greenfuture.com" },
    { name: "Emily Davis", companyName: "EduLearn Inc", website: "https://edulearn.com" },
    { name: "Michael Brown", companyName: "Finance Pros", website: "https://financepros.com" },
    { name: "Sophia Wilson", companyName: "Health First", website: "https://healthfirst.com" },
  ]
}

async function getContactData(): Promise<{ name: string; email: string; phone: string; date: Date }[]> {
  return [
    { name: "Alice Johnson", email: "alice@example.com", phone: "123-456-7890", date: new Date() },
    { name: "Bob Anderson", email: "bob@example.com", phone: "987-654-3210", date: new Date() },
    { name: "Carol White", email: "carol@example.com", phone: "555-666-7777", date: new Date() },
    { name: "Dave Green", email: "dave@example.com", phone: "444-333-2222", date: new Date() },
  ]
}

export default async function DemoPage() {
  const companyData = await getCompanyData()
  const contactData = await getContactData()

  return (
    <div className="bg-[#1a0730] flex flex-col items-start gap-y-8 mt-[80px]">
      <div className="w-full table-wrapper space-y-2">
        <h2 className="text-lg font-bold text-white font-gotham">Client Contact</h2>
        <DataTable columns={companyColumns} data={companyData} />
      </div>
      <div className="w-full table-wrapper space-y-2">
        <h2 className="text-lg font-bold text-white font-gotham">Demo Schedule</h2>
        <DataTable columns={contactColumns} data={contactData} />
      </div>
    </div>
  )
}
