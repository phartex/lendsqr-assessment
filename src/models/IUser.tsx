export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    organisation: string;
    dateJoined: string;
    status: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    typeOfResidence: string;
    levelOfEducation: string;
    employmentStatus: string;
    sectorOfEmployment: string;
    durationOfEmployment: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
    twitter: string;
    facebook: string;
    instagram: string;
    guarantor: {
      fullName: string;
      phoneNumber: string;
      email: string;
      relationship: string;
    };
  }