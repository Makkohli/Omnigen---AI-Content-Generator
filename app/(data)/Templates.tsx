export default [
    {
        name: "Blog Title",
        desc: "An AI tool that generate blog title depends on your blog information",
        icon: "https://cdn-icons-png.flaticon.com/128/2799/2799954.png",
        category: "Blog",
        slug: "generate-blog-title",
        aiprompt: "Give me 5 blog topic ideas in bullet wise only based on the given niche & outline topic and give me result in Rich text editor format",
        from: [
            {
                label: "Enter your blog niche",
                field: "input",
                name: "niche",
                required: true
            },
            {
                label: "Enter blog outline",
                field: "textarea",
                name: "outline"
            }
        ]
    },
    {
        name: "Blog Content",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
        slug: "blog-content-generation",
        aiprompt: "Generate Blog Content based on topic and outline in rich text editor format",
        from: [
            {
                label: "Enter your blog topic",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter blog Outline here",
                field: "textarea",
                name: "outline"
            }
        ]
    },
    {
        name: "Blog Topic Ideas",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        category: "Blog",
        icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
        slug: "blog-topic-idea",
        aiprompt: "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
        from: [
            {
                label: "Enter your Niche",
                field: "input",
                name: "niche",
                required: true
            }
        ]
    },
    {
        name: "Youtube SEO Title",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        category: "Youtube Tools",
        icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
        slug: "youtube-seo-title",
        aiprompt: "Give me Best SEO optimized high ranked 5 title ideas bullet wise only based on keywords and outline and give me result in HTML tags format",
        from: [
            {
                label: "Enter your youtube video topic keywords",
                field: "input",
                name: "keywords",
                required: true
            },
            {
                label: "Enter youtube description Outline here",
                field: "textarea",
                name: "outline"
            }
        ]
    },
    {
        name: "Youtube Description",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        category: "Youtube Tool",
        icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
        slug: "youtube-description",
        aiprompt: "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
        from: [
            {
                label: "Enter your blog topic/title",
                field: "input",
                name: "topic",
                required: true
            },
            {
                label: "Enter youtube Outline here",
                field: "textarea",
                name: "outline"
            }
        ]
    },
    {
        name: "Youtube Tags",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        category: "Youtube Tool",
        icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
        slug: "youtube-tag",
        aiprompt: "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",
        from: [
            {
                label: "Enter your youtube title",
                field: "input",
                name: "title",
                required: true
            },
            {
                label: "Enter youtube video Outline here (Optional)",
                field: "textarea",
                name: "outline"
            }
        ]
    },
    {
        name: "Rewrite Article (Plagiarism Free)",
        desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
        icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
        category: "Rewriting Tool",
        slug: "rewrite-article",
        aiprompt: "Rewrite given article without any Plagiarism in rich text editor format",
        from: [
            {
                label: "🤖 Provide your Article/Blogpost or any other content to rewrite.",
                field: "textarea",
                name: "article",
                required: true
            }
        ]
    },
    {
        name: "Text Improver",
        desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
        icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
        category: "Writing Assistant",
        slug: "text-improver",
        aiprompt: "Given textToImprove, rewrite text without any grammar mistakes and professionally in rich text editor format",
        from: [
            {
                label: "Enter text that you want to re-write or improve",
                field: "textarea",
                name: "textToImprove"
            }
        ]
    },
    {
        name: "Add Emojis to Text",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
        category: "Blog",
        slug: "add-emoji-to-text",
        aiprompt: "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
        from: [
            {
                label: "Enter your text to add emojis",
                field: "textarea",
                name: "outline",
                required: true
            }
        ]
    },
    {
        name: "Instagram Post Generator",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
        category: "Blog",
        slug: "instagram-post-generator",
        aiprompt: "Generate 3 Instagram posts depends on a given keywords and give output in rich text editor format",
        from: [
            {
                label: "Enter Keywords for your post",
                field: "input",
                name: "keywords",
                required: true
            }
        ]
    },
    {
        name: "Instagram Hash Tag Generator",
        desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
        icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
        category: "Blog",
        slug: "instagram-hash-tag-generator",
        aiprompt: "Generate 15 Instagram hash tags depends on a given keywords and give output in rich text editor format",
        from: [
            {
                label: "Enter Keywords for your instagram hashtag",
                field: "input",
                name: "keywords",
                required: true
            }
        ]
    },
    {
        name: "Instagram Post/Reel Idea",
        desc: "An AI tool that generate new and trending instagram ideas depends on your niche.",
        icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
        category: "Instagram",
        slug: "instagram-post-idea-generator",
        aiprompt: "Generate 5-10 Instagram ideas depends on niche with latest trend and give output in rich text editor format",
        from: [
            {
                label: "Enter Keywords / Niche for your instagram idea",
                field: "input",
                name: "keywords",
                required: true
            }
        ]
    },
    {
        name: "English Grammar Check",
        desc: "AI Model to correct your English grammar by providing the text.",
        icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
        category: "English",
        slug: "english-grammar-checker",
        aiprompt: "Rewrite the inputText by correcting the grammar and give output in rich text editor format",
        from: [
            {
                label: "Enter text to correct the grammar",
                field: "input",
                name: "inputText",
                required: true
            }
        ]
    },
    {
        name: "Write Code",
        desc: "AI Model to generate programming code in any language.",
        icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
        category: "Coding",
        slug: "write-code",
        aiprompt: "Generate programming code in any language",
        from: [
          {
            label: "Select programming language",
            field: "select",
            name: "language",
            options: [
              { label: "JavaScript", value: "javascript" },
              { label: "Python", value: "python" },
              { label: "Java", value: "java" },
              { label: "C++", value: "cpp" },
              { label: "TypeScript", value: "typescript" },
              { label: "PHP", value: "php" },
              { label: "Ruby", value: "ruby" },
              { label: "Swift", value: "swift" },
              { label: "Go", value: "go" },
              { label: "Rust", value: "rust" },
              { label: "Kotlin", value: "kotlin" },
              { label: "HTML/CSS", value: "htmlcss" },
              { label: "SQL", value: "sql" },
              { label: "Other", value: "other" }
            ],
            required: true
          },
          {
            label: "Enter code requirements or description",
            field: "textarea",
            name: "code",
            required: true
          }
        ]
      },{
            name: "Resume/CV Generator",
            desc: "Create a professional resume or CV tailored to your skills and experience.",
            icon: "https://cdn-icons-png.flaticon.com/128/5019/5019105.png",
            category: "Professional",
            slug: "resume-cv-generator",
            aiprompt: "Generate a resume or CV based on your skills and experience",
            from: [
                {
                    label: "Enter your name",
                    field: "input",
                    name: "name",
                    required: true
                },
                {
                    label: "Enter your job experience and skills",
                    field: "textarea",
                    name: "skills"
                }
            ]
        },
        {
            name: "Email Subject Line Generator",
            desc: "Craft compelling subject lines for your emails that grab attention and improve open rates.",
            icon: "https://cdn-icons-png.flaticon.com/128/5552/5552795.png",
            category: "Email Marketing",
            slug: "email-subject-line-generator",
            aiprompt: "Generate effective email subject lines that improve open rates",
            from: [
                {
                    label: "Enter your email content or purpose",
                    field: "textarea",
                    name: "content",
                    required: true
                }
            ]
        },
        {
            name: "Business Name Generator",
            desc: "Find the perfect name for your business or startup with ease.",
            icon: "https://cdn-icons-png.flaticon.com/128/3563/3563815.png",
            category: "Business",
            slug: "business-name-generator",
            aiprompt: "Generate unique and catchy names for your business or startup",
            from: [
                {
                    label: "Enter keywords related to your business",
                    field: "input",
                    name: "keywords",
                    required: true
                }
            ]
        },
        {
            name: "Social Media Post Ideas",
            desc: "Get creative ideas for your social media posts based on current trends and audience interests.",
            icon: "https://cdn-icons-png.flaticon.com/128/2111/2111223.png",
            category: "Social Media",
            slug: "social-media-post-ideas",
            aiprompt: "Generate engaging ideas for social media posts",
            from: [
                {
                    label: "Enter your social media platform",
                    field: "input",
                    name: "platform",
                    required: true
                },
                {
                    label: "Enter your target audience",
                    field: "input",
                    name: "audience"
                }
            ]
        },
        {
            name: "Product Description Generator",
            desc: "Create compelling descriptions for your products that drive sales.",
            icon: "https://cdn-icons-png.flaticon.com/128/1728/1728144.png",
            category: "E-commerce",
            slug: "product-description-generator",
            aiprompt: "Generate product descriptions that attract customers",
            from: [
                {
                    label: "Enter your product details",
                    field: "textarea",
                    name: "details",
                    required: true
                }
            ]
        }
    ];
