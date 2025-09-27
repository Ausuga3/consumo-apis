export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;        // ✅ Solo la ciudad del address
  companyName: string; // ✅ Solo el nombre de la company
}

export interface UserApiResponse{
     id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    }
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}