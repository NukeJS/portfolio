export default defineEventHandler((event) => {
  return [
    {
      type: "internship",
      title: "Front-end Developer",
      company: {
        name: "Prophyta",
        url: null,
      },
      place: "Scheemda, The Netherlands",
      timespan: "Sep. 2020 - Feb. 2021",
    },
    {
      type: "internship",
      title: "Full-stack Developer",
      company: {
        name: "Script",
        url: "https://www.linkedin.com/company/script-ict/",
      },
      place: "Groningen, The Netherlands",
      timespan: "Feb. 2022 - Jul. 2022",
    },
  ];
});
