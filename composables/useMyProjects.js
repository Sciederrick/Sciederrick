export const useMyProjects = () =>
    useState(() => [
        // {
        //     id: 9,
        //     title: "Kisiki Capital",
        //     link: "https://kisiki-landing-page.vercel.app/",
        //     shortDescription:
        //         "A landing page for a prop firm",
        //     description:
        //         "A landing page to onboard clients onto a trading platform through a get started call-to-action (CTA) and payment checkout. The aim of the project was to drive conversions on the landing page through a clear CTA and smooth checkout process. I collaborated with the client and UI/UX designer to come up with a user-friendly onboarding and checkout process.",
        //     features: ["Payments Integration - Pesapal", "Checkout"],
        //     technicalDetails:
        //         "Powered by Nuxt, TailwindCss, Pesapal, Feathersjs",
        //     image: "kisiki",
        //     screenshots: [
        //         "kisiki_sample1",
        //         "kisiki_sample2",
        //         "kisiki_sample3",
        //         "kisiki_sample4",
        //     ],
        //     client: "kisiki capital",
        //     date: "Aug 2024",
        //     progress: 75,
        // },
        {
            id: 10,
            title: "Forums",
            link: "https://forums-platform.vercel.app/",
            shortDescription:
                "Forums is a modern, interactive platform designed for seamless discussions, knowledge sharing, and community building across diverse topics.",
            description:
                "Forums is an innovative platform built to foster engaging conversations, connect people with shared interests, and enable meaningful knowledge exchange. Whether you're joining a professional discussion, seeking advice, or contributing to your favorite hobby group, Forums offers an intuitive interface, real-time updates, and powerful tools to make every interaction effortless and productive. With features like customizable topics, private or public discussions, and robust moderation options, Forums is designed to empower communities to thrive in an organized, collaborative, and user-friendly environment.",
            features: ["Group chat", "Direct Messaging"],
            technicalDetails:
                "Powered by React, TailwindCss, Material UI Components, Feathersjs, MongoDB",
            image: "forums",
            screenshots: [
                "forums_sample1",
            ],
            client: "hobby project",
            date: "2024",
            progress: 65,
        },
        {
            id: 8,
            title: "Zeraki",
            link: "https://sales-agent-dashboard-demo.vercel.app/",
            shortDescription:
                "A concept dashboard for an edtech products sales agent",
            description:
                "A dashboard created in fulfillment of a requirements brief as part of an interview assessment by Zeraki",
            features: ["Charts/Graphs", "Data tables"],
            technicalDetails:
                "Powered by React, TailwindCss, Material UI Components, Nivo Charts, React Responsive",
            image: "zeraki_dashboard",
            screenshots: [
                "zeraki_dashboard_sample1",
                "zeraki_dashboard_sample2",
                "zeraki_dashboard_sample3",
                "zeraki_dashboard_sample4",
            ],
            client: "personal project",
            date: "May 2024",
            progress: 65,
        },
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
        // {
        //     id: 1,
        //     title: "Sheng Dictionary",
        //     link: "https://play.google.com/store/apps/details?id=ke.derrick.shengdictionary",
        //     shortDescription: "keep up with sheng",
        //     description:
        //         "This application is powered by Android/Kotlin with Jetpack Compose. I worked on this to experiment with Android Work Manager, Infinite Lists & Paging3, Retrofit and Google Play Store Deployment",
        //     features: ["words", "idioms"],
        //     technicalDetails:
        //         "This application is powered by Android/Kotlin with Jetpack Compose. It demonstrates the following concepts: infinite lists and paging3, android work manager and retrofit. I am currently rewriting it in React Native and adding 3000 definitions to compete with the best.",
        //     image: "sheng_dictionary",
        //     screenshots: ["sheng_sample1", "sheng_sample2", "sheng_sample3"],
        //     client: "personal project",
        //     date: "January 2023",
        //     progress: 99,
        // },
        // {
        //     id: 6,
        //     title: "Blog",
        //     link: "https://derricks-data-blog.vercel.app/",
        //     shortDescription: "blog website",
        //     description:
        //         "A VitePress powered static site that hosts data engineering & analytics articles written in Markdown.",
        //     features: ["Blog", "Markdown"],
        //     technicalDetails: "Powered by VitePress, TailwindCss, Markdown",
        //     image: "datablog",
        //     screenshots: ["datablog_sample1", "datablog_sample2"],
        //     client: "personal project",
        //     date: "Novemeber 2023",
        //     progress: 100,
        // },
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
        // {
        //     id: 7,
        //     title: "KQ",
        //     link: "https://kenya-airways.vercel.app/",
        //     shortDescription: "Book flights from your couch!",
        //     description:
        //         "This is a mobile responsive website created in partial fulffilment of HCI Design to demonstrate HCI design concepts",
        //     features: ["book flights", "print ticket"],
        //     technicalDetails: "Powered by Vue2 & Tailwind CSS.",
        //     image: "kq",
        //     screenshots: ["kq_sample1", "kq_sample2", "kq_sample3"],
        //     client: "School project",
        //     date: "November 2020",
        //     progress: 99,
        // },
        // {
        //     id: 3,
        //     title: "Careprompt",
        //     link: "https://care-prompt.vercel.app",
        //     shortDescription: "Concept landing page",
        //     description:
        //         "Concept landing page for a maternal health care solution. I built to this for UI/UX exploration through a simple design with subtle animations.",
        //     features: ["carousel sliders", "social links", "FAQ"],
        //     technicalDetails: "Powered by Nuxt, hosted on vercel",
        //     image: "careprompt",
        //     screenshots: [
        //         "careprompt_sample1",
        //         "careprompt_sample2",
        //         "careprompt_sample3",
        //         "careprompt_sample4",
        //     ],
        //     client: "personal project",
        //     date: "April 2023",
        //     progress: 100,
        // },
        // {
        //     id: 4,
        //     title: "carepromptsearch",
        //     link: "https://care-prompt-search.vercel.app",
        //     shortDescription: "Concept Obstetric Emergency Search Tool",
        //     description:
        //         "Search tool that is niche-focused on offering education material for health workers. I built this in collaboration with Medical Officers as part of the concluded Appwrite hackathon. The app allows quick learning by leveraging imagery to allow content digestion in stressful, emergency situations. The app is powered by Typesense Search and Appwrite block storage for image storage.",
        //     features: ["Typesense Search", "Social Share"],
        //     technicalDetails:
        //         "Powered by Nuxt, Typesense, Appwrite, hosted on vercel",
        //     image: "carepromptsearch",
        //     screenshots: [
        //         "carepromptsearch_sample1",
        //         "carepromptsearch_sample2",
        //         "carepromptsearch_sample3",
        //         "carepromptsearch_sample4",
        //     ],
        //     client: "personal project",
        //     date: "June 2023",
        //     progress: 100,
        // },
    ]);
