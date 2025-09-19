export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Company {
  name: string
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: Company
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}