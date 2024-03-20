/**
 * Constants
 */

const Constants = {
  formats: ["pdf", "docx"],
  types: ["conic", "linear", "radial"],
  paddings: {
    "16px": "p-4",
    "32px": "p-8",
    "64px": "p-16",
    "128px": "p-32",
  },
  sizes: {
    Letter: { width: 1700, height: 2200 },
    Tabloid: { width: 2200, height: 3400 },
    Legal: { width: 1700, height: 2800 },
    Statement: { width: 1100, height: 1700 },
    Executive: { width: 1450, height: 2600 },
    Folio: { width: 1700, height: 2600 },
    A3: { width: 2339, height: 3306 },
    A4: { width: 1656, height: 2339 },
    A5: { width: 1164, height: 1656 },
    B4: { width: 1970, height: 2781 },
    B5: { width: 1387, height: 1970 },
  },
  samples: [],
};

export default Constants;
