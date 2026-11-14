export type Celebration = {
  id: "lagan" | "pre-wedding" | "wedding";
  shortName: string;
  title: string;
  dateLabel: string;
  timeLabel: string;
  schedule: { name: string; time: string; dateLabel?: string; date?: string }[];
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
const homeAddress = "Tigri, Khanpur, New Delhi";
const groomParents = "Son of Mrs. Sushila Yadav & Mr. Jai Kumar Yadav";
const brideParents = "Daughter of Mrs. Madhu & Mr. Mukesh Kumar Bansal";

export const invitationConfig = {
  couple: {
    first: "Pooja",
    second: "Krishan",
    firstParents: brideParents,
    secondParents: groomParents,
    brideParents,
    groomParents,
    groomGrandparents: "Grandson of the late Mrs. Shyam Dulari Yadav & the late Mr. Rajdev Yadav",
    groomAddress: "House No. 37, Lakhpat Colony, Meethapur Extension, New Delhi – 110044",
    brideAddress: homeAddress,
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
    "Mrs. Madhu & Mr. Mukesh Kumar Bansal cordially invite you to celebrate the wedding of their beloved daughter, Pooja, with Krishan.",
  blessingLine:
    "Please join us for the celebrations and bless the bride and groom with your gracious presence.",
  homeAddress,
  hosts: "Mrs. Madhu & Mr. Mukesh Kumar Bansal and family",
  monogram: "/assets/pooja-krishan-monogram.png",
  artwork: "/assets/kishan-pooja-garden-v2.jpg",
  venue: { ...weddingVenue, mapUrl: maps(`${weddingVenue.name}, ${weddingVenue.address}`) },
  contacts: [] as string[],
  optional: {
    travel: "",
    stay: "",
    contact: "",
    musicUrl: "/assets/gaura-shiv-updated.mp3",
    whatsappHostNumber: "",
  },
  celebrations: [
    {
      id: "lagan",
      shortName: "Lagan",
      title: "Lagan — The Celebrations Begin",
      dateLabel: "Tuesday, 1 December 2026",
      timeLabel: "10:00 AM",
      schedule: [{ name: "Lagan", time: "10:00 AM" }],
      venue: "",
      address: "",
      supportingLine: "A beautiful beginning, with the blessings of our loved ones.",
      start: "2026-12-01T10:00:00+05:30",
      calendarTitle: "Pooja & Krishan · Lagan",
      image: "/assets/pooja-krishan-lagan-arch.jpg",
      scene: "lanterns",
      mapUrl: "",
    },
    {
      id: "pre-wedding",
      shortName: "Haldi, Mehendi & Chaak",
      title: "Pre-wedding — A Joyful Beginning",
      dateLabel: "Wednesday, 2 December 2026",
      timeLabel: "9:00 AM, 12:00 PM & 2:00 PM",
      schedule: [
        { name: "Haldi", time: "9:00 AM" },
        { name: "Mehendi", time: "12:00 PM" },
        { name: "Chaak", time: "2:00 PM" },
      ],
      venue: "Bride’s Home",
      address: homeAddress,
      supportingLine: "A golden glow, henna-filled hands and the warmth of family.",
      start: "2026-12-02T09:00:00+05:30",
      calendarTitle: "Pooja & Krishan · Pre-wedding Celebrations",
      image: "/assets/kishan-pooja-turmeric-henna-arch-v3.jpg",
      scene: "lanterns",
      mapUrl: "https://maps.app.goo.gl/zoZ5BZqFUMimqNde9?g_st=aw",
    },
    {
      id: "wedding",
      shortName: "The Wedding",
      title: "Wedding — A Promise of Forever",
      dateLabel: "Thursday, 3 December 2026",
      timeLabel: "Dinner at 8:00 PM · Welcome of Baraat at 9:00 PM",
      schedule: [
        { name: "Bhaat", time: "10:00 AM" },
        { name: "Dinner", time: "8:00 PM" },
        { name: "Welcome of Baraat", time: "9:00 PM" },
        {
          name: "Vidaai",
          time: "Under the stars",
          dateLabel: "Friday, 4 December 2026",
          date: "2026-12-04",
        },
      ],
      venue: weddingVenue.name,
      address: weddingVenue.address,
      supportingLine: "Sacred vows, two hearts and a lifetime of togetherness.",
      start: "2026-12-03T10:00:00+05:30",
      calendarTitle: "Pooja & Krishan · Wedding Celebrations",
      image: "/assets/kishan-pooja-wedding-arch-v3.jpg",
      scene: "fire",
      mapUrl: maps(`${weddingVenue.name}, ${weddingVenue.address}`),
    },
  ] satisfies Celebration[],
  calendar: { timezone: "Asia/Kolkata" },
} as const;
