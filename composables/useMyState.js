export const useMyState = () =>
  useState(() => [
    {
      id: 1,
      title: "sheng dictionary",
      link: "https://play.google.com/store/apps/details?id=ke.derrick.shengdictionary",
      shortDescription: "keep up with sheng",
      description:
        "This is an android application inspired by the need to keep tabs with the Kenyan informal street language (slang).Target: The youth, friendly pedestrians or anyone looking to blend in while on the streets of Nairobi",
      features: ["words", "idioms"],
      technicalDetails:
        "This application is powered by Android/Kotlin with Jetpack Compose. It demonstrates the following concepts: infinite lists and paging3, android work manager and retrofit.",
      image: "sheng_dictionary",
      screenshots: ["sheng_sample1", "sheng_sample2", "sheng_sample3"],
      client: "personal project",
      date: "January 2023",
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
    //     date: "January 2023"
    // },
    {
      id: 3,
      title: "careprompt",
      link: "https://care-prompt.vercel.app",
      shortDescription: "Concept landing page",
      description: "Concept landing page for a maternal health care solution",
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
    },
    {
      id: 4,
      title: "carepromptsearch",
      link: "https://care-prompt-search.vercel.app",
      shortDescription: "Concept Obstetric Emergency Search Tool",
      description:
        "Search tool that is niche-focused on offering education material for health workers",
      features: ["Search", "Social Share"],
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
    },
  ]);
