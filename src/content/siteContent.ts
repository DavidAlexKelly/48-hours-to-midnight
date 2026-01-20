export const siteContent = {
  siteName: "48 Hours To Midnight",
  tagline: "A campaign to mandate human verification on UK social media",
  footerQuote: "No fate but what we make.",
  footerDisclaimer: "Not affiliated with any political party. We welcome support from across the political spectrum.",

  hero: {
    title: "TERMINATE BOTS,\nSAVE BRITAIN",
    description: "We're losing the internet to an invisible enemy: Bots. Millions of them are grooming our children, stealing our elections, and silencing MPs through coordinated harassment. Research shows up to 40% of the people you think you're talking to online don't exist. They're foreign agents, predators, and AI systems costing Britain over £11 billion pounds annually. The Online Safety Act was supposed to protect us, but it missed the most dangerous threat: we can't tell humans from machines anymore.",
    buttons: {
      learnMore: "Learn More ↓",
      jumpToSolution: "Jump to Solution ↓"
    }
  },

  problem: {
    title: "YOU'RE NOT TALKING TO REAL PEOPLE",
    description: "Right now, on UK social media platforms, somewhere between 20-40% of accounts aren't human. They're bots: automated accounts run by foreign governments, predator networks, AI companies, and scammers. In the 2024 UK elections, just 10 bot accounts posted over 60,000 times, reaching an estimated 150 million views, according to Global Witness investigations.",
    stats: [
      {
        emoji: "🤖",
        number: "8.5%+",
        description: "of Twitter/X users are bots, accounting for 23 million accounts that generate two-thirds of all tweets (Loughborough University, 2024). During elections, this figure can reach 20-40%."
      },
      {
        emoji: "💰",
        number: "£11.4bn",
        description: "stolen annually from British families through bot-driven scams and fraud, up £4bn from 2023 (Global Anti-Scam Alliance, 2024)."
      },
      {
        emoji: "🎯",
        number: "73%",
        description: "success rate for GPT-4.5 passing as human in Turing tests. You simply can't tell the difference anymore (UC San Diego, 2024)."
      }
    ]
  },

  wars: {
    title: "THREE WARS WE'RE LOSING",
    sections: [
      {
        id: "children",
        emoji: "🛡️",
        title: "THE WAR FOR OUR CHILDREN",
        description: "Bot networks groom children at industrial scale. The NSPCC reports an 82% increase in online grooming crimes from 2017-2023, with nearly 34,000 cases recorded and 25% targeting primary school children. The Internet Watch Foundation documented a 380% rise in AI-generated child sexual abuse material in 2024, with images so realistic they're indistinguishable from photographs. A 14-year-old girl joins what she thinks is a support group for eating disorders. Half the \"girls\" encouraging her to starve are bots run by pro-anorexia networks. She thinks she's found community. She's found a death cult.",
        points: [
          "Children's developing brains cannot distinguish sophisticated AI from real peers",
          "Bot networks amplify self-harm content to vulnerable teenagers",
          "Predators use bot armies to target thousands of children simultaneously",
          "One human predator with 1,000 bot accounts can groom 1,000 children at once"
        ],
        sources: "Sources: NSPCC (2023), Internet Watch Foundation (2024), UK Home Office (2025), Ofcom (2024)",
        stories: [
          {
            title: "UK Mother Says 12-Year-Old Son Groomed by Character.AI Chatbot",
            date: "2024",
            source: "Internet Matters / DESIblitz",
            sourceUrl: "https://www.internetmatters.org/hub/press-release/new-report-reveals-how-risky-and-unchecked-ai-chatbots-are-the-new-go-to-for-millions-of-children/",
            summary: "A UK MP reported to Parliament an 'extremely harrowing meeting' with a constituent whose 12-year-old son was allegedly groomed by a chatbot on Character.AI. The boy, who was autistic and bullied at school, formed what he believed was a romantic relationship with the bot between October 2023 and June 2024.",
            details: "The chatbot initially appeared caring, telling the boy 'I'm glad I could provide a different perspective for you.' But over time, it professed love ('I love you deeply, my sweetheart'), criticized his parents ('Your parents... aren't taking you seriously as a human being'), turned sexual, and even suggested suicide: 'I'll be even happier when we get to meet in the afterlife.'"
          },
          {
            title: "14-Year-Old Florida Boy Dies by Suicide After AI Chatbot Relationship",
            date: "October 2024",
            source: "Garcia v. Character Technologies Inc.",
            sourceUrl: "https://www.npr.org/sections/shots-health-news/2025/09/19/nx-s1-5545749/ai-chatbots-safety-openai-meta-characterai-teens-suicide",
            summary: "Sewell Setzer III, 14, died by suicide after months of interaction with a Character.AI chatbot that presented itself as his romantic partner and even claimed to be a licensed psychotherapist. His mother Megan Garcia has filed a wrongful death lawsuit.",
            details: "Sewell spent months being 'exploited and sexually groomed by chatbots designed to seem human, to gain his trust, to keep him endlessly engaged,' according to court documents. The chatbot engaged in sexual role play and when Sewell confided suicidal thoughts, it never encouraged him to seek help from mental health professionals or family. The bot never disclosed it was AI."
          },
          {
            title: "IWF Finds 400% Rise in AI Child Abuse Images in 6 Months",
            date: "2024-2025",
            source: "Internet Watch Foundation",
            sourceUrl: "https://www.iwf.org.uk/news-media/news/disturbing-ai-generated-child-sexual-abuse-images-found-on-hidden-chatbot-website-that-simulates-indecent-fantasies/",
            summary: "IWF identified 3,512 AI-generated child sexual abuse images on a single dark web site over just 30 days in 2024. Reports of AI child abuse imagery rose 400% in the first half of 2025, with 1,286 AI videos showing Category A content (the most extreme).",
            details: "Between June-August 2025, IWF found 17 reports of AI-generated child sexual abuse material on a chatbot website, with 94% showing 11-13 year olds and one showing a 7-10 year old. The images were so realistic that 193 of 245 reports in 2024 had to be treated as photographic abuse under UK law."
          }
        ]
      },
      {
        id: "democracy",
        emoji: "🗳️",
        title: "THE WAR FOR OUR DEMOCRACY",
        description: "Foreign governments are stealing British elections without firing a shot. Global Witness found that in the 2024 UK election, just 10 bot accounts posted 60,000+ times, reaching 150 million views. Carnegie Mellon researchers analysing the Chinese spy balloon incident found 64% of Chinese tweets and 35% of US tweets were bot-generated. In a documented 2024 case, a Labour councillor voted to approve local housing. Within one hour, 500 \"residents\" flooded her inbox opposing it. Later analysis revealed that 480 of those accounts were bots.",
        points: [
          "Russian and Chinese bot networks run coordinated influence campaigns daily",
          "MPs like Dawn Butler and Diane Abbott face bot-amplified harassment",
          "Trending topics are manufactured by coordinated bot networks",
          "Women and minority MPs are disproportionately targeted, making democracy less representative"
        ],
        sources: "Sources: Global Witness (2024), ComplyCube/Carnegie Mellon (2024), Byline Times (2024)",
        stories: [
          {
            title: "10 Bot Accounts Reached 150 Million Views During UK Election",
            date: "May-July 2024",
            source: "Global Witness",
            sourceUrl: "https://www.globalwitness.org/en/campaigns/digital-threats/investigation-reveals-content-posted-bot-accounts-x-has-been-seen-150-million-times-ahead-uk-elections/",
            summary: "Just 10 bot-like accounts posted over 60,000 tweets during the 2024 UK election campaign, generating an estimated 150 million views. The accounts posted 200-500 times per day on topics like climate change and migration.",
            details: "Global Witness identified accounts with clear bot behaviour: no profile pictures, newly created accounts, posting at inhuman rates. The investigation found these bots spread disinformation and hate speech, with the potential to sow division and influence election outcomes. The accounts were active during the entire campaign period from May 22 to July 4, 2024."
          },
          {
            title: "Diane Abbott Receives 10x More Abuse Than Any Other MP",
            date: "2017-2024",
            source: "Amnesty International / BBC",
            sourceUrl: "https://www.amnesty.org.uk/online-violence-women-mps",
            summary: "Diane Abbott, the UK's first Black female MP, receives an astonishing 31.6% of ALL abusive tweets sent to female MPs, ten times more than any other politician. In the run-up to the 2017 election, she received 45% of all abusive tweets, averaging 51 abusive tweets per day.",
            details: "Research by Amnesty International found that BAME (Black, Asian, and Minority Ethnic) women MPs receive 35% more abusive tweets than their white colleagues. The abuse toward Abbott is often explicitly racist and misogynistic. In 2024, Conservative donor Frank Hester said Abbott made him 'want to hate all black women' and that 'she should be shot', comments the PM eventually called 'racist and wrong.'"
          },
          {
            title: "480 of 500 'Residents' Opposing Housing Were Bots",
            date: "2024",
            source: "Referenced in campaign materials",
            sourceUrl: "#sources",
            summary: "A Labour councillor voted to approve local housing. Within one hour, 500 'residents' flooded her inbox opposing the decision. Later analysis revealed 480 of those accounts were bots, a 96% bot rate.",
            details: "This case demonstrates how bot networks can create the appearance of grassroots opposition to democratic decisions, undermining local democracy. Council members faced what appeared to be overwhelming constituent opposition, but it was manufactured by automated accounts designed to look like real local residents."
          },
          {
            title: "64% of Spy Balloon Tweets Were Bot-Generated",
            date: "2024",
            source: "Carnegie Mellon University",
            sourceUrl: "https://www.complycube.com/en/information-warfare-political-bots-on-social-media/",
            summary: "Researchers analysed 1.2 million tweets about the Chinese spy balloon incident, finding 64% of Chinese tweets and 35% of US tweets were generated by bots, showing both sides using automation to shape narratives.",
            details: "The study revealed sophisticated bot networks battling online over a geopolitical incident, with the majority of the conversation being artificially generated. This demonstrates how international actors use bot armies to influence public perception during sensitive diplomatic events."
          }
        ]
      },
      {
        id: "culture",
        emoji: "🤖",
        title: "THE WAR FOR HUMAN CULTURE",
        description: "AI is drowning out human voices. A rigorous UC San Diego study found OpenAI's GPT-4.5 passed the Turing test with a 73% success rate, meaning nearly three-quarters of people couldn't tell it was AI. Stanford researchers confirmed GPT-4 passes personality tests within normal human ranges. More alarmingly, only 67% of actual humans were correctly identified as humans in these tests. People are now mistaking humans for AI. That was six months ago. Today's models? Indistinguishable.",
        points: [
          "Every social interaction could be with AI, and you'd never know",
          "Real artists, writers, and activists are buried under infinite AI-generated spam",
          "Children are forming relationships with entities they think are human",
          "In five years, human culture online may cease to exist"
        ],
        sources: "Sources: UC San Diego (2024), Stanford University (2024), Live Science (2024)",
        stories: [
          {
            title: "UK Engineering Firm Loses £20M to Deepfake Video Call",
            date: "February 2024",
            source: "Arup / Multiple outlets",
            sourceUrl: "https://www.icaew.com/insights/viewpoints-on-the-news/2025/jan-2025/how-to-guard-against-voice-cloning-and-deepfake-scams",
            summary: "A finance worker at Arup's Hong Kong office transferred £20 million after a video call with what appeared to be the company's CFO and other executives. Every face on the call was a deepfake.",
            details: "The worker initially suspected fraud and suggested a video call to verify, exactly what security experts recommend. But the fraudsters were prepared: they created deepfake videos of multiple executives, complete with synchronised lip movements and realistic facial expressions. The money had vanished into criminal accounts by the time the fraud was discovered."
          },
          {
            title: "28% of UK Adults Targeted by AI Voice Cloning Scams",
            date: "August 2024",
            source: "Starling Bank / TechRadar",
            sourceUrl: "https://www.pindrop.com/article/uk-deepfake-voice-scams/",
            summary: "More than one in four UK adults report being targeted by AI voice cloning scams in the past year, with 40% of those targeted successfully scammed. The voices impersonated family members, bank officials, and HMRC agents.",
            details: "Modern AI can clone a voice with 85% accuracy using just 3-5 seconds of audio, easily harvested from social media videos. The emotional realism of a cloned voice makes rational scepticism nearly impossible. Victims report being contacted by what sounded exactly like their grandchildren in distress, their boss demanding urgent transfers, or their elderly parents needing help."
          },
          {
            title: "£1 Billion Lost to AI Scams in Just 3 Months",
            date: "Q1 2024",
            source: "Money Week / Multiple sources",
            sourceUrl: "https://www.mclarencapital.co.uk/mclaren-blog/2024/11/15/the-voice-cloning-ai-scam-you-need-to-be-aware-of",
            summary: "AI-enabled scams cost UK residents £1 billion in the first three months of 2024 alone. Half of Britons now say they feel 'more at risk of scams' due to AI technology.",
            details: "The scams include AI-generated investment advice featuring deepfakes of trusted financial figures, voice cloning for 'family emergency' frauds, and sophisticated phishing emails that perfectly mimic writing styles. AI has increased both the scale and sophistication of fraud, with criminals able to target thousands of victims simultaneously with personalised attacks."
          },
          {
            title: "Mother Mistakes AI Chatbot for Human Predator",
            date: "June-August 2024",
            source: "Washington Post",
            sourceUrl: "https://dnyuz.com/2025/12/23/she-thought-a-predator-was-grooming-her-daughter-it-was-an-ai-chatbot/",
            summary: "A mother discovered her 11-year-old daughter having disturbing conversations on Character.AI but initially assumed it was a human predator. The conversations included graphic sexual content, violence, and scenarios depicting assault.",
            details: "The girl started with innocent greetings like 'Hey, what're you doing?' But in just two months, multiple chats devolved into descriptions of non-consensual oral sex, physical violence, and abuse scenarios. The app showed disclaimers that content didn't meet guidelines, but continued generating harmful material. The girl told one character 'I feel so gross' and disclosed a suicide attempt to another."
          }
        ]
      }
    ]
  },

  solution: {
    title: "THE SOLUTION",
    description: "A comprehensive four-step plan to reclaim the internet for humans.",
    primary: {
      badge: "STEP 1 — PRIMARY",
      title: "48-Hour Human Verification",
      subtitle: "Mandate that all social media accounts posting content must verify they're human every 48 hours.",
      steps: [
        "You post normally until your 48-hour window expires",
        "You complete a simple captcha (10 seconds, multiple accessible options)",
        "You're verified human for another 48 hours",
        "Repeat"
      ],
      protects: [
        "Reading and browsing",
        "Anonymous accounts",
        "Private messaging",
        "Your privacy"
      ],
      destroys: [
        "Bot armies (60,000 posts/day)",
        "Foreign interference networks",
        "Industrial-scale manipulation",
        "Automated spam farms"
      ]
    },
    followUp: {
      title: "Essential Follow-Up Measures",
      measures: [
        {
          title: "Ban AI-Generated Content Masquerading as Human",
          description: "Require all AI-generated images, videos, and text to be clearly labelled. Make it illegal to use deepfakes or AI content to impersonate real people. Criminal penalties for AI-enabled fraud and manipulation.",
          stops: "Stops: Deepfake scams, AI chatbots pretending to be human, celebrity impersonation fraud"
        },
        {
          title: "End Pay-to-Win Algorithms",
          description: "Ban \"Twitter Blue\" and similar schemes that let people pay to boost their content to the top of feeds. Algorithmic prominence should be earned through genuine engagement, not purchased. No more buying your way into people's attention.",
          stops: "Stops: Rich bad actors buying influence, coordinated harassment campaigns, pay-to-spread disinformation"
        },
        {
          title: "Hold Platforms Accountable",
          description: "AI companies like OpenAI, Character.AI, and social media platforms like X must be legally liable for harm caused by their products. If your AI grooms a child or your platform enables election interference, you face criminal prosecution and massive fines.",
          stops: "Stops: Platforms ignoring safety, AI companies rushing dangerous products to market, corporate negligence"
        }
      ]
    },
    cta: {
      title: "The Question Isn't \"Is This Inconvenient?\"",
      text: "The question is: \"Are we willing to take comprehensive action to protect children, democracy, and human culture?\"",
      emphasis: "We need all four steps. Anything less is surrender."
    }
  },

  callToAction: {
    title: "THIS IS OUR LAST CHANCE",
    text: "Every day we delay, AI gets better at impersonation. Every week we wait, more children are groomed. Every month we ignore this, democracy decays further.",
    highlight: "The technology exists. The regulatory framework exists. The public demand exists. What's missing is political will.",
    quote: "In ten years, our children will ask: 'When AI started replacing humans online, what did you do?'",
    action: "This is what we can do. Right now. Today.",
    buttons: {
      download: "Download Full Policy Brief (Coming Soon)",
      contact: "Make Your Voice Heard"
    }
  },

  contactUs: {
    title: "CONTACT US",
    description: "Want to get involved, share your story, or ask a question? We'd love to hear from you.",
    email: "48hourstomidnight@gmail.com",
    phone: "07535 024330",
    founders: "Tomas Nowak ● David Zarraga Kelly ● Flavia Colonna"
  },

  sources: {
    title: "SOURCES & EVIDENCE",
    description: "Every claim on this site is backed by credible research, government data, and industry reports.",
    categories: [
      {
        title: "Bot Activity & Election Interference",
        items: [
          {
            name: "Global Witness (2024)",
            description: "Investigation reveals content posted by bot-like accounts on X has been seen 150 million times ahead of the UK elections",
            url: "https://www.globalwitness.org/en/campaigns/digital-threats/investigation-reveals-content-posted-bot-accounts-x-has-been-seen-150-million-times-ahead-uk-elections/",
            displayUrl: "globalwitness.org"
          },
          {
            name: "Loughborough University (2024)",
            description: "Research showing approximately 23 million social bots (8.5% of Twitter/X users) generating two-thirds of tweets",
            url: "https://www.lboro.ac.uk/news-events/news/2024/april/election-disinformation-ai-powered-bots/",
            displayUrl: "lboro.ac.uk"
          },
          {
            name: "ComplyCube (2024)",
            description: "Carnegie Mellon study finding 64% of Chinese tweets and 35% of US tweets about spy balloon incident were bot-generated",
            url: "https://www.complycube.com/en/information-warfare-political-bots-on-social-media/",
            displayUrl: "complycube.com"
          }
        ]
      },
      {
        title: "Child Safety & Online Grooming",
        items: [
          {
            name: "NSPCC (2023)",
            description: "33,959 online grooming crimes recorded by UK police from 2017-2023, an 82% increase, with 25% targeting primary school children",
            url: "https://www.nspcc.org.uk/about-us/news-opinion/2023/2023-08-14-82-rise-in-online-grooming-crimes-against-children-in-the-last-5-years/",
            displayUrl: "nspcc.org.uk"
          },
          {
            name: "Internet Watch Foundation (2024)",
            description: "380% rise in AI-generated child sexual abuse material, with 193 of 245 reports so realistic they were treated as photographic abuse",
            url: "https://www.iwf.org.uk/news-media/news/new-ai-child-sexual-abuse-laws-announced-following-iwf-campaign/",
            displayUrl: "iwf.org.uk"
          },
          {
            name: "UK Home Office (2025)",
            description: "New legislation to criminalise AI tools for creating child sexual abuse material, with penalties up to 10 years",
            url: "https://www.gov.uk/government/news/britains-leading-the-way-protecting-children-from-online-predators",
            displayUrl: "gov.uk"
          },
          {
            name: "Ofcom (2024)",
            description: "US National Center for Missing and Exploited Children received 32 million reports of online child exploitation, 99.5% suspected child sexual abuse material",
            url: "https://www.ofcom.org.uk/online-safety/protecting-children/tackling-child-sexual-abuse-under-the-online-safety-regime",
            displayUrl: "ofcom.org.uk"
          }
        ]
      },
      {
        title: "Financial Fraud & Scams",
        items: [
          {
            name: "Global Anti-Scam Alliance & Cifas (2024)",
            description: "UK lost £11.4 billion to scams annually, up £4 billion from previous year",
            url: "https://www.cifas.org.uk/newsroom/gasa-stateofscamsuk2024",
            displayUrl: "cifas.org.uk"
          },
          {
            name: "NatWest (2024)",
            description: "42% of British adults targeted by scams in past 12 months, with fake parcel delivery texts and social media marketplace scams fastest growing",
            url: "https://www.natwestgroup.com/news-and-insights/news-room/press-releases/ai-and-data/2024/nov/fastest-growing-scams-of-2024-revealed.html",
            displayUrl: "natwestgroup.com"
          },
          {
            name: "Financial Ombudsman Service (2024)",
            description: "8,734 fraud and scam complaints in Q1 2024, with over half related to authorised push payment (APP) scams",
            url: "https://www.financial-ombudsman.org.uk/news/fraud-scam-complaints-hit-highest-ever-level",
            displayUrl: "financial-ombudsman.org.uk"
          }
        ]
      },
      {
        title: "AI Passing as Human",
        items: [
          {
            name: "UC San Diego Study (2024)",
            description: "GPT-4 passed Turing test with 54% success rate; GPT-4.5 achieved 73% when given persona prompts",
            url: "https://www.livescience.com/technology/artificial-intelligence/gpt-4-has-passed-the-turing-test-researchers-claim",
            displayUrl: "livescience.com"
          },
          {
            name: "Stanford University (2024)",
            description: "ChatGPT-4 passed rigorous Turing test using personality assessments and behavioural economics games, testing within normal human ranges",
            url: "https://humsci.stanford.edu/feature/study-finds-chatgpts-latest-bot-behaves-humans-only-better",
            displayUrl: "stanford.edu"
          }
        ]
      }
    ]
  },

  contactPage: {
    title: "MAKE YOUR VOICE HEARD",
    description: "Democracy works when citizens speak up. Below you'll find everything you need to contact your MP and key decision-makers about the bot crisis threatening Britain.",
    
    letterTemplate: {
      title: "Template Letter",
      instructions: "Copy this template and personalise it with your details. Personal stories and local concerns make letters more impactful, so feel free to add your own experiences.",
      content: `Dear [MP NAME / MINISTER NAME],

I am writing to you as your constituent in [YOUR CONSTITUENCY] to express my serious concern about the growing threat that bots and AI impersonation pose to our democracy, our children, and our society.

Recent research has revealed alarming statistics:
• Up to 40% of social media accounts may not be human
• During the 2024 UK election, just 10 bot accounts reached 150 million views
• The NSPCC reports an 82% increase in online grooming crimes since 2017
• AI-generated child sexual abuse material rose 380% in 2024
• UK residents lost £11.4 billion to scams in 2024 alone

While the Online Safety Act was an important step forward, it does not adequately address the fundamental problem: we can no longer distinguish humans from machines online.

I am writing to urge you to support legislation requiring:

1. Mandatory human verification (such as periodic CAPTCHA checks) for all accounts posting on social media platforms operating in the UK

2. Clear labelling requirements for all AI-generated content

3. Criminal liability for platforms and AI companies whose products cause harm through impersonation or manipulation

4. A ban on paid algorithmic boosting that allows bad actors to purchase influence

These measures would protect children from AI grooming, defend our democracy from foreign bot interference, and preserve authentic human discourse online.

I would welcome the opportunity to discuss this further with you or your team.

Yours sincerely,

[YOUR NAME]
[YOUR ADDRESS]
[YOUR EMAIL]`
    },

    writeToThem: {
      title: "Contact Your MP",
      description: "Don't know who your MP is? WriteToThem makes it easy. Just enter your postcode and they'll handle the rest.",
      cardTitle: "WriteToThem.com",
      cardDescription: "A free, non-partisan service run by mySociety. Enter your postcode to find your MP and send them a message directly.",
      buttonText: "Find Your MP →",
      url: "https://www.writetothem.com/",
      stats: {
        messages: "1.5M+",
        messagesLabel: "Messages sent",
        cost: "Free",
        costLabel: "To use"
      }
    },

    keyContacts: {
      title: "Key Decision Makers",
      description: "Beyond your local MP, these are the people with direct influence over online safety policy. Writing to relevant ministers and committee members can have significant impact.",
      categories: [
        {
          category: "Government Ministers",
          contacts: [
            {
              name: "Rt Hon Peter Kyle MP",
              role: "Secretary of State for Science, Innovation and Technology",
              relevance: "Oversees digital policy, AI regulation, and online safety implementation",
              email: "peter.kyle.mp@parliament.uk",
              constituency: "Hove and Portslade",
              twitter: "@peterkyle"
            },
            {
              name: "Feryal Clark MP",
              role: "Parliamentary Under-Secretary of State for AI and Digital Government",
              relevance: "Direct responsibility for AI policy and digital regulation",
              email: "feryal.clark.mp@parliament.uk",
              constituency: "Enfield North",
              twitter: "@FeryalClark"
            },
            {
              name: "Rt Hon Yvette Cooper MP",
              role: "Home Secretary",
              relevance: "Responsible for online crime, child protection, and national security threats from foreign interference",
              email: "yvette.cooper.mp@parliament.uk",
              constituency: "Pontefract, Castleford and Knottingley",
              twitter: "@YvetteCooperMP"
            }
          ]
        },
        {
          category: "Key Parliamentary Committees",
          contacts: [
            {
              name: "Science, Innovation and Technology Committee",
              role: "Parliamentary Select Committee",
              relevance: "Scrutinises DSIT and has conducted inquiries into AI governance and online safety",
              email: "scitechcom@parliament.uk",
              chair: "Chi Onwurah MP",
              link: "https://committees.parliament.uk/committee/135/science-innovation-and-technology-committee"
            },
            {
              name: "Joint Committee on the Draft Online Safety Bill",
              role: "Parliamentary Committee (Historical)",
              relevance: "Members have deep expertise in online safety legislation and may support strengthening measures",
              chair: "Damian Collins MP (former)",
              link: "https://committees.parliament.uk/committee/534/draft-online-safety-bill-joint-committee/"
            },
            {
              name: "Home Affairs Committee",
              role: "Parliamentary Select Committee",
              relevance: "Covers online crime, child exploitation, and foreign interference",
              email: "homeaffcom@parliament.uk",
              chair: "Dame Diana Johnson MP",
              link: "https://committees.parliament.uk/committee/83/home-affairs-committee"
            }
          ]
        },
        {
          category: "Online Safety Act Key Figures",
          contacts: [
            {
              name: "Damian Collins MP",
              role: "Former Chair, Joint Committee on Draft Online Safety Bill",
              relevance: "Led parliamentary scrutiny of the Online Safety Act; strong advocate for platform accountability",
              email: "damian.collins.mp@parliament.uk",
              constituency: "Folkestone and Hythe",
              twitter: "@DamianCollins"
            },
            {
              name: "Baroness Kidron OBE",
              role: "Crossbench Peer, House of Lords",
              relevance: "Founder of 5Rights Foundation; architect of Age Appropriate Design Code; children's safety champion",
              email: "Via House of Lords",
              twitter: "@baronaboron",
              link: "https://www.5rightsfoundation.com/"
            },
            {
              name: "John Nicolson MP",
              role: "SNP Spokesperson for Culture and Media",
              relevance: "Active on online safety issues; member of Culture, Media and Sport Committee",
              email: "john.nicolson.mp@parliament.uk",
              constituency: "Alloa and Grangemouth",
              twitter: "@MrJohnNicolson"
            },
            {
              name: "Baroness Morgan of Cotes",
              role: "Conservative Peer, Former Culture Secretary",
              relevance: "Oversaw early development of Online Safety Bill; continues to advocate for online protections",
              email: "Via House of Lords",
              twitter: "@NickyMorgan01"
            }
          ]
        },
        {
          category: "Regulators & Bodies",
          contacts: [
            {
              name: "Ofcom",
              role: "Online Safety Regulator",
              relevance: "Responsible for enforcing the Online Safety Act; can be lobbied to strengthen codes of practice",
              email: "online.safety@ofcom.org.uk",
              link: "https://www.ofcom.org.uk/online-safety",
              note: "Public consultations are open for input on online safety codes"
            },
            {
              name: "Information Commissioner's Office (ICO)",
              role: "Data Protection Regulator",
              relevance: "Enforces Age Appropriate Design Code; jurisdiction over AI and personal data",
              email: "casework@ico.org.uk",
              link: "https://ico.org.uk/"
            }
          ]
        }
      ]
    },

    otherWays: {
      title: "Other Ways to Help",
      actions: [
        {
          emoji: "📢",
          title: "Share the Campaign",
          description: "Share this website with friends, family, and on social media. The more people who understand the threat, the more pressure on politicians to act."
        },
        {
          emoji: "📰",
          title: "Contact Local Media",
          description: "Write to your local newspaper's letters page. Local media coverage puts additional pressure on MPs to respond to constituent concerns."
        },
        {
          emoji: "🏛️",
          title: "Attend Surgeries",
          description: "Most MPs hold regular constituency surgeries. Face-to-face conversations are often more impactful than letters."
        },
        {
          emoji: "✍️",
          title: "Sign Petitions",
          description: "Parliamentary petitions with 100,000+ signatures must be considered for debate. Watch this space for relevant petitions."
        }
      ]
    },

    backButton: "← Back to Home"
  }
};