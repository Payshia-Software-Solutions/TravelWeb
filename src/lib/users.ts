
export type User = {
  id: string;
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'Active' | 'Inactive' | 'Pending';
  joinedDate: string;
};

export const users: User[] = [
  {
    id: 'usr-001',
    avatar: 'https://placehold.co/100x100.png',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1-202-555-0104',
    address: '123 Main St, Anytown, USA',
    status: 'Active',
    joinedDate: '2023-01-15',
  },
  {
    id: 'usr-002',
    avatar: 'https://placehold.co/100x100.png',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1-202-555-0168',
    address: '456 Oak Ave, Somewhere, USA',
    status: 'Active',
    joinedDate: '2023-02-20',
  },
  {
    id: 'usr-003',
    avatar: 'https://placehold.co/100x100.png',
    name: 'Sam Wilson',
    email: 'sam.wilson@example.com',
    phone: '+1-202-555-0132',
    address: '789 Pine Ln, Elsewhere, USA',
    status: 'Inactive',
    joinedDate: '2023-03-10',
  },
  {
    id: 'usr-004',
    avatar: 'https://placehold.co/100x100.png',
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    phone: '+1-202-555-0187',
    address: '101 Maple Dr, Anycity, USA',
    status: 'Active',
    joinedDate: '2023-04-05',
  },
  {
    id: 'usr-005',
    avatar: 'https://placehold.co/100x100.png',
    name: 'Michael Johnson',
    email: 'michael.j@example.com',
    phone: '+1-202-555-0199',
    address: '212 Birch Rd, Someplace, USA',
    status: 'Pending',
    joinedDate: '2023-05-21',
  },
];
