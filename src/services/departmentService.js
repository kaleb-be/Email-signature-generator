const department = [
  {
    // _id: "EDID-CIMO",
    name: "Electronic and Data Infrastructure Department",
    office: "Data Management Office",
    telephone: "+2447829198273",
    email: "isesise@ohmswich.com",
    address: " The Pent Room, 39 Filey Road, RG1 3QG, UK",
    motto: "Developing upcoming personnel",
    facebook: "Ohmswich",
    twitter: "ohmswich",
    linkedin: "ohmswich",
    copied: false,
  },
  {
    // _id: "",
    name: "",
    office: "",
    telephone: "",
    email: "",
    address: "",
    motto: "",
    facebook: "Ohmswich",
    twitter: "ohmswich",
    linkedin: "ohmswich",
    copied: false,
  },
  {
    // _id: "",
    name: false,
    office: false,
    telephone: false,
    email: false,
    address: false,
    motto: false,
    facebook: false,
    twitter: false,
    linkedin: false,
    copied: false,
  },
];

export function getDepartments() {
  return department[0];
}
export function getDepartmentsSample() {
  return department[3];
}
export function getemptyDepartments() {
  return department[1];
}

export function getDepartment(name) {
  return department.find((dept) => dept.name === name);
}

export function newDepartment(newDepartment) {
  let departmentInDB =
    department.find((dept) => dept.name === newDepartment.name) || {};
  departmentInDB.name = newDepartment.name;
  departmentInDB.telephone = newDepartment.telephone;
  departmentInDB.email = newDepartment.email;
  departmentInDB.office = newDepartment.office;
  if (!departmentInDB.name) {
  }
}
export let departmentList = [
  "Electronic and Data Infrastructure Department",
  "Personnel Affairs Department",
  "Accounting and Financial Services Department",
  "Business and Information Services Department",
  "Country and Language Services Department",
];

export function colorGenerator() {
  // const color = rand(255, 255, 255);
  // console.log(color);
}
