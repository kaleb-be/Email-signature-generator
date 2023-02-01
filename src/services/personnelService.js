const personnel = [
  {
    // _id: "RT0000000015NG",
    name: "Kaleb Besufikad",
    title: "Junior UI/UX Design Intern",
    department: "Electronic and Data Infrastructure Department",
    address:
      "28, Suite 8, Ogundare Street, Off 5th Avenue Road\nJakande Estate, Abesan, Lagos, Nigeria. 234-102213",
    telephone: "+251939428406",
    email: "kworkalemahu@ohmswich.com",
    imageUrl: null,
    headshotPreview: null,
    greeting: "Sincerely",
    facebook: "Ohmswich",
    twitter: "ohmswich",
    linkedin: "ohmswich",
    telegram: "ohmswich",
    copied: false,
  },
  {
    // _id: "",
    name: "",
    title: "",
    department: "",
    telephone: "",
    address: "",
    email: "",
    imageUrl: null,
    headshotPreview: null,
    greeting: "Sincerely",
    facebook: "Ohmswich",
    twitter: "ohmswich",
    linkedin: "ohmswich",
    telegram: "ohmswich",
    copied: false,
  },
];

export function getAllPersonnel() {
  return personnel[0];
}
export function getemptyPersonnel() {
  return personnel[1];
}

export function getPersonnel(_id) {
  return personnel.find((person) => person._id === _id);
}

export function newPersonnel(newPersonnel) {
  let personnelInDB =
    personnel.find((person) => person._id === newPersonnel._id) || {};
  personnelInDB._id = newPersonnel._id;
  personnelInDB.telephone = newPersonnel.telephone;
  personnelInDB.email = newPersonnel.email;
  personnelInDB.office = newPersonnel.office;
  if (!personnelInDB._id) {
  }
}
