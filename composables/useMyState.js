export const useMyState = () =>
  useState(() => [
    {
      id: 5,
      title: "Pizza Palace",
      link: "https://pizza-shop-little-italy.vercel.app/",
      shortDescription: "e-commerce site clone",
      description:
        "An e-commerce website inspired by the little italy template to explore the build process of e-commerce starting from scratch",
      features: ["Cart", "Table Booking"],
      technicalDetails: "Powered by Vue2, TailwindCss",
      image: "pizzapalace",
      screenshots: [
        "pizzapalace_sample1",
        "pizzapalace_sample2",
        "pizzapalace_sample3",
        "pizzapalace_sample4",
      ],
      client: "personal project",
      date: "June 2021",
      progress: 99,
    },
    {
      id: 1,
      title: "sheng dictionary",
      link: "https://play.google.com/store/apps/details?id=ke.derrick.shengdictionary",
      shortDescription: "keep up with sheng",
      description:
        "This application is powered by Android/Kotlin with Jetpack Compose. I worked on this to experiment with Android Work Manager, Infinite Lists & Paging3, Retrofit and Google Play Store Deployment",
      features: ["words", "idioms"],
      technicalDetails:
        "This application is powered by Android/Kotlin with Jetpack Compose. It demonstrates the following concepts: infinite lists and paging3, android work manager and retrofit. I am currently rewriting it in React Native and adding 3000 definitions to compete with the best.",
      image: "sheng_dictionary",
      screenshots: ["sheng_sample1", "sheng_sample2", "sheng_sample3"],
      client: "personal project",
      date: "January 2023",
      progress: 99,
    },
    {
      id: 6,
      title: "Blog",
      link: "https://derricks-data-blog.vercel.app/",
      shortDescription: "blog website",
      description:
        "A VitePress powered static site that hosts data engineering & analytics articles written in Markdown.",
      features: ["Blog", "Markdown"],
      technicalDetails: "Powered by VitePress, TailwindCss, Markdown",
      image: "datablog",
      screenshots: ["datablog_sample1", "datablog_sample2"],
      client: "personal project",
      date: "Novemeber 2023",
      progress: 100,
    },
    // {
    //     id:2,
    //     title:'definitions api',
    //     link:'https://dull-gold-cape-buffalo-hem.cyclic.app',
    //     shortDescription: 'Sheng definitions for your app',
    //     description:'A REST API to serve Sheng definitions to mobile client given you have an API key that is sent with the GET request.',
    //     features:[
    //         'authentication & authorization',
    //         'pagination',
    //         'GET endpoint',
    //     ],
    //     technicalDetails: 'Powered by Node, Express, MongoDB with Mongoose and hosted on Cyclic',
    //     image: "sheng_api",
    //     screenshots: ["sheng_api_sample1", "sheng_api_sample2", "sheng_api_sample3"],
    //     client: "personal project",
    //     date: "January 2023",
    //     progress: 60
    // },
    {
      id: 7,
      title: "KQ",
      link: "https://kenya-airways.vercel.app/",
      shortDescription: "Book flights from your couch!",
      description:
        "This is a mobile responsive website created in partial fulffilment of HCI Design to demonstrate HCI design concepts",
      features: ["book flights", "print ticket"],
      technicalDetails: "Powered by Vue2 & Tailwind CSS.",
      image: "kq",
      screenshots: ["kq_sample1", "kq_sample2", "kq_sample3"],
      client: "School project",
      date: "November 2020",
      progress: 99,
    },
    {
      id: 3,
      title: "careprompt",
      link: "https://care-prompt.vercel.app",
      shortDescription: "Concept landing page",
      description:
        "Concept landing page for a maternal health care solution. I built to this for UI/UX exploration through a simple design with subtle animations.",
      features: ["carousel sliders", "social links", "FAQ"],
      technicalDetails: "Powered by Nuxt, hosted on vercel",
      image: "careprompt",
      screenshots: [
        "careprompt_sample1",
        "careprompt_sample2",
        "careprompt_sample3",
        "careprompt_sample4",
      ],
      client: "personal project",
      date: "April 2023",
      progress: 100,
    },
    {
      id: 4,
      title: "carepromptsearch",
      link: "https://care-prompt-search.vercel.app",
      shortDescription: "Concept Obstetric Emergency Search Tool",
      description:
        "Search tool that is niche-focused on offering education material for health workers. I built this in collaboration with Medical Officers as part of the concluded Appwrite hackathon. The app allows quick learning by leveraging imagery to allow content digestion in stressful, emergency situations. The app is powered by Typesense Search and Appwrite block storage for image storage.",
      features: ["Typesense Search", "Social Share"],
      technicalDetails:
        "Powered by Nuxt, Typesense, Appwrite, hosted on vercel",
      image: "carepromptsearch",
      screenshots: [
        "carepromptsearch_sample1",
        "carepromptsearch_sample2",
        "carepromptsearch_sample3",
        "carepromptsearch_sample4",
      ],
      client: "personal project",
      date: "June 2023",
      progress: 100,
    }

  ]);
