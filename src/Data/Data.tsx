// //Data.tsx
// // List of companies to be displayed in a marquee
// export const companies: string[] = [
//     "amazon",
//     "deliveroo",
//     "google",
//     "hyland",
//     "microsoft",
//     "netflix",
//     "persistent",
//     "salesforce",
//     "swiggy",
//     "zepto",
//   ];
  
// // Utility function to generate image paths
// export const getCompanyImagePath = (company: string): string =>
//     `/companies/${company}.png`;

// export const category: string[] = [
//   "Software Engineer",
//   "Data Entry",
//   "Hr",
//   "Digital Marketing",
//   "Graphics Designer"
// ];



// export const name: string[] = [
//   "Software Engineer",
//   "Data Entry",
//   "Sales",
//   "Digital Marketing",
//   "Graphics Designer"
// ];

// Data.tsx

// List of companies to be displayed in a marquee
export const companies: string[] = [
  "amazon",
  "deliveroo",
  "google",
  "hyland",
  "microsoft",
  "netflix",
  "persistent",
  "salesforce",
  "swiggy",
  "zepto",
];

// Utility function to generate image paths for companies
export const getCompanyImagePath = (company: string): string =>
  `/companies/${company}.png`;

// Updated category array with detailed structure
export const category = [
  {
    name: "Software Engineer",
    desc: "Build and maintain scalable software solutions.",
    jobs: 150,
  },
  {
    name: "Data Entry",
    desc: "Accurate and efficient data management tasks.",
    jobs: 80,
  },
  {
    name: "HR",
    desc: "Streamlining recruitment and managing talent.",
    jobs: 60,
  },
  {
    name: "Digital Marketing",
    desc: "Drive online growth with strategic campaigns.",
    jobs: 70,
  },
  {
    name: "Graphics Designer",
    desc: "Create visually appealing designs and branding.",
    jobs: 50,
  },
];

// Utility function to generate image paths for categories
export const getCategoryImagePath = (category: string): string =>
  `/category/${category}.png`;

// List of category names for other purposes (optional)
export const name: string[] = category.map((c) => c.name);
