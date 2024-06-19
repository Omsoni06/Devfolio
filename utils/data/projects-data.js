import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "PDFGenie",
    description:
      "Developed a SAAS AI platform enabling users to upload PDF files and submit questions via input. Implemented functionality to generate responses to user questions based on the content of the uploaded PDF. Implemented tiered user system: free users upload 4MB/5-page PDFs, premium users upload 16MB/25-page PDFs.",
    tools: [
      "Next.js 14",
      "TypeScript",
      "OpenAI API",
      "Tailwind Css",
      "React.js",
      "TRPc",
      "Stripe",
      "KindeAuth",
      "Uploadthing",
    ],
    role: "Full Stack Developer ",
    code: "",
    demo: "https://pdfgenie-g7n2.vercel.app/",
    image: crefin.jpg,
  },
  {
    id: 2,
    name: "Coin MarketMeter",
    description: `• Crypto tracker website that show’s crypto currency price and historical chart according to market-cap
      • Used Firebase for authenticaion , user can login & signup , add coins to wathchList
      • Achieved 99.9% data uptime by integrating CoinGecko API to fetch live crypto updates`,
    tools: [
      "ReactJS",
      "Material-UI",
      "ChartJS",
      "Firebase",
      "CoinGeko API",
      "JavaScript",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://coinmarketmeter.netlify.app/",
    image: travel,
  },
  {
    id: 3,
    name: "Giphy",
    description: `• Developed Tars AI, a chatbot using OpenAI API for text-based content generation.
      • Achieved a 95% accurate response rate using the text Davinci-003 model.
      • Utilized VITE for a 2x faster development process and built the server using Express.js and Node.js.`,
    tools: ["React", "Tailwind CSs", "Javascript", "React router"],
    code: "",
    role: "FrontEnd",
    demo: "https://giphy-six-bice.vercel.app/",
    image: realEstate,
  },
  {
    id: 4,
    name: "Tars AI",
    description: `• Developed Tars AI, a chatbot using OpenAI API for text-based content generation.
      • Achieved a 95% accurate response rate using the text Davinci-003 model.
      • Utilized VITE for a 2x faster development process and built the server using Express.js and Node.js.`,
    tools: [
      "React",
      "Bootstrap",
      "Vanilla Javascript",
      "NodeJS",
      "Express",
      "OpenAI API",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "https://tars-ai-git-main-omsoni06.vercel.app/",
    image: realEstate,
  },
  //   {
  //     id: 4,
  //     name: "",
  //     description: "",
  //     tools: [],
  //     code: "",
  //     demo: "",
  //     image: ayla,
  //     role: "",
  //   },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
