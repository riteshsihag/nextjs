import { FormattedCustomersTable } from '@/app/lib/definitions';
import CustomersTable from '@/app/ui/customers/table';

const dummyCustomers: FormattedCustomersTable[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    image_url: '',
    total_invoices: 5,
    total_pending: '$500',
    total_paid: '$1500',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    image_url: '',
    total_invoices: 3,
    total_pending: '$300',
    total_paid: '$1200',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    image_url: '',
    total_invoices: 7,
    total_pending: '$700',
    total_paid: '$2000',
  },
  {
    id: '4',
    name: 'Bob Brown',
    email: 'bob@example.com',
    image_url: '',
    total_invoices: 2,
    total_pending: '$200',
    total_paid: '$800',
  },
  {
    id: '5',
    name: 'Emily Davis',
    email: 'emily@example.com',
    image_url: '',
    total_invoices: 4,
    total_pending: '$400',
    total_paid: '$1000',
  },
  {
    id: '6',
    name: 'Michael Wilson',
    email: 'michael@example.com',
    image_url: '',
    total_invoices: 9,
    total_pending: '$900',
    total_paid: '$2500',
  },
  {
    id: '7',
    name: 'Sophia Martinez',
    email: 'sophia@example.com',
    image_url: '',
    total_invoices: 6,
    total_pending: '$600',
    total_paid: '$1800',
  },
  {
    id: '8',
    name: 'William Taylor',
    email: 'william@example.com',
    image_url: '',
    total_invoices: 1,
    total_pending: '$100',
    total_paid: '$600',
  },
  {
    id: '9',
    name: 'Olivia Thomas',
    email: 'olivia@example.com',
    image_url: '',
    total_invoices: 8,
    total_pending: '$800',
    total_paid: '$2200',
  },
  {
    id: '10',
    name: 'James Anderson',
    email: 'james@example.com',
    image_url: '',
    total_invoices: 5,
    total_pending: '$500',
    total_paid: '$1500',
  },
];

export default function Page() {
  return <CustomersTable customers={dummyCustomers} />;
}
