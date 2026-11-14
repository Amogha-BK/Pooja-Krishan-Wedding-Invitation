export type Celebration = {
  id: "pre-wedding" | "wedding" | "reception";
  shortName: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  schedule: { name: string; time: string }[];
  venue: string;
  address: string;
  supportingLine: string;
  start: string;
  calendarTitle: string;
  image: string;
  scene: "lanterns" | "fire" | "candlelight";
  mapUrl: string;
};

const maps = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const weddingVenue = {
  name: "Punjabi Bhawan",
  address: "2752, Sector 16 Road, Canal Colony, Sector 16A, Faridabad – 121002",
};
const receptionVenue = {
  name: "Khushi Garden",
  address: "Sajipur Road, Jeevan Nagar, Sector 87, Neharpar, Faridabad, Haryana – 121014",
};
const homeAddress = "House No. 37, Lakhpat Colony, Meethapur Extension, New Delhi – 110044";
const groomParents = "Son of Mrs. Sushila Yadav & Mr. Jai Kumar Yadav";
const brideParents = "Daughter of Mrs. Madhu & Mr. Mukesh Kumar Bansal";

export const invitationConfig = {
  couple: {
    first: "Krishan",
    second: "Pooja",
    firstParents: groomParents,
    secondParents: brideParents,
    brideParents,
    groomParents,
    groomGrandparents: "Grandson of the late Mrs. Shyam Dulari Yadav & the late Mr. Rajdev Yadav",
    groomAddress: homeAddress,
    brideAddress: "Tigri, Khanpur, New Delhi",
  },
  dateLabel: "3 December 2026",
  locationLabel: "Faridabad",
  weddingLabel: "Thursday, 3 December 2026 · Faridabad",
  countdownTarget: "2026-12-03T00:00:00+05:30",
  invocation: "॥ श्री गणेशाय नमः ॥",
  ganeshMantra: ["ॐ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभः ।", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"],
  openingBlessing:
    "May Lord Vishnu, the bearer of Garuda’s banner and the lotus-eyed Lord, bless this union with happiness and good fortune.",
  programmeBlessing:
    "O Lord Ganesha, of the curved trunk and mighty form, radiant as a million suns, please remove all obstacles from our endeavours, always.",
  memorialLine: "With the infinite grace of the Almighty",
  invitationLine:
    "Mr. Bal Govind Yadav cordially invites you to celebrate the wedding of his nephew’s beloved son, Krishan, with Pooja.",
  blessingLine:
    "Please join us for the celebrations and bless the bride and groom with your gracious presence.",
  homeAddress,
  hosts: "Mr. Jai Kumar Yadav",
  rsvp: "Mr. Bal Govind Yadav",
  wishesFrom: ["Dharmendra Yadav", "Jai Kumar Yadav", "Mahendra Yadav"],
  welcomingFamily: [
    "Gulab Yadav",
    "Sanjay Yadav",
    "Ratnesh Yadav",
    "Sachin Yadav",
    "Ankit Yadav",
    "Shivam",
    "Balaji",
    "Sumit",
    "Nitesh",
    "Mohan",
    "Pratik",
    "Akshit",
    "Kiyansh",
  ],
  children: "Aditya & Vidan",
  childrenMessage:
    "With turmeric, sandalwood and the bonds of family, we warmly welcome you to our uncle’s wedding!",
  monogram: "/assets/krishan-pooja-monogram-360.png",
  artwork: "/assets/kishan-pooja-garden-v2.jpg",
  venue: { ...weddingVenue, mapUrl: maps(`${weddingVenue.name}, ${weddingVenue.address}`) },
  reception: {
    ...receptionVenue,
    mapUrl: maps(`${receptionVenue.name}, ${receptionVenue.address}`),
  },
  contacts: ["8588990124", "9783880485"],
  optional: {
    travel: "",
    stay: "",
    contact: "",
    musicUrl: "/assets/kudmayi.mp3",
    whatsappHostNumber: "",
  },
  celebrations: [
    {
      id: "pre-wedding",
      shortName: "Haldi & Mehndi",
      title: "Pre-wedding — A Joyful Beginning",
      dateLabel: "Wednesday, 2 December 2026",
      timeLabel: "11:00 am & 4:00 pm",
      schedule: [
        { name: "Haldi ceremony", time: "11:00 am" },
        { name: "Mehndi ceremony", time: "4:00 pm" },
      ],
      venue: receptionVenue.name,
      address: receptionVenue.address,
      supportingLine: "A golden glow, henna-filled hands and the warmth of family.",
      start: "2026-12-02T11:00:00+05:30",
      calendarTitle: "Krishan & Pooja · Pre-wedding Celebrations",
      image: "/assets/kishan-pooja-turmeric-henna-arch-v3.jpg",
      scene: "lanterns",
      mapUrl: "https://maps.app.goo.gl/JfQ5aTCrTy4dEvK89?g_st=awb",
    },
    {
      id: "wedding",
      shortName: "The Wedding",
      title: "Wedding — A Promise of Forever",
      dateLabel: "Thursday, 3 December 2026",
      timeLabel: "Procession departs at 7:00 p.m.",
      schedule: [
        { name: "Groom’s ceremonial horse ride", time: "5:00 p.m." },
        { name: "Wedding procession departure", time: "7:00 p.m." },
      ],
      venue: weddingVenue.name,
      address: weddingVenue.address,
      supportingLine: "Sacred vows, two hearts and a lifetime of togetherness.",
      start: "2026-12-03T17:00:00+05:30",
      calendarTitle: "Krishan & Pooja · Wedding Celebrations",
      image: "/assets/kishan-pooja-wedding-arch-v3.jpg",
      scene: "fire",
      mapUrl: maps(`${weddingVenue.name}, ${weddingVenue.address}`),
    },
    {
      id: "reception",
      shortName: "The Reception",
      title: "Reception — An Evening of Togetherness",
      dateLabel: "Sunday, 6 December 2026",
      timeLabel: "7:00 p.m.",
      schedule: [{ name: "Wedding reception", time: "7:00 p.m." }],
      venue: receptionVenue.name,
      address: receptionVenue.address,
      supportingLine: "Join us for an evening of love, laughter and celebration.",
      start: "2026-12-06T19:00:00+05:30",
      calendarTitle: "Krishan & Pooja · Reception",
      image: "/assets/kishan-pooja-reception-arch-v3.jpg",
      scene: "candlelight",
      mapUrl: maps(`${receptionVenue.name}, ${receptionVenue.address}`),
    },
  ] satisfies Celebration[],
  calendar: { timezone: "Asia/Kolkata" },
} as const;
