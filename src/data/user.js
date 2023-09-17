const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/BookmDan",
    linkedin: "https://www.linkedin.com/in/-danieloh-/",
  },
  projects: [
    {
      id: 1,
      name: "EmoteShiba",
      about: "A 3x3 grid of shiba images that you can double click to like, and highlight when hovering over images",
      technologies: ["JS", "HTML", "CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tinder for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["React", "Redux", "Rails"],
    },
  ],
};

export default user;
