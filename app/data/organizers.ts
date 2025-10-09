export type OrganizerRole =
  | "director"
  | "logistics"
  | "marketing"
  | "tech"
  | "finance";

export type Organizer = {
  name: string;
  role: string;
  team: OrganizerRole;
  image?: string;
  linkedin?: string;
};

export const organizers: Organizer[] = [
  {
    name: "Audrey Tai",
    role: "director",
    team: "director",
    linkedin: "https://www.linkedin.com/in/audrey-tai-6737b235b/",
  },

  {
    name: "Caden Ang",
    role: "logistics lead",
    team: "logistics",
    linkedin: "https://www.linkedin.com/in/caden-ang/",
  },
  {
    name: "Lakshya Saini",
    role: "logistics",
    team: "logistics",
    linkedin: "https://www.linkedin.com/in/lakshya09/",
  },
  {
    name: "Enzo Emami",
    role: "logistics",
    team: "logistics",
    linkedin: "https://www.linkedin.com/in/enzo-e-b515a1251/",
  },
  {
    name: "Fiona Chang",
    role: "logistics",
    team: "logistics",
    linkedin: "https://www.linkedin.com/in/hsinwei-chang-503606308/",
  },
  {
    name: "Tuan Tran",
    role: "logistics",
    team: "logistics",
    linkedin: "https://www.linkedin.com/in/tuan-tran-52ba7b255/",
  },

  {
    name: "Thu Tran",
    role: "marketing lead",
    team: "marketing",
    linkedin: "https://www.linkedin.com/in/thu-tran-a49559380/",
  },
  {
    name: "Ella Yang",
    role: "marketing",
    team: "marketing",
    linkedin: "https://www.linkedin.com/in/ivan-yang-5751aa346/",
  },
  {
    name: "Lin Nguyen",
    role: "marketing",
    team: "marketing",
    linkedin: "https://www.linkedin.com/in/melinda-nguyen-50590b27a/",
  },
  {
    name: "Leyan Naboulsi",
    role: "marketing",
    team: "marketing",
    linkedin: "https://www.linkedin.com/in/leyann/",
  },
  { name: "Dominique Luzon", role: "marketing", team: "marketing" },
  { name: "Lauren Le", role: "marketing", team: "marketing" },

  {
    name: "Benjamin Lee",
    role: "tech lead",
    team: "tech",
    linkedin: "https://www.linkedin.com/in/benjamin-lee-52608632b/",
  },
  {
    name: "Michael Garia",
    role: "tech",
    team: "tech",
    linkedin: "https://www.linkedin.com/in/michael-g-5457ba2b7/",
  },
  {
    name: "Inky Ganbold",
    role: "tech",
    team: "tech",
    linkedin: "https://www.linkedin.com/in/enkhbold470/",
  },

  {
    name: "Alan Ma",
    role: "finance lead",
    team: "finance",
    linkedin: "https://www.linkedin.com/in/alan-ma-25bbba1ba/",
  },
  {
    name: "Toma Yuen",
    role: "finance",
    team: "finance",
    linkedin: "https://www.linkedin.com/in/toma-yuen-777482290/",
  },
  {
    name: "Arya Somu",
    role: "finance",
    team: "finance",
    linkedin: "https://www.linkedin.com/in/aryasomu/",
  },
  { name: "Iker Amox Jimenez", role: "finance", team: "finance" },
];

export const teamLabels: Record<OrganizerRole, string> = {
  director: "director",
  logistics: "logistics",
  marketing: "marketing",
  tech: "tech",
  finance: "finance",
};

export const organizersByTeam = organizers.reduce(
  (acc, org) => {
    if (!acc[org.team]) {
      acc[org.team] = [];
    }

    acc[org.team].push(org);

    return acc;
  },
  {} as Record<OrganizerRole, Organizer[]>
);
