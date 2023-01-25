<template>
  <v-container fluid>
    <v-card-title
      :class="
        $vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'
      "
      ><v-icon
        size="35"
        class="mr-2"
        :color="$vuetify.theme.dark ? 'white' : 'black'"
        >{{
          getGreetingData === "Good Evening"
            ? "mdi-moon-waning-crescent"
            : "mdi-white-balance-sunny"
        }}</v-icon
      >{{ getGreetingData }}, User!</v-card-title
    >
    <v-data-iterator :items="newsFeed.data.articles" hide-default-footer>
      <template v-slot:default="props">
        <v-card
          v-for="(item, index) in props.items"
          :key="index"
          class="rounded-xl ma-5"
        >
          <v-card-title class="font-weight-medium text-h6">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle class="font-weight-medium text-h6">
            {{ item.content }}
          </v-card-subtitle>
        </v-card>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
// import { makeAPICall } from "@/services/apiCall";
export default {
  name: "topheadlines-component",
  data: () => ({
    newsFeed: [],
  }),
  computed: {
    getGreetingData() {
      var today = new Date();
      var curHr = today.getHours();

      return curHr < 12
        ? "Good Morning"
        : curHr > 18
        ? "Good Evening"
        : "Good Afternoon";
    },
  },
  created() {
    this.newsFeed = {
      data: {
        status: "ok",
        totalResults: 343,
        articles: [
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Angus Loten",
            title:
              "Tech Chiefs Fear ‘Frankenstein’ Software Integrations - The Wall Street Journal",
            description:
              "Expected acceleration in M&A deals in the IT sector has brought worries among customers about having to adapt to new—and sometimes unwanted—tech tools",
            url: "https://www.wsj.com/articles/tech-chiefs-fear-frankenstein-software-integrations-11674669353",
            urlToImage: "https://images.wsj.net/im-710073/social",
            publishedAt: "2023-01-25T17:55:00Z",
            content:
              "An expected increase in acquisitions, consolidation and software integrations by large enterprise-technology companies has some commercial customers wary of having to deal with new and unfamiliar dig… [+5739 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Richard Rubin",
            title: "National Sales-Tax Plan Gains Attention in House GOP",
            description:
              "Speaker Kevin McCarthy says he doesn’t support plan to replace income taxes and abolish the IRS",
            url: "https://www.wsj.com/articles/national-sales-tax-plan-gains-attention-in-house-gop-11674664594",
            urlToImage: "https://images.wsj.net/im-705912/social",
            publishedAt: "2023-01-25T16:36:00Z",
            content:
              "WASHINGTONA decades-old proposal to replace federal income, estate and payroll taxes with a national sales tax has gained support and attention in the new House GOP majority, but House Speaker Kevin … [+351 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Wall Street Journal",
            title:
              "Live Question & Answer Event - Tech Layoffs: What Do They Mean ... - The Wall Street Journal",
            description:
              "Job cuts have rippled through the tech industry, with thousands of layoffs announced across hundreds of companies including Google, Amazon, Meta and Microsoft. Creator of the popular layoff tracker Layoffs.fyi Roger Lee and the head of talent at venture firm …",
            url: "https://www.wsj.com/live-qa/tech-layoffs-what-do-they-mean/E038DEA9-7F7C-4464-920A-AB9723D739BF",
            urlToImage: "https://images.wsj.net/im-709908?width=640",
            publishedAt: "2023-01-25T16:12:21Z",
            content:
              "LIVE Q&amp;A | Begins 1:00 PM ET JANUARY 26, 2023\r\nJob cuts have rippled through the tech industry, with thousands of layoffs announced across hundreds of companies including Google, Amazon, Meta and… [+304 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Natalie Andrews, C. Ryan Barber",
            title:
              "PRIORITIES: Republicans Press for Details of Hunter Biden Art Sales...",
            description:
              "PRIORITIES: Republicans Press for Details of Hunter Biden Art Sales...\r\n\n \n \n \n (First column, 6th story, link)",
            url: "https://www.wsj.com/articles/house-republicans-press-for-details-of-hunter-bidens-art-sales-11674654094",
            urlToImage: "https://images.wsj.net/im-709643/social",
            publishedAt: "2023-01-25T15:43:37Z",
            content:
              "WASHINGTONHouse Republicans on Wednesday \r\npushed for details about sales of Hunter Bidens artwork, an early move as they step up an investigation into the business dealings of President Bidens son.I… [+493 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title:
              "TWITTER Reprieves Hindu Nationalist Accounts That Disparage Muslims...",
            description:
              "Human-rights groups say they have seen a rise in anti-Muslim material on the platform",
            url: "https://www.wsj.com/articles/musks-twitter-reprieves-hindu-nationalist-accounts-that-disparage-muslims-11674652031",
            urlToImage: "https://images.wsj.net/im-708703/social",
            publishedAt: "2023-01-25T14:00:04Z",
            content:
              "Musk’s Twitter Reprieves Hindu Nationalist Accounts That Disparage Muslims\r\nTwitter has been in turmoil since Elon Musk took over. To get a sense of what’s going on behind the scenes, The Wall Street… [+1679 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title: "Lauren Sanchez on Going to Space and Working With Bezos...",
            description:
              "In her first solo interview since her relationship with Bezos became public, the founder and aviator on life in one of the most philanthropic couples in the world.",
            url: "https://www.wsj.com/articles/lauren-sanchez-interview-jeff-bezos-11674587199",
            urlToImage: "https://images.wsj.net/im-709297/social",
            publishedAt: "2023-01-25T14:00:04Z",
            content:
              "WSJ News Exclusive | Lauren Sánchez on Going to Space and Working With Jeff BezosThere are helicopter parents and then there are parents who helicopter. Lauren  Sánchez happens to be both. The Emmy-w… [+1433 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Phred Dvorak",
            title:
              "U.S. Energy Subsidies Kick Off Global Battle for Jobs, Billions in Investment",
            description:
              "EU competition chief says bloc’s response will be firm but proportionate as clean-energy firms increasingly turn to U.S.",
            url: "https://www.wsj.com/articles/u-s-energy-subsidies-kick-off-global-battle-for-jobs-billions-in-investment-11674645814",
            urlToImage: "https://images.wsj.net/im-709447/social",
            publishedAt: "2023-01-25T11:26:47Z",
            content:
              "Massive clean-energy incentives in the U.S. have set off a global competition for green investment, spurring companies to rethink where they put their money and prompting Americas trading partners to… [+436 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Trefor Moss",
            title: "Amazon Caught in Wave of European Strike Action",
            description:
              "Workers at one of the e-commerce giant’s U.K. sites take industrial action in dispute over pay",
            url: "https://www.wsj.com/articles/amazon-caught-in-wave-of-european-strike-action-11674639830",
            urlToImage: "https://images.wsj.net/im-709656/social",
            publishedAt: "2023-01-25T09:44:51Z",
            content:
              "Amazon.com Inc. workers in Britain went on strike for the first time Wednesday, dragging the e-commerce giant into the wave of labor unrest that has been sweeping the U.K. and other European economie… [+360 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Jared Malsin, Laurence Norman",
            title:
              "土耳其推迟有关瑞典和芬兰申请加入北约问题的磋商 - Wall Street Journal",
            description:
              "<ol><li>土耳其推迟有关瑞典和芬兰申请加入北约问题的磋商  Wall Street Journal\r\n</li><li>瑞典加入北约梗阻 芬兰传单独闯关  RFI - 法国国际广播电台\r\n</li><li>芬兰外长：芬兰或考虑独立申请加入北约  美国之音中文网 - VOA Mandarin\r\n</li><li>埃尔多安放狠话：别指望土耳其支持瑞典“入约”  瞭望东方周刊\r\n</li><li>多场反土抗议后 埃尔多安警告不能再指望土耳其支持瑞典加入北约  RFI - 法国国际广播电台\r\n</li><li>在G…",
            url: "https://cn.wsj.com/articles/土耳其推迟有关瑞典和芬兰申请加入北约问题的磋商-11674634506",
            urlToImage: "https://images.wsj.net/im-709306/social",
            publishedAt: "2023-01-25T08:15:00Z",
            content:
              "(North Atlantic Treaty Organization, )\r\n5(Recep Tayyip Erdogan)\r\n2\r\n...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Alyssa Lukpat, Jon Kamp",
            title:
              "Dozens of Major Shootings Sweep the U.S. in January - The Wall Street Journal",
            description:
              "<ol><li>Dozens of Major Shootings Sweep the U.S. in January  The Wall Street Journal\r\n</li><li>No end in sight for America's everywhere epidemic of mass shootings  CNN\r\n</li><li>January Brings at Least 39 Mass Shootings So Far  The New York Times\r\n</li><li>Mo…",
            url: "https://www.wsj.com/articles/dozens-of-major-shootings-sweep-the-u-s-in-january-11674588035",
            urlToImage: "https://images.wsj.net/im-709125/social",
            publishedAt: "2023-01-25T02:45:00Z",
            content:
              "Mass shootings such as the two that occurred within 48 hours in California in recent days have been on the rise annually in the U.S., data show, though the volume of such incidents varies substantial… [+296 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "David Harrison",
            title:
              "美国财政部采取进一步措施缓解债务上限危机 - Wall Street Journal",
            description:
              "<ol><li>美国财政部采取进一步措施缓解债务上限危机  Wall Street Journal\r\n</li><li>美财长再次就债务上限问题致信国会领袖| 国际  Oriental Daily News 马来西亚东方日报\r\n</li><li>在Google 新闻上查看完整报道</li></ol>",
            url: "https://cn.wsj.com/articles/美国财政部采取进一步措施缓解债务上限危机-11674606905",
            urlToImage: "https://images.wsj.net/im-709206/social",
            publishedAt: "2023-01-25T00:35:00Z",
            content:
              "(Janet Yellen)\r\nThrift Savings Fund(Government Securities Investment Fund, G)G\r\n119\r\n...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Ryan Dezember",
            title:
              "International Paper Strikes Deal to Divest Russian Pulp Business - The Wall Street Journal",
            description:
              "International Paper Strikes Deal to Divest Russian Pulp Business  The Wall Street Journal",
            url: "https://www.wsj.com/articles/international-paper-strikes-deal-to-divest-russian-pulp-business-11674604061",
            urlToImage: "https://images.wsj.net/im-709655/social",
            publishedAt: "2023-01-24T23:51:00Z",
            content:
              "International Paper Co. said it has struck a deal to divest from a lucrative Russian pulp business, \r\nthe latest U.S. company to leave Russia since Moscow invaded Ukraine. IP said it would sell its 5… [+364 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: null,
            title:
              "DOJ Sues Google, Seeking to Break Up Online Ad Business - msnNOW",
            description:
              "The Justice Department’s suit could have major implications for the digital ad industry.",
            url: "https://www.wsj.com/articles/u-s-sues-google-for-alleged-antitrust-violations-in-its-ad-tech-business-11674582792?mod=RSSMSN",
            urlToImage:
              "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA16HoMC.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg",
            publishedAt: "2023-01-24T18:57:00Z",
            content:
              "© noah berger/Agence France-Presse/Getty ImagesThe Justice Department is seeking the breakup of Googles business brokering digital advertising across much of the internet, a major expansion of the le… [+6596 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Miles Kruppa, Sam Schechner, Dave Michaels",
            title:
              "U.S. Sues Google for Alleged Antitrust Violations in Its Ad-Tech Business - The Wall Street Journal",
            description:
              "U.S. Sues Google for Alleged Antitrust Violations in Its Ad-Tech Business  The Wall Street Journal",
            url: "https://www.wsj.com/articles/u-s-sues-google-for-alleged-antitrust-violations-in-its-ad-tech-business-11674582792",
            urlToImage: "https://images.wsj.net/im-626385/social",
            publishedAt: "2023-01-24T17:53:00Z",
            content:
              "The Justice Department filed an antitrust lawsuit alleging that Google abuses its role brokering digital advertising across much of the internet, a major expansion of the legal challenges the company… [+409 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Patrick Thomas",
            title:
              "Tyson Foods CFO Pleads Guilty to Public Intoxication, Trespassing Charges",
            description:
              "John Randal Tyson agreed to pay a $150 fine on both charges stemming from November arrest",
            url: "https://www.wsj.com/articles/tyson-foods-cfo-pleads-guilty-to-public-intoxication-trespassing-charges-11674578811",
            urlToImage: "https://images.wsj.net/im-709158/social",
            publishedAt: "2023-01-24T17:07:10Z",
            content:
              "Tyson Foods Inc. Chief Financial Officer John R. Tyson pleaded guilty to charges after being arrested in November for falling asleep in a house that wasnt his, according to the Fayetteville, Ark., pr… [+259 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Dean Seal",
            title:
              "Amazon Unveils Generic Prescription Drug Plan for Prime Members",
            description:
              "The new Prime membership benefit, dubbed RxPass, will offer unlimited access to commonly prescribed generic medications",
            url: "https://www.wsj.com/articles/amazon-unveils-generic-prescription-drug-plan-for-prime-members-11674568524",
            urlToImage: "https://images.wsj.net/im-709043/social",
            publishedAt: "2023-01-24T15:04:12Z",
            content:
              "Amazon.com Inc. is launching a new benefit for Prime members that offers unlimited access to commonly prescribed generic medications for $5 a month, in the e-commerce giants latest move into healthca… [+133 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Elizabeth Bernstein",
            title: "Happy Memory Can Help Fall Asleep?",
            description:
              "Trouble sleeping? Try a technique called savoring, or imagining a positive experience in great detail",
            url: "https://www.wsj.com/articles/a-happy-memory-can-help-you-fall-asleep-if-you-know-how-to-use-it-11674527348",
            urlToImage: "https://images.wsj.net/im-702135/social",
            publishedAt: "2023-01-24T13:46:38Z",
            content:
              "Lying in bed each night, Andy Buelow often finds himself thinking one thought over and over: How awesome it was to ride the ferry across Lake Michigan as a kid.\r\nMr. Buelow pictures himself back on t… [+112 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "William Boston",
            title: "Ford in Talks to Sell German Plant to China’s BYD",
            description:
              "A deal would mark a big step overseas for China’s electric-car industry",
            url: "https://www.wsj.com/articles/ford-in-talks-to-sell-german-plant-to-chinas-byd-11674564916",
            urlToImage: "https://images.wsj.net/im-709024/social",
            publishedAt: "2023-01-24T12:57:55Z",
            content:
              "BERLINFord Motor Co. is in talks with Chinese electric-vehicle maker BYD Co. over the sale of a manufacturing plant in Germany, according to people familiar with the discussions.\r\nOfficials from Ford… [+273 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Deborah Acosta",
            title:
              "Months After Ian Hit, Many in Fort Myers Living in Tents...",
            description:
              "Months After Ian Hit, Many in Fort Myers Living in Tents...\r\n\n \n \n \n (First column, 10th story, link)",
            url: "https://www.wsj.com/articles/months-after-hurricane-ian-hit-florida-many-in-fort-myers-are-living-in-tents-11674526871",
            urlToImage: "https://images.wsj.net/im-708389/social",
            publishedAt: "2023-01-24T12:25:37Z",
            content:
              "People in Fort Myers, Fla., are scrambling to find a place to live after \r\nHurricane Ian ravaged the area in September, compelling some residents to camp in places where their homes once stood.  The … [+351 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Thomas Gryta",
            title:
              "GE Earnings Climb on Strong Demand for Jet Engines, Power Equipment",
            description:
              "Company generated $4.3 billion in cash flow in fourth quarter",
            url: "https://www.wsj.com/articles/general-electric-ge-q4-earnings-report-2022-11674561785",
            urlToImage: "https://images.wsj.net/im-706206/social",
            publishedAt: "2023-01-24T12:05:00Z",
            content:
              "General Electric Co. reported strong demand for its jet engines and power equipment in the fourth quarter, lifting the manufacturer to a quarterly profit and higher revenue than a year ago.\r\nThe fina… [+268 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Anna Hirtenstein",
            title:
              "Stock Futures Slip as Investors Parse Earnings, Await Business-Activity Data - The Wall Street Journal",
            description:
              "Stock Futures Slip as Investors Parse Earnings, Await Business-Activity Data  The Wall Street Journal",
            url: "https://www.wsj.com/articles/global-stocks-markets-dow-update-01-24-2023-11674560633",
            urlToImage: "https://images.wsj.net/im-708978/social",
            publishedAt: "2023-01-24T11:45:00Z",
            content:
              "U.S. stock futures inched down Tuesday, as a series of major companies reported earnings, and ahead of widely watched surveys of business activity. \r\nFutures tied to the S&amp;P 500 slipped 0.3%, poi… [+181 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Katie Deighton",
            title:
              "Companies Tap Tech Behind ChatGPT to Make Customer-Service Chatbots Smarter - The Wall Street Journal",
            description:
              "Some businesses are figuring out how to harness the buzzy technology to improve online chat functions, though executives are wary of AI’s tendency to get things wrong",
            url: "https://www.wsj.com/articles/companies-tap-tech-behind-chatgpt-to-make-customer-service-chatbots-smarter-11674509622",
            urlToImage: "https://images.wsj.net/im-708695/social",
            publishedAt: "2023-01-24T11:00:00Z",
            content:
              "Businesses hope the artificial-intelligence technology behind ChatGPT can turn ordinary chatbots into impressive fonts of information, potentially transforming customer service. But many executives s… [+6124 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Tom Dotan",
            title:
              "Microsoft Earnings Likely Slid Last Quarter Amid Economic Concerns",
            description:
              "Microsoft Earnings Likely Slid Last Quarter Amid Economic Concernswsj.com",
            url: "https://www.wsj.com/articles/microsoft-msft-q2-earnings-report-2023-11674522540",
            urlToImage: "https://images.wsj.net/im-702425/social",
            publishedAt: "2023-01-24T10:37:18Z",
            content:
              "Microsoft Corp. likely recorded its slowest sales growth in more than six years last quarter as economic concerns cooled demand for its software and \r\ncloud services.The Redmond, Wash., firms revenue… [+332 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Charley Grant",
            title:
              "Investors Await Tech Earnings in Next Test for Markets - The Wall Street Journal",
            description:
              "Investors Await Tech Earnings in Next Test for Markets  The Wall Street Journal",
            url: "https://www.wsj.com/articles/investors-await-tech-earnings-in-next-test-for-markets-11674520550",
            urlToImage: "https://images.wsj.net/im-708709/social",
            publishedAt: "2023-01-24T10:30:00Z",
            content:
              "Technology stocks are off to a \r\nstrong start after enduring a miserable 2022. The first big test of the new years rally is on tap.Even after their sharp selloff, the five largest U.S. companiesApple… [+214 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Talal Ansari, Ginger Adams Otis",
            title:
              "Iowa Shooting That Left Two Dead Was Likely Gang-Related, Des Moines Police Say - The Wall Street Journal",
            description:
              "<ol><li>Iowa Shooting That Left Two Dead Was Likely Gang-Related, Des Moines Police Say  The Wall Street Journal\r\n</li><li>Two students killed at Iowa charter school shooting  NBC News\r\n</li><li>Police: 2 students killed, man hurt in Des Moines shooting  Yaho…",
            url: "https://www.wsj.com/articles/iowa-shooting-leaves-two-students-dead-employee-wounded-11674513092",
            urlToImage: "https://images.wsj.net/im-708765/social",
            publishedAt: "2023-01-24T10:27:00Z",
            content:
              "Police are investigating a possible gang-related motive after two students were shot dead at an Iowa education center for at-risk youth.\r\nTwo male students, 18 years old and 16 years old, were fatall… [+136 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Joe Wallace, Hannah Miao",
            title:
              "美国股市走高，投资者押注加息将放缓，等待众多公司财报 - Wall Street Journal",
            description:
              "<ol><li>美国股市走高，投资者押注加息将放缓，等待众多公司财报  Wall Street Journal\r\n</li><li>1月23日美股成交前20：微软向马斯克创立的OpenAI追加数十亿美元投资  手机新浪网\r\n</li><li>标普500指数上涨  Wall Street Journal\r\n</li><li>在Google 新闻上查看完整报道</li></ol>",
            url: "https://cn.wsj.com/articles/美国股市走高-投资者押注加息将放缓-等待众多公司财报-11674519824",
            urlToImage: "https://images.wsj.net/im-708202/social",
            publishedAt: "2023-01-24T00:23:55Z",
            content:
              "50047.204,019.811.2%254.0733,629.560.8%223.9811,364.412%\r\n500Advanced Micro Devices (AMD)6.4676.539.2%(Nvidia Corp., NVDA)13.54191.93 7.6%\r\nSalesforce...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Jared Malsin, Sune Engel Rasmussen",
            title: "Erdogan to Block Over Quran Burning?",
            description:
              "Erdogan to Block Over Quran Burning?\r\n\n \n \n \n (Third column, 11th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:INCOMING: Putin sets up air defense system near secret forest palace...\r\nU.S. Says Finland, Sweden Ready to Join NATO...",
            url: "https://www.wsj.com/articles/turkeys-erdogan-threatens-to-block-swedens-nato-entrance-over-quran-burning-11674498389",
            urlToImage: "https://images.wsj.net/im-708478/social",
            publishedAt: "2023-01-23T21:58:39Z",
            content:
              "ISTANBULTurkeys President Recep Tayyip Erdogan on Monday issued a new threat to \r\nblock Swedens entrance to the North Atlantic Treaty Organization after a far-right politician publicly burned a copy … [+338 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Joe Wallace, Hannah Miao",
            title:
              "Stocks Rise as Investors Bet on Slowing Rates, Await Earnings - The Wall Street Journal",
            description:
              "<ol><li>Stocks Rise as Investors Bet on Slowing Rates, Await Earnings  The Wall Street Journal\r\n</li><li>Stock market news live updates: Tech leads stocks higher as big earnings week begins  Yahoo Finance\r\n</li><li>Stock futures are little changed as Wall Str…",
            url: "https://www.wsj.com/articles/global-stocks-markets-dow-update-01-23-2023-11674477017",
            urlToImage: "https://images.wsj.net/im-708202/social",
            publishedAt: "2023-01-23T21:45:00Z",
            content:
              "U.S. stocks rose Monday as investors bet the Federal Reserve will dial back its interest-rate increases and braced for a busy week of corporate earnings reports.\r\nThe S&amp;P 500 added 47.20 points, … [+165 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Nidhi Subbaraman",
            title:
              "Photos: How Sea Spiders and Other Creatures Could Unlock the Secrets of Tissue Regeneration - The Wall Street Journal",
            description:
              "Photos: How Sea Spiders and Other Creatures Could Unlock the Secrets of Tissue Regeneration  The Wall Street JournalView Full Coverage on Google News",
            url: "https://www.wsj.com/story/photos-how-sea-spiders-and-other-creatures-could-unlock-the-secrets-of-tissue-regeneration-2b69b086",
            urlToImage: "https://images.wsj.net/im-707331/social",
            publishedAt: "2023-01-23T20:11:31Z",
            content:
              "The axolotl can regrow multiple organs, including lungs, heart and brain. When regenerative cells from a donor salamander were grafted into the arm of another, they grew into an extra limb. Scientist… [+130 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Jan Wolfe",
            title:
              "Jan. 6 Rioter Richard Barnett, Who Put Feet on Desk in Nancy Pelosi's Office, Convicted on Eight Counts - The Wall Street Journal",
            description:
              "<ol><li>Jan. 6 Rioter Richard Barnett, Who Put Feet on Desk in Nancy Pelosi's Office, Convicted on Eight Counts  The Wall Street Journal\r\n</li><li>Man who rested feet on desk in Pelosi's office on Jan. 6 found guilty on 8 counts  CNN\r\n</li><li>Jury finds Jan.…",
            url: "https://www.wsj.com/articles/jury-convicts-jan-6-rioter-richard-barnett-who-put-feet-on-desk-in-nancy-pelosis-office-11674494845",
            urlToImage: "https://images.wsj.net/im-706413/social",
            publishedAt: "2023-01-23T18:02:00Z",
            content:
              "WASHINGTONA jury on Monday convicted an Arkansas man who posed for photographs with his feet on a desk in then-House Speaker \r\nNancy Pelosis office during the Jan. 6, 2021, riot at the Capitol.After … [+286 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Robert McMillan",
            title: "Wetsuit Shaming in San Fran Divides Bay Area Swimmers...",
            description:
              "Wetsuit Shaming in San Fran Divides Bay Area Swimmers...\r\n\n \n \n \n (First column, 12th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Bathroom Bans for Trans Set for Supreme Court...",
            url: "https://www.wsj.com/articles/san-francisco-bay-swimming-wetsuits-11674487104",
            urlToImage: "https://images.wsj.net/im-694507/social",
            publishedAt: "2023-01-23T16:37:37Z",
            content:
              "SAN FRANCISCOA year ago, Adele Gower used to cherish daily 90-minute swims in the frigid Bay here. Now she can only stand it for 30 minutes. \r\nShe abandoned her wetsuit after being shamed by fellow S… [+137 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author:
              "Dan Frosch, Zusha Elinson, José A. Alvarado Jr. for The Wall Street Journal",
            title: "Juvenile Crime Surges, Reversing Long Decline...",
            description:
              "Violence among children has soared across the country since 2020. One consequence: a mounting toll of young victims.",
            url: "https://www.wsj.com/articles/violent-crime-rate-juvenile-11674485556",
            urlToImage: "https://images.wsj.net/im-707777/social",
            publishedAt: "2023-01-23T15:31:37Z",
            content:
              "A 13-year-old boy ran through the Bronx streets one May afternoon last year, chased by two teens on a scooter. Surveillance video showed him frantically trying to open the doors of an assisted-living… [+516 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Andrew Duehren",
            title: null,
            description:
              "Treasury Secretary says the Federal Reserve would likely not agree to such a scheme",
            url: "https://www.wsj.com/articles/janet-yellen-dismisses-minting-1-trillion-coin-to-avoid-default-11674417541",
            urlToImage: "https://images.wsj.net/im-708108/social",
            publishedAt: "2023-01-23T11:20:02Z",
            content:
              "LUSAKA, ZambiaTreasury Secretary Janet Yellen said the Federal Reserve likely wouldnt accept a $1 trillion platinum coin if the Biden administration tried to mint one to avoid breaching the \r\ndebt li… [+432 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Asa Fitch",
            title: "Arm-Based Chips Make Inroads With Apple, Amazon",
            description:
              "British chip-design company puts pressure on Intel while preparing for IPO",
            url: "https://www.wsj.com/articles/arm-based-chips-make-inroads-with-apple-amazon-11674436002",
            urlToImage: "https://images.wsj.net/im-706897/social",
            publishedAt: "2023-01-23T11:03:18Z",
            content:
              "A new generation of chips using Arm Ltd. technology is heaping pressure on Intel Corp. as the British chip-design specialist prepares for what could be \r\none of the years highest-profile public listi… [+417 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Andrew Restuccia, Stephanie Armour, Annie Linskey",
            title: "Jeff Zients预计将出任新白宫幕僚长 - Wall Street Journal",
            description:
              "<ol><li>Jeff Zients预计将出任新白宫幕僚长  Wall Street Journal\r\n</li><li>白宫幕僚长克莱因预计不久离任  美国之音中文网 - VOA Mandarin\r\n</li><li>拜登还没宣布竞选连任，白宫办公厅主任被曝要离职  瞭望东方周刊\r\n</li><li>美国白宫幕僚长据报很快将辞职   Lianhe Zaobao\r\n</li><li>消息：拜登将任命前防疫协调员齐恩茨为新白宫幕僚长   Lianhe Zaobao\r\n</li><li>在Google 新闻上查看完…",
            url: "https://cn.wsj.com/articles/jeff-zients预计将出任新白宫幕僚长-11674435906",
            urlToImage: "https://images.wsj.net/im-708107/social",
            publishedAt: "2023-01-23T01:25:00Z",
            content:
              "(Joe Biden)Jeff Zients\r\n·(Ron Klain)(Washington Post)ZientsZients\r\n...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Lauren Thomas, Laura Cooper",
            title:
              "Elliott Management Takes Big Stake in Salesforce - WSJ - The Wall Street Journal",
            description:
              "<ol><li>Elliott Management Takes Big Stake in Salesforce - WSJ  The Wall Street Journal\r\n</li><li>Activist investor Elliott eyes Salesforce  Axios\r\n</li><li>Activist investor Elliott Management takes big stake in Salesforce after software giant sheds workers,…",
            url: "https://www.wsj.com/articles/activist-takes-big-stake-in-salesforce-11674432531",
            urlToImage: "https://images.wsj.net/im-708124/social",
            publishedAt: "2023-01-23T00:08:00Z",
            content:
              "Activist investor Elliott Management Corp. has made a multibillion-dollar investment in Salesforce Inc., according to people familiar with the matter, adding to the pressures facing the business-soft… [+231 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "William P. Barr",
            title:
              "Opinion | Congress Must Halt Big Tech's Power Grab - The Wall Street Journal",
            description:
              "Lawmakers don’t have to rewrite the antitrust laws; instead, these three steps could make a difference.",
            url: "https://www.wsj.com/articles/congress-must-halt-big-techs-power-grab-google-apple-amazon-facebook-social-media-advertising-monopoly-11674410960",
            urlToImage: "https://images.wsj.net/im-707989/social",
            publishedAt: "2023-01-22T20:27:00Z",
            content:
              "Big Tech has far too much power. Lawmakers from both parties agree, but for years Congress has been all talk and no action. Meanwhile, tech giants are threatening to use their control over digital pl… [+471 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Marina Vitaglione",
            title:
              "See How the World Is Ringing In the Lunar New Year - The Wall Street Journal",
            description:
              "<ol><li>See How the World Is Ringing In the Lunar New Year  The Wall Street Journal\r\n</li><li>China still grappling with COVID surge as Lunar New Year celebrations kick off  CBS Evening News\r\n</li><li>China rings in Year of Rabbit with most COVID rules lifted…",
            url: "https://www.wsj.com/story/see-how-the-world-is-ringing-in-the-lunar-new-year-64fa8ff1",
            urlToImage: "https://images.wsj.net/im-707917",
            publishedAt: "2023-01-22T16:49:34Z",
            content:
              "Panama City, Panama\r\nIn Panama, performers prepared for a Lion Dance, a tradition that is believed to bring good fortune. In the Chinese zodiac, each year is represented by one of 12 animals. Sunday … [+79 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Corinne Ramey",
            title: "Sue Thy Neighbor: Homeowner Spats Get Nastier...",
            description:
              "Squabbles prompt the aggrieved to blast hoses, toss mulch, hire lawyers; ‘a bare-knuckle boxing match’",
            url: "https://www.wsj.com/articles/neighbor-spats-fences-trees-lawsuits-nastier-11674253978",
            urlToImage: "https://images.wsj.net/im-707488/social",
            publishedAt: "2023-01-22T15:16:37Z",
            content:
              "Daniel Belzil, an attorney who represents plaintiffs in insurance disputes, has been in plenty of legal battles. None prepared him for the acrimony that ensued when his neighbor erected a chain-link … [+112 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Dan Frosch",
            title:
              "Worst Avian Flu in U.S. History Is Hitting Poultry, Wild Birds, Even Bears",
            description:
              "Worst Avian Flu in U.S. History Is Hitting Poultry, Wild Birds, Even Bearswsj.com",
            url: "https://www.wsj.com/articles/worst-avian-flu-in-u-s-history-is-hitting-poultry-wild-birds-even-bears-11674366891",
            urlToImage: "https://images.wsj.net/im-707474/social",
            publishedAt: "2023-01-22T10:43:38Z",
            content:
              "Nearly a year after it began, \r\nthe worst avian-influenza outbreak in U.S. history is continuing to decimate poultry flocks across the Midwest and Colorado, frustrating efforts to keep the virus from… [+541 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Annie Linskey, Aruna Viswanatha, Sadie Gurman",
            title:
              "More Classified Documents Found at President Biden's Delaware Home - The Wall Street Journal",
            description:
              "<ol><li>More Classified Documents Found at President Biden's Delaware Home  The Wall Street Journal\r\n</li><li>Biden Documents Live Update | More Classified Documents Found In New Search Of Biden's Home | News18  CNN-News18\r\n</li><li>6 additional classified do…",
            url: "https://www.wsj.com/articles/more-classified-documents-found-at-bidens-delaware-home-11674346611",
            urlToImage: "https://images.wsj.net/im-707965/social",
            publishedAt: "2023-01-22T02:50:00Z",
            content:
              "WASHINGTONA Justice Department search of President Bidens home in Wilmington, Del., Friday prompted authorities to take possession of six additional items with classified markings and some related ma… [+459 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Vipal Monga",
            title:
              "Canada Pursues Private Options to Ease Healthcare Backlogs - The Wall Street Journal",
            description:
              "<ol><li>Canada Pursues Private Options to Ease Healthcare Backlogs  The Wall Street Journal\r\n</li><li>OMA president supports Ford's clinic plan, but must keep single-payer  SooToday\r\n</li><li>Premiers are united in push for more health funding from Ottawa: Fo…",
            url: "https://www.wsj.com/articles/canada-pursues-private-options-to-ease-healthcare-backlogs-11674316841",
            urlToImage: "https://images.wsj.net/im-707639/social",
            publishedAt: "2023-01-21T16:00:00Z",
            content:
              "TORONTOOntario is the latest Canadian province that is turning to private healthcare options in a bid to fix growing problems with the publicly funded healthcare system. \r\nCanadas most-populous provi… [+333 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title: "Why Using Phone Before Bed Hijacks Sleep...",
            description:
              "Tech can be both the problem and the solution to a better night’s sleep",
            url: "https://www.wsj.com/articles/using-your-phone-before-bed-hijacks-your-sleep-but-not-for-the-reason-you-think-11674238695",
            urlToImage: "https://images.wsj.net/im-705590/social",
            publishedAt: "2023-01-21T15:00:04Z",
            content:
              "Using Your Phone Before Bed Hijacks Your Sleep, But Not for the Reason You ThinkWe’ve all reached for our phones in the middle of the night, only to be pulled into some kind of rabbit hole that keeps… [+1126 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Jim Carlton",
            title:
              "California Storms Leave Billions of Dollars in Damage to Businesses, Homes and Infrastructure - The Wall Street Journal",
            description:
              "California Storms Leave Billions of Dollars in Damage to Businesses, Homes and Infrastructure  The Wall Street Journal",
            url: "https://www.wsj.com/articles/california-storms-leave-billions-of-dollars-in-damage-to-businesses-homes-and-infrastructure-11674264974",
            urlToImage: "https://images.wsj.net/im-707556/social",
            publishedAt: "2023-01-21T13:00:00Z",
            content:
              "ANTIOCH, Calif.Paradise Skate Roller Rink was preparing to host a New Years Eve bash when floodwaters poured in from a nearby creek, destroying the wooden floor and leaving the decades-old business i… [+338 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Eric Wallerstein",
            title:
              "Crypto Banks Borrow Billions From Home-Loan Banks to Plug Shortfalls",
            description:
              "Signature and Silvergate turn to government-chartered lenders after customer withdrawals surge",
            url: "https://www.wsj.com/articles/crypto-banks-borrow-billions-from-home-loan-banks-to-plug-shortfalls-11674263424",
            urlToImage: "https://images.wsj.net/im-706450/social",
            publishedAt: "2023-01-21T10:30:00Z",
            content:
              "Two of the biggest banks to cryptocurrency companies are rushing to stem a flood of customer withdrawals by borrowing billions of dollars from Federal Home Loan Banks, the system originally designed … [+364 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Christopher Mims",
            title:
              "New Display Tech Is Coming From Apple, Google, Meta and Others - The Wall Street Journal",
            description:
              "Our phones, smartwatches and smart glasses will soon get longer battery life and better visibility in daylight",
            url: "https://www.wsj.com/articles/new-display-tech-is-coming-from-apple-google-meta-microled-11674248409",
            urlToImage: "https://images.wsj.net/im-706795/social",
            publishedAt: "2023-01-21T05:00:00Z",
            content:
              "American adults spend the \r\nmajority of their waking hours looking at screensand yet most of those screens, including the one youre probably reading this on now, are based on the same LCD display tec… [+527 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Bob Henderson",
            title:
              "The Offshore Oil Business Is Gushing Again - The Wall Street Journal",
            description:
              "Rigs that haven’t been used in years are setting out to sea as demand for energy surges. ‘Everyone started drilling again.’",
            url: "https://www.wsj.com/articles/the-offshore-oil-business-is-gushing-again-11674277212",
            urlToImage: "https://images.wsj.net/im-705959/social",
            publishedAt: "2023-01-21T05:00:00Z",
            content:
              "The $1.2 billion Deepwater Titan sat idle in a Singaporean shipyard for five years, looking like an abandoned cruise ship with a derrick attached to its deck. Soon this vessel that spans nearly three… [+655 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Andrew Duehren",
            title:
              "耶伦：如果美国突破债务上限，财政部无法防止违约 - Wall Street Journal",
            description:
              "<ol><li>耶伦：如果美国突破债务上限，财政部无法防止违约  Wall Street Journal\r\n</li><li>美国财政部启动“非常措施”以避免突破债务上限  美国之音中文网 - VOA Mandarin\r\n</li><li>这个数字暴露了美国的大危机！“麦卡锡被架在火上烤”  新浪\r\n</li><li>美達到債務上限 財政部採取「非常措施」  大纪元\r\n</li><li>美国接近触及债务上限，财政部采取特别措施以避免违约  Wall Street Journal\r\n</li><li>在Google…",
            url: "https://cn.wsj.com/articles/耶伦-如果美国突破债务上限-财政部无法防止违约-11674263107",
            urlToImage: "https://images.wsj.net/im-707558/social",
            publishedAt: "2023-01-21T01:05:00Z",
            content: "(Janet Yellen)\r\n·(Macky Sall)\r\n31.46\r\n...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Belle Lin",
            title: "Capital One Job Cuts Signal Trouble for IT Labor Market",
            description:
              "Enterprise IT departments have largely been isolated from recent layoffs hitting the tech sector",
            url: "https://www.wsj.com/articles/capital-one-job-cuts-signal-trouble-for-it-labor-market-11674251823",
            urlToImage: "https://images.wsj.net/im-707521/social",
            publishedAt: "2023-01-20T21:57:00Z",
            content:
              "IT positions have largely been seen as insulated from the job cuts that have hit workers at major technology firms like Alphabet Inc. and Microsoft Corp., but the Capital One layoffs affecting 1,100 … [+4583 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Mike Colias, River Davis",
            title:
              "GM, LG Scrap Plans to Partner on Fourth U.S. Battery Factory - WSJ - The Wall Street Journal",
            description:
              "<ol><li>GM, LG Scrap Plans to Partner on Fourth U.S. Battery Factory - WSJ  The Wall Street Journal\r\n</li><li>GM, LG end plans for fourth U.S. battery cell plant as automaker seeks new partner  CNBC\r\n</li><li>Breaking: Report: Major snag in plans for proposed…",
            url: "https://www.wsj.com/articles/gm-lg-scrap-plans-to-partner-on-fourth-u-s-battery-factory-11674241152",
            urlToImage: "https://images.wsj.net/im-707503/social",
            publishedAt: "2023-01-20T19:12:00Z",
            content:
              "A U.S. battery-cell factory that had been in the works between General Motors Co. and LG Energy Solution has been shelved indefinitely, people familiar with the matter said, marking a pause in the \r\n… [+325 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Katherine Blunt",
            title: "Why the Debate Over Gas-Stove Bans Isn’t Done",
            description:
              "Biden administration says it doesn’t support banning the appliances,  as the future of natural gas in the home remains unsettled",
            url: "https://www.wsj.com/articles/gas-stove-ban-debate-11674165731",
            urlToImage: "https://images.wsj.net/im-706519/social",
            publishedAt: "2023-01-20T14:22:09Z",
            content:
              "The uproar over the idea of a federal ban on gas stoves has brought fresh attention to an effort that has attracted support and opposition around the country.\r\nThe controversy erupted earlier in Janu… [+357 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title:
              "Mexican Officials, Witnesses Recount Gunbattle That Captured 'Chapo' Son...",
            description:
              "Arrest of Ovidio Guzmán, a pioneer in producing and smuggling fentanyl, was blow to his Sinaloa cartel, but labs quickly reopen",
            url: "https://www.wsj.com/articles/mexican-officials-and-witnesses-recount-gunbattle-that-captured-son-of-joaquin-el-chapo-guzman-11674163002",
            urlToImage: "https://images.wsj.net/im-704774/social",
            publishedAt: "2023-01-20T12:00:04Z",
            content:
              "Mexican Officials and Witnesses Recount Gunbattle That Captured Son of Joaquín ‘El Chapo’ GuzmánJESÚS MARÍA, Mexico—In the predawn hours of Jan. 5, hundreds of Sinaloa cartel gunmen raced to this dus… [+1030 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title: "NOONAN: George Has Got to Go...",
            description:
              "He’s a bad example to the young, an embarrassment to the old, an insult to the institution and America.",
            url: "https://www.wsj.com/articles/george-santos-has-got-to-go-gop-republicans-embarrassment-politics-congress-lies-fake-truth-11674167450",
            urlToImage: "https://images.wsj.net/im-706810/social",
            publishedAt: "2023-01-20T12:00:04Z",
            content:
              "Opinion | George Santos Has Got to Go\r\nWonder Land: Democrats stoked the Trump bonfire for years. Now it’s their turn in political hell. Images: Getty Images Composite: Mark KellyI’m sorry, but it ke… [+1812 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Sam Schechner",
            title: "Google Parent Alphabet to Cut 12,000 Jobs",
            description:
              "Decision marks the company’s largest-ever round of layoffs as it copes with a darkened economic outlook",
            url: "https://www.wsj.com/articles/google-parent-alphabet-to-cut-12-000-jobs-11674210626",
            urlToImage: "https://images.wsj.net/im-707107/social",
            publishedAt: "2023-01-20T10:30:00Z",
            content:
              "Google parent Alphabet Inc. said it plans to eliminate roughly 12,000 jobs, reducing its staff by 6% and marking the companys largest-ever round of layoffs as it copes with a darkened economic outloo… [+209 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Jinjoo Lee",
            title: "California Has a Gas-Price Mystery: Too High, But Why?",
            description:
              "Drivers in the most populous U.S. state are paying more at the pump than anyone else. California’s gas taxes and its strict clean-air policies don’t explain away all of the $1.23-a-gallon difference.",
            url: "https://www.wsj.com/articles/californias-high-gas-prices-regulation-11674163435",
            urlToImage: "https://images.wsj.net/im-703471/social",
            publishedAt: "2023-01-20T10:30:00Z",
            content:
              "Why do Californias drivers pay so much for gas?\r\nCalifornias retail gas price was $4.32 a gallon in December 2022, while it was $3.09 a gallon on average elsewhere in the U.S. That is a $1.23-per-gal… [+404 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Mike Cherney",
            title:
              "How New Zealand's Jacinda Ardern Went from Pandemic Hero to Political Casualty - The Wall Street Journal",
            description:
              "<ol><li>How New Zealand's Jacinda Ardern Went from Pandemic Hero to Political Casualty  The Wall Street Journal\r\n</li><li>Should You Quit Your Job?  The New York Times\r\n</li><li>Priya Ramani writes | Jacinda Ardern’s resignation: Male leaders don’t think abou…",
            url: "https://www.wsj.com/articles/how-new-zealands-jacinda-ardern-went-from-pandemic-hero-to-political-casualty-11674206548",
            urlToImage: "https://images.wsj.net/im-707089/social",
            publishedAt: "2023-01-20T09:22:00Z",
            content:
              "SYDNEYJacinda Arderns tough response to the \r\nCovid-19 pandemic catapulted her party to a historic election landslide in late 2020. But about a year later, her popularity began to wane.New Zealands s… [+399 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Vicky Ge Huang, Caitlin Ostroff",
            title:
              "Crypto Lender Genesis Files for Bankruptcy, Ensnared by FTX Collapse - The Wall Street Journal",
            description:
              "<ol><li>Crypto Lender Genesis Files for Bankruptcy, Ensnared by FTX Collapse  The Wall Street Journal\r\n</li><li>Crypto lender Genesis files for bankruptcy in latest blow to Barry Silbert's DCG empire  CNBC\r\n</li><li>Crypto firm Genesis prepares to file for ba…",
            url: "https://www.wsj.com/articles/crypto-lender-genesis-files-for-bankruptcy-ensnared-by-ftx-collapse-11674191903",
            urlToImage: "https://images.wsj.net/im-707063/social",
            publishedAt: "2023-01-20T07:09:00Z",
            content:
              "Cryptocurrency lender Genesis Global Holdco LLC and two of its lending subsidiaries filed for bankruptcy protection late Thursday night in New York, the latest domino to fall after the failure of cry… [+432 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Sarah Krouse",
            title:
              "Netflix Co-Founder Reed Hastings Transitions to Chairman Role, With Greg Peters Elevated as Co-CEO - The Wall Street Journal",
            description:
              "<ol><li>Netflix Co-Founder Reed Hastings Transitions to Chairman Role, With Greg Peters Elevated as Co-CEO  The Wall Street Journal\r\n</li><li>Netflix founder Reed Hastings is giving up his CEO role  CNBC\r\n</li><li>Netflix co-founder Reed Hastings to step down…",
            url: "https://www.wsj.com/articles/netflix-nflx-q4-earnings-report-2022-11674083032",
            urlToImage: "https://images.wsj.net/im-706744/social",
            publishedAt: "2023-01-20T00:49:00Z",
            content:
              "Netflix Inc. said co-founder Reed Hastings has stepped down as co-chief executive and will become executive chairman, in a leadership shuffle that comes as the streaming giant beat its own forecast f… [+227 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Talal Ansari",
            title:
              "'Galactic Panorama' of Milky Way Details 3.3 Billion Celestial Objects - The Wall Street Journal",
            description:
              "'Galactic Panorama' of Milky Way Details 3.3 Billion Celestial Objects  The Wall Street JournalView Full Coverage on Google News",
            url: "https://www.wsj.com/articles/galactic-panorama-of-milky-way-details-3-3-billion-celestial-objects-11674169406",
            urlToImage: "https://images.wsj.net/im-706929/social",
            publishedAt: "2023-01-19T23:03:00Z",
            content:
              "Astronomers have identified 3.32 billion celestial objects in the Milky Way in unprecedented detail.\r\nThe galactic panorama of stars, gas, dust and a supermassive black hole known as Sagittarius A* w… [+269 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Will Feuer",
            title:
              "T-Mobile Says Hackers Stole Data on About 37 Million Customers",
            description:
              "Carrier says addresses, birth dates and other personal records were exposed, but not financial records",
            url: "https://www.wsj.com/articles/t-mobile-says-hackers-stole-data-on-about-37-million-customers-11674166048",
            urlToImage: "https://images.wsj.net/im-706800/social",
            publishedAt: "2023-01-19T22:07:00Z",
            content:
              "T-Mobile US Inc. said hackers accessed data, including birth dates and billing addresses, for about 37 million of its customers, the \r\nsecond major security breach at the wireless company.The company… [+296 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Eliza Collins, Michelle Hackman",
            title:
              "Senators Pursue Deal on Border Security and Path to Citizenship for Dreamers - The Wall Street Journal",
            description:
              "Senators Pursue Deal on Border Security and Path to Citizenship for Dreamers  The Wall Street JournalView Full Coverage on Google News",
            url: "https://www.wsj.com/articles/senators-pursue-deal-on-border-security-and-path-to-citizenship-for-dreamers-11674101146",
            urlToImage: "https://images.wsj.net/im-705450/social",
            publishedAt: "2023-01-19T19:45:00Z",
            content:
              "SOMERTON, Ariz.A bipartisan group of senators is pushing ahead in the new Congress with efforts to reach an agreement on \r\nborder security and immigration policy, after talks ran out of time last yea… [+386 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Joe Palazzolo",
            title:
              "WWE’s Vince McMahon Settles With Ex-Wrestling Referee Who Accused Him of Rape",
            description:
              "Multimillion-dollar settlement averts a public legal fight as executive chairman pursues possible WWE sale",
            url: "https://www.wsj.com/articles/wwes-vince-mcmahon-settles-with-ex-wrestling-referee-who-accused-him-of-rape-11674149751",
            urlToImage: "https://images.wsj.net/im-705676/social",
            publishedAt: "2023-01-19T17:35:00Z",
            content:
              "Vince McMahon, the executive chairman of World Wrestling Entertainment Inc., has agreed to a multimillion-dollar legal settlement with a former wrestling referee who accused him of raping her in 1986… [+224 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Will Feuer",
            title: "Amazon to Wind Down Charity-Donation Program AmazonSmile",
            description:
              "Move comes as e-commerce giant lays off more than 18,000 employees",
            url: "https://www.wsj.com/articles/amazon-to-wind-down-charity-donation-program-amazonsmile-11674144274",
            urlToImage: "https://images.wsj.net/im-706215/social",
            publishedAt: "2023-01-19T16:11:46Z",
            content:
              "Amazon.com Inc. said it would shut down its charitable-donation program AmazonSmile next month, saying the program was spread too thin to have the impact the company had originally hoped.\r\nThrough Am… [+202 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Alexander Saeedy, Alexander Osipovich",
            title:
              "New FTX Chief Says Crypto Exchange Could Restart - The Wall Street Journal",
            description:
              "<ol><li>New FTX Chief Says Crypto Exchange Could Restart  The Wall Street Journal\r\n</li><li>New FTX Head Says Crypto Exchange Could Be Revived: Wall Street Journal  CoinDesk\r\n</li><li>FTX's new CEO says the failed crypto exchange could be revived  Markets Ins…",
            url: "https://www.wsj.com/articles/new-ftx-chief-says-crypto-exchange-could-restart-11674143168",
            urlToImage: "https://images.wsj.net/im-706191/social",
            publishedAt: "2023-01-19T15:46:00Z",
            content:
              "FTXs new chief executive, John J. Ray III, said hes looking into the possibility of reviving the bankrupt crypto exchange as he works to return money to the failed companys customers and creditors.  … [+366 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Corey S. Powell",
            title:
              "NASA's Mars Helicopter Opens the Door for Flight on Other Worlds - The Wall Street Journal",
            description:
              "<ol><li>NASA's Mars Helicopter Opens the Door for Flight on Other Worlds  The Wall Street Journal\r\n</li><li>See Ingenuity's footprints on Mars in flight 39 time-lapse + statistics  VideoFromSpace\r\n</li><li>View Full Coverage on Google News</li></ol>",
            url: "https://www.wsj.com/articles/nasas-mars-helicopter-opens-the-door-for-flight-on-other-worlds-11674142489",
            urlToImage: "https://images.wsj.net/im-700626/social",
            publishedAt: "2023-01-19T15:34:00Z",
            content:
              "On April 19, 2021, a toaster oven-size helicopter named Ingenuity spun its rotors and rose 10 feet above the surface of Mars, \r\nbecoming the first craft to perform a powered flight on a world beyond … [+426 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: null,
            title:
              "Opinion | Responding to President Biden on Big Tech - The Wall Street Journal",
            description:
              "He touts ‘legislation to hold Big Tech accountable.’ But accountable to whom?",
            url: "https://www.wsj.com/articles/biden-big-tech-op-ed-collusion-11674081290",
            urlToImage: "https://images.wsj.net/im-705964/social",
            publishedAt: "2023-01-19T15:32:00Z",
            content:
              "Some 720 days into his administration, President Biden issues his first notable call for bipartisanship, enlisting Republicans to join Democrats to \r\nUnite Against Big Tech Abuses (op-ed, Jan. 12). T… [+725 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Isabel Coles",
            title:
              "For Ukraine, Dnipro Apartment Strike Becomes a Symbol of Russian Cruelty - The Wall Street Journal",
            description:
              "<ol><li>For Ukraine, Dnipro Apartment Strike Becomes a Symbol of Russian Cruelty  The Wall Street Journal\r\n</li><li>Gut-wrenching images of deadly air strike in Ukraine almost didn't happen  Business Insider\r\n</li><li>As Russia murders civilians in Dnipro, wh…",
            url: "https://www.wsj.com/articles/for-ukraine-dnipro-apartment-strike-becomes-a-symbol-of-russian-cruelty-11674133398",
            urlToImage: "https://images.wsj.net/im-705113/social",
            publishedAt: "2023-01-19T13:03:00Z",
            content:
              "DNIPRO, UkraineIn a family video, a young girl blew out four candles on a birthday cake, her father standing close by in the warm glow of a yellow kitchen.\r\nNow, the father is dead and half the kitch… [+207 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Sharon Terlep",
            title:
              "P&G Earnings Slip as Higher Prices Sap Sales Volumes - The Wall Street Journal",
            description:
              "<ol><li>P&G Earnings Slip as Higher Prices Sap Sales Volumes  The Wall Street Journal\r\n</li><li>Procter & Gamble revenue and profit fall as company looks to higher prices to offset declining sales  CNBC\r\n</li><li>P&G Boosts Sales Outlook as Higher Prices Offs…",
            url: "https://www.wsj.com/articles/procter-gamble-pg-q2-earnings-report-2023-11674094569",
            urlToImage: "https://images.wsj.net/im-702431/social",
            publishedAt: "2023-01-19T11:56:00Z",
            content:
              "After lifting prices to new heights, Procter &amp; Gamble Co. reported lower quarterly profit and declining sales volumes as the rising costs of Tide detergent and other staples \r\nprompted consumers … [+389 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Andrew Duehren",
            title:
              "Treasury to Begin Extraordinary Measures to Pay Bills Amid Debt-Ceiling Debate - The Wall Street Journal",
            description:
              "<ol><li>Treasury to Begin Extraordinary Measures to Pay Bills Amid Debt-Ceiling Debate  The Wall Street Journal\r\n</li><li>Every American could feel the pain of Washington's next showdown  CNN\r\n</li><li>The US will likely reach its debt limit on Thursday. What…",
            url: "https://www.wsj.com/articles/treasury-to-begin-extraordinary-measures-to-pay-bills-amid-debt-ceiling-debate-11674091179",
            urlToImage: "https://images.wsj.net/im-705985/social",
            publishedAt: "2023-01-19T10:30:00Z",
            content:
              "The Treasury Department is set to begin taking special measures to keep paying the governments bills on Thursday as the divided Congress braces for a \r\npotentially lengthy and difficult debate over r… [+502 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Dan Gallagher",
            title: "AIのコスト負担、MSもグーグルも不可避",
            description:
              "――投資家向けコラム「ハード・オン・ザ・ストリート」 ＊＊＊ 米グーグルにとって競争とは、以前から「たったのワンクリック」で行われるものだった。だが米マイクロソフトでさえ、人工知能（AI）主導の世界ではそうしたクリックを提供するコストがかなり高いと感じるかもしれない。高収益の大手ハイテク企業でも最終利...",
            url: "https://jp.wsj.com/articles/microsoft-and-google-will-both-have-to-bear-ais-costs-11674105148",
            urlToImage: "https://images.wsj.net/im-705153/social",
            publishedAt: "2023-01-19T09:17:59Z",
            content:
              "AI\r\n17AIAIAIGPT1GPT\r\nCEOWSJAI\r\nAI101285GPT\r\nGPT1130Bing1\r\n171GPT103AI5\r\nUBSGPT\r\nGPTGPT1200022\r\nGPT\r\nGPT\r\n200990\r\nGPTAI7\r\nAI4GPTAI\r\n27353401999\r\n1851\r\nGPT\r\nCopyright ©2022 Dow Jones &amp; Company, Inc… [+54 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Mengqi Sun, Alexander Osipovich",
            title:
              "Crypto Platform Bitzlato Charged With Laundering More Than $700 Million of Illicit Money - The Wall Street Journal",
            description:
              "<ol><li>Crypto Platform Bitzlato Charged With Laundering More Than $700 Million of Illicit Money  The Wall Street Journal\r\n</li><li>Bitzlato crypto founder charged with $700m financial crimes  BBC\r\n</li><li>Russian arrested in Miami on charges of illegally tr…",
            url: "https://www.wsj.com/articles/crypto-exchange-bitzlato-charged-by-u-s-authorities-with-money-laundering-11674062284",
            urlToImage: "https://images.wsj.net/im-705631/social",
            publishedAt: "2023-01-19T01:40:00Z",
            content:
              "U.S. authorities designated cryptocurrency exchange Bitzlato Ltd. as a primary money-laundering concern and charged its founder for allegedly facilitating money laundering for criminals.The Treasury … [+6497 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Corinne Ramey, Jeffrey A. Trachtenberg",
            title:
              "Ex-Prosecutor's Upcoming Book Draws Warning From District Attorney...",
            description:
              "Ex-Prosecutor's Upcoming Book Draws Warning From District Attorney...\r\n\n \n \n \n (First column, 6th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:POLL: Trump trounces DeSantis in primary matchup...\r\nDon preps FACEBOOK, TWITTER return...\r\nCriticizes evangelical lead…",
            url: "https://www.wsj.com/articles/ex-trump-prosecutors-book-draws-warning-from-manhattan-district-attorney-11674080493",
            urlToImage: "https://images.wsj.net/im-705892/social",
            publishedAt: "2023-01-19T00:25:37Z",
            content:
              "The Manhattan district attorneys office said Wednesday that a forthcoming book by a former top prosecutor could compromise its continuing investigation of former President \r\nDonald Trump, warning tha… [+499 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Ian Lovett, Jared Malsin",
            title:
              "乌克兰内务部长及至少17人在基辅直升飞机坠毁事故中丧生 - Wall Street Journal",
            description:
              "<ol><li>乌克兰内务部长及至少17人在基辅直升飞机坠毁事故中丧生  Wall Street Journal\r\n</li><li>基辅附近直升机坠毁18人死亡包括乌克兰内政部长  RFI - 法国国际广播电台\r\n</li><li>乌克兰内务部长在基辅州坠机事故中身亡  瞭望东方周刊\r\n</li><li>快訊：烏克蘭直升機墜毀14死 包括內政部長  大纪元\r\n</li><li>乌克兰内政部长坠机身亡  DW\r\n</li><li>在Google 新闻上查看完整报道</li></ol>",
            url: "https://cn.wsj.com/articles/乌克兰内务部长及至少17人在基辅直升飞机坠毁事故中丧生-11674085806",
            urlToImage: "https://images.wsj.net/im-705327/social",
            publishedAt: "2023-01-18T23:50:00Z",
            content:
              "18\r\n·(Denys Monastyrsky)TelegramBrovary9\r\n22\r\nOleksiy...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "The Wall Street Journal",
            title:
              "Fed’s Beige Book says businesses expect weak growth in months ahead - Fox Business",
            description:
              "The Federal Reserve's Beige Book, which monitors businesses' sentiments, is full of pessimistic outlooks on the economy driven by high inflation and slow growth.",
            url: "https://www.wsj.com/articles/businesses-expect-weak-growth-in-months-ahead-says-beige-book-11674071467?mod=latest_headlines",
            urlToImage:
              "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/06/0/0/FED-Burning-Money.jpg?ve=1&tl=1",
            publishedAt: "2023-01-18T23:03:46Z",
            content:
              "U.S. economic activity was relatively flat at the start of the year and businesses are pessimistic about growth in the months ahead, the Federal Reserve said in a Wednesday report.\r\nHalf of the Fed’s… [+1171 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title:
              "The Saudi Exhibition Game That Turned Into Messi and Ronaldo's Final Showdown...",
            description:
              "Paris Saint-Germain agreed last year to play a match in Riyadh. It didn’t expect that Ronaldo would be there waiting when PSG meets a Saudi all-star team on Thursday",
            url: "https://www.wsj.com/articles/messi-ronaldo-saudi-arabia-psg-al-nassr-riyadh-11674052405",
            urlToImage: "https://images.wsj.net/im-704932/social",
            publishedAt: "2023-01-18T15:00:04Z",
            content:
              "The Saudi Exhibition Game That Turned Into Messi and Ronaldo’s Final ShowdownBack when Paris Saint-Germain agreed to play a midseason exhibition in Saudi Arabia in early 2022, the event was expected … [+1178 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Lindsay Ellis",
            title: "Tax Season Coming -- And Not Enough Accountants...",
            description:
              "The accountant shortage is so acute, small and midsize firms are ditching audits and hiring overseas",
            url: "https://www.wsj.com/articles/tax-season-is-coming-and-these-firms-cant-find-enough-accountants-in-the-u-s-11674009403",
            urlToImage: "https://images.wsj.net/im-704727/social",
            publishedAt: "2023-01-18T13:37:37Z",
            content:
              "A national shortage of accountants is prompting small and midsize firms to hire overseas for the first time as they seek workers to audit U.S. companies books and prepare \r\nAmericans tax returns.Larg… [+376 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Sara Ashley O'Brien, Julie Wernau",
            title:
              "Fentanyl Test Strips on Dance Floor? Partygoers Face New Reality...",
            description:
              "‘You shower, you’re getting cute, you put on your makeup, you’re putting on your outfit, you test your drugs.’ Inside the push to reach recreational drug users amid surging fentanyl-overdose numbers.",
            url: "https://www.wsj.com/articles/fentanyl-test-strips-party-culture-bars-restaurants-testing-11673993170",
            urlToImage: "https://images.wsj.net/im-705114/social",
            publishedAt: "2023-01-18T13:37:37Z",
            content:
              "When she goes out, singer-songwriter Kalie Shorr always ensures shes carrying the basics: wallet, keysand fentanyl test strips.\r\nWhen Im at clubs, people just whip out cocaineon the dance floor, some… [+277 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Alyssa Lukpat",
            title:
              "Greta Thunberg Released After German Police Detained Her at Coal Mine Protest - The Wall Street Journal",
            description:
              "<ol><li>Greta Thunberg Released After German Police Detained Her at Coal Mine Protest  The Wall Street Journal\r\n</li><li>Greta Thunberg released after detention at German mine protest  Reuters\r\n</li><li>Climate activist Greta Thunberg detained by police in Ge…",
            url: "https://www.wsj.com/articles/greta-thunberg-detained-by-police-in-germany-during-coal-mine-protest-11673981053",
            urlToImage: "https://images.wsj.net/im-704800/social",
            publishedAt: "2023-01-18T13:15:00Z",
            content:
              "Greta Thunberg, the climate activist, was carried away and briefly detained by police Tuesday in a German village where protesters have been opposing an expanded coal mine, officials said.\r\nMs. Thunb… [+320 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Rebecca Elliott",
            title:
              "Elon Musk Trial Over Tesla Tweets Heads for Opening Statements",
            description:
              "Elon Musk Trial Over Tesla Tweets Heads for Opening Statementswsj.com",
            url: "https://www.wsj.com/articles/elon-musk-trial-over-tesla-tweets-heads-for-opening-statements-11674045524",
            urlToImage: "https://images.wsj.net/im-705201/social",
            publishedAt: "2023-01-18T12:41:48Z",
            content:
              "Attorneys are poised to present opening statements Wednesday in a federal trial related to \r\nElon Musks 2018 tweets floating the possibility of taking Tesla Inc. private.The class-action case stems f… [+201 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Colin Kellaher",
            title: "Party City Files for Bankruptcy With Plans to Cut Debt",
            description:
              "Filing comes after retailer has posted widening losses, weak sales",
            url: "https://www.wsj.com/articles/party-city-files-for-bankruptcy-with-plans-to-cut-debt-11674045368",
            urlToImage: "https://images.wsj.net/im-705320/social",
            publishedAt: "2023-01-18T12:36:00Z",
            content:
              "Party City Holdco Inc. and some of its U.S. units have filed for chapter 11 bankruptcy as part of the party-favor retailers plan to pare its debt load.\r\nThe Woodcliff Lake, N.J., company said it has … [+207 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Greg Ip",
            title: "In Davos, Leaders Fret Over Fragmenting Global Economy",
            description:
              "Officials warn of threat to business and the challenges of regulatory compliance as global powers diverge on trade, industrial policy",
            url: "https://www.wsj.com/articles/in-davos-leaders-fret-over-fragmenting-global-economy-11674042832",
            urlToImage: "https://images.wsj.net/im-705277/social",
            publishedAt: "2023-01-18T12:33:56Z",
            content:
              "DAVOS, SwitzerlandGeopolitical rivalry, technology decoupling and protectionism have increasingly altered the worlds business and political landscape, adding new risks and threats and, for some, oppo… [+328 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Dustin Volz, Byron Tau",
            title:
              "Little-Known Surveillance Program Captures Money Transfers Between U.S. and More Than 20 Countries - WSJ - The Wall Street Journal",
            description:
              "<ol><li>Little-Known Surveillance Program Captures Money Transfers Between U.S. and More Than 20 Countries - WSJ  The Wall Street Journal\r\n</li><li>How the Arizona Attorney General Created a Secretive, Illegal Surveillance Program to Sweep up Millions of Our …",
            url: "https://www.wsj.com/articles/little-known-surveillance-program-captures-money-transfers-between-u-s-and-more-than-20-countries-11674019904",
            urlToImage: "https://images.wsj.net/im-703019/social",
            publishedAt: "2023-01-18T12:00:00Z",
            content:
              "WASHINGTONHundreds of federal, state and local U.S. \r\nlaw-enforcement agencies have access without court oversight to a database of more than 150 million money transfers between people in the U.S. an… [+776 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Dan Strumpf, Rachel Liang",
            title:
              "漫威超级英雄电影获准在中国上映，迪士尼获得提振 - Wall Street Journal",
            description:
              "迪士尼旗下的漫威影业说，《黑豹2》和《蚁人与黄蜂女：量子狂潮》将在下个月登陆中国影院。这两部电影将是2019年以来首批在中国上映的该超级英雄系列影片。",
            url: "https://cn.wsj.com/articles/漫威超级英雄电影获准在中国上映-迪士尼获得提振-11674033307",
            urlToImage: "https://images.wsj.net/im-705223/social",
            publishedAt: "2023-01-18T09:15:00Z",
            content:
              "(Walt Disney Company, DIS)(Marvel)\r\n(Marvel Studios)2(Black Panther: Wakanda Forever)(Ant-Man and the Wasp: Quantumania)\r\n2019\r\n(Avatar:...",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title: "Big Banks Might Face Breakup, Top Regulator Says...",
            description:
              "Acting Comptroller of the Currency says size and complexity can make banks too big to manage",
            url: "https://www.wsj.com/articles/too-big-to-manage-banks-may-face-breakup-top-regulator-says-11673982801",
            urlToImage: "https://images.wsj.net/im-703831/social",
            publishedAt: "2023-01-18T01:00:03Z",
            content:
              "Big Banks Might Face Breakup, Top Regulator Says\r\nEconomists and financial analysts look at bank earnings to get a sense of the economy’s health. WSJ’s Telis Demos explains how inflation as well as r… [+1507 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "The Wall Street Journal",
            title:
              "China says economy to return to faster growth as Covid isolation ends",
            description:
              "Chinese Vice Premier Liu's speech at the World Economic Forum in Davos was filled with optimism about a return to economic growth, but many remain skeptical.",
            url: "https://www.wsj.com/articles/china-declares-its-reopening-after-covid-isolation-11673961652?mod=latest_headlines",
            urlToImage:
              "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/world-economic-forum.jpg?ve=1&tl=1",
            publishedAt: "2023-01-18T00:04:24Z",
            content:
              "President Xi Jinping‘s top economic adviser sought to restore global investor confidence in a Chinese economy much battered by the country’s self-imposed Covid isolation, saying in a high-profile spe… [+7100 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "John Keilman",
            title:
              "Whirlpool Strikes Deals to Divest Much of European, African Businesses - The Wall Street Journal",
            description:
              "Whirlpool Strikes Deals to Divest Much of European, African Businesses  The Wall Street Journal",
            url: "https://www.wsj.com/articles/whirlpool-strikes-deals-to-divest-much-of-european-african-businesses-11673988869",
            urlToImage: "https://images.wsj.net/im-704709/social",
            publishedAt: "2023-01-17T20:54:00Z",
            content:
              "Whirlpool Corp., whose European operations have been challenged by Russias invasion of Ukraine, said Tuesday it is turning over much of its appliance business in the region to a new entity controlled… [+357 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Joseph Pisani",
            title:
              "GM's New Hybrid Corvette Will Be Its Fastest Yet - The Wall Street Journal",
            description:
              "<ol><li>GM's New Hybrid Corvette Will Be Its Fastest Yet  The Wall Street Journal\r\n</li><li>Yes, The Hybrid And AWD 2024 Chevrolet Corvette E-Ray Can Drift | Reveal  Car and Driver\r\n</li><li>See the first electrified and fastest-accelerating Corvette  CNN\r\n</…",
            url: "https://www.wsj.com/articles/gm-hybrid-chevrolet-corvette-will-be-fastest-yet-11673979428",
            urlToImage: "https://images.wsj.net/im-704692/social",
            publishedAt: "2023-01-17T19:05:00Z",
            content:
              "The first gas-electric hybrid Corvette will also be the fastest version of the American sports car, General Motors Co. said Tuesday.\r\nThe Chevrolet Corvette E-Ray will start at just over $104,000 and… [+75 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Andrew Crumey",
            title: "‘The One’ Review: Platonic Particles and Waves of History",
            description:
              "Were the insights of Heisenberg, Schrödinger and Einstein predicted by medieval philosophy?",
            url: "https://www.wsj.com/articles/the-one-review-platonic-particles-and-waves-of-history-11673628851",
            urlToImage: "https://images.wsj.net/im-702432/social",
            publishedAt: "2023-01-17T18:48:40Z",
            content:
              "The attempt to unite all natural phenomena within a single system has been a human preoccupation since time immemorial. For Heinrich Päs it is a question of theoretical physicstrying to explain how t… [+1793 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Denny Jacob",
            title: "Apple Rolls Out Latest MacBook Pro With New M2 Chips",
            description:
              "Apple Rolls Out Latest MacBook Pro With New M2 Chipswsj.com",
            url: "https://www.wsj.com/articles/apple-rolls-out-latest-macbook-pro-with-new-m2-chips-11673974629",
            urlToImage: "https://images.wsj.net/im-704635/social",
            publishedAt: "2023-01-17T17:50:07Z",
            content:
              "Apple Inc. unveiled its latest iteration of the MacBook Pro, a move that will test its sway with consumers as \r\ndemand for personal computers is expected to slump. The Cupertino, Calif., company on T… [+168 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Sarah E. Needleman",
            title:
              "Unity Software Lays Off More Workers as Tech Job Cuts Grow - WSJ - The Wall Street Journal",
            description:
              "Unity Software Lays Off More Workers as Tech Job Cuts Grow - WSJ  The Wall Street Journal",
            url: "https://www.wsj.com/articles/unity-software-lays-off-more-workers-as-tech-job-cuts-grow-11673974721",
            urlToImage: "https://images.wsj.net/im-704525/social",
            publishedAt: "2023-01-17T17:15:00Z",
            content:
              "Unity Software Inc. is laying off more than 200 employees, making it the latest technology company \r\nto implement staff cuts amid mounting recession fears.San Francisco-based Unity said Tuesday that … [+377 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Matthew Luxmoore, Georgi Kantchev",
            title: "Kyiv Warns of Fresh Offensive...",
            description:
              "Kyiv Warns of Fresh Offensive...\r\n\n \n \n \n (Top headline, 2nd story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Russia to Boost Troops in West, Expanding Army to 1.5 Million...",
            url: "https://www.wsj.com/articles/zelensky-calls-on-allies-to-speed-up-arms-supplies-as-kyiv-warns-of-fresh-russian-offensive-11673952963",
            urlToImage: "https://images.wsj.net/im-704407/social",
            publishedAt: "2023-01-17T17:01:36Z",
            content:
              "KYIV, UkraineRussia detailed its plans to boost the size of its military as Ukraine warned that Moscow may be \r\npreparing an offensive and Ukrainian President Volodymyr Zelensky called on Western all… [+487 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "wsj",
            title:
              "UK to Toughen Social-Media Law; Threatens CEOs With Jail...",
            description:
              "Large tech companies would face penalties if they don’t have sufficiently robust systems to remove illegal content",
            url: "https://www.wsj.com/articles/u-k-to-toughen-new-social-media-law-threatening-ceos-with-jail-time-11673963019",
            urlToImage: "https://images.wsj.net/im-704473/social",
            publishedAt: "2023-01-17T14:00:04Z",
            content:
              "U.K. to Toughen New Social-Media Law, Threatening CEOs With Jail TimeLONDON—British legislators are set to approve a draft of a extensive new social-media bill that could see the chief executives of … [+905 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "AnnaMaria Andriotis",
            title: "GOLDMAN Profit Plummets...",
            description:
              "GOLDMAN Profit Plummets...\r\n\n \n \n \n (Second column, 5th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Shopper Rebellion Slows Inflation...",
            url: "https://www.wsj.com/articles/goldman-sachs-profit-plummets-from-deal-making-drought-11673960103",
            urlToImage: "https://images.wsj.net/im-703051/social",
            publishedAt: "2023-01-17T13:43:36Z",
            content:
              "Goldman Sachs Group Inc. reported sharply lower profits for the fourth quarter, hurt by a big slowdown in deal making.\r\nGoldman on Tuesday said quarterly profit was $1.33 billion, down 66% from a yea… [+107 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Dean Seal",
            title:
              "Emerson Electric Bids to Buy National Instruments for Nearly $7 Billion",
            description:
              "Emerson says it has been pursuing the equipment and instrumentation company since May",
            url: "https://www.wsj.com/articles/emerson-electric-bids-to-buy-national-instruments-for-nearly-7-billion-11673960445",
            urlToImage: "https://images.wsj.net/im-704460/social",
            publishedAt: "2023-01-17T13:00:00Z",
            content:
              "Emerson Electric Co. on Tuesday disclosed a nearly $7 billion offer to buy National Instruments Corp., which it has been trying to buy for more than eight months.\r\nEmerson Electric, a St. Louis-based… [+371 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Walter Russell Mead",
            title: "Can India Emerge as Rival?",
            description:
              "Can India Emerge as Rival?\r\n\n \n \n \n (Third column, 10th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:China Population Shrinks First Time Since '60s in Seismic Shift...",
            url: "https://www.wsj.com/articles/can-india-emerge-as-a-rival-to-china-manufacturing-population-it-investment-trade-youth-regulatory-reform-11673895652",
            urlToImage: "https://images.wsj.net/im-704226/social",
            publishedAt: "2023-01-17T12:10:36Z",
            content:
              "Walter Russell Mead is the Ravenel B. Curry III Distinguished Fellow in Strategy and Statesmanship at Hudson Institute, the Global View Columnist at The Wall Street Journal and the James Clarke Chace… [+575 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Kim Mackrael",
            title:
              "EU Readies Subsidy Response to U.S. Clean-Tech Tax Breaks - The Wall Street Journal",
            description:
              "Von der Leyen says at World Economic Forum that the bloc must help its own green companies and challenge unfair subsidies in other countries",
            url: "https://www.wsj.com/articles/eu-readies-subsidy-response-to-u-s-clean-tech-tax-breaks-11673953217",
            urlToImage: "https://images.wsj.net/im-704419/social",
            publishedAt: "2023-01-17T11:00:00Z",
            content:
              "BRUSSELSEurope aims to provide more support to its domestic clean-tech industry in a push to counter \r\nsubsidies from the U.S. and China, European Commission President Ursula von der Leyen said Tuesd… [+392 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Yusuf Khan",
            title: "The Latest TikTok Star Is Canned Tuna",
            description:
              "Canned-fish sellers launch new products, expand production to meet demand from younger shoppers",
            url: "https://www.wsj.com/articles/the-latest-tiktok-star-is-canned-tuna-11673878559",
            urlToImage: "https://images.wsj.net/im-704046/social",
            publishedAt: "2023-01-17T10:36:47Z",
            content:
              "Makers of canned tuna and sardines are taking their products upscale, riding a wave of online popularity among young foodies.\r\nU.S. sales of canned seafood rose 9.7% to $2.7 billion in 2022, accordin… [+177 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Sam Schechner",
            title:
              "Microsoft Plans to Build OpenAI Capabilities Into All Products",
            description:
              "Offering for businesses and end users to be transformed by incorporating tools like ChatGPT, CEO Satya Nadella says",
            url: "https://www.wsj.com/articles/microsoft-plans-to-build-openai-capabilities-into-all-products-11673947774",
            urlToImage: "https://images.wsj.net/im-704383/social",
            publishedAt: "2023-01-17T09:35:51Z",
            content:
              "DAVOS, SwitzerlandMicrosoft Corp. plans to incorporate artificial-intelligence tools like ChatGPT into all of its products and make them available as platforms for other businesses to build on, Chief… [+416 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Evan Gershkovich",
            title: "ロシア動員兵に大量の犠牲、それでも戦争は続く",
            description:
              "ウクライナ東部にあるロシアの仮設兵舎を狙ったミサイル攻撃で、新たに動員されたロシア兵数十人が死亡してから2週間が経過した。しかしロシア国内の多くの人々は、自分たちの親類は生きているのか、それとも死んだのかという問いの答えをいまだに得られていない。 ある36歳の女性は、この兵舎を使っていた連隊の1つに所...",
            url: "https://jp.wsj.com/articles/dozens-of-russian-draftees-died-in-a-ukrainian-strike-putins-war-machine-rolled-on-11673922532",
            urlToImage: "https://images.wsj.net/im-703540/social",
            publishedAt: "2023-01-17T09:03:31Z",
            content:
              "2\r\n361\r\n891\r\n2\r\n307\r\n110\r\n27200\r\nWSJ\r\n3620148501368 \r\n1016 \r\n201494 \r\nCopyright ©2022 Dow Jones &amp; Company, Inc. All Rights Reserved. 87990cbe856818d5eddac44c7b1cdeb8",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Jason Douglas",
            title:
              "China's Economic Growth Fell to Near-Historic Lows as Covid Took a Bite - The Wall Street Journal",
            description:
              "<ol><li>China's Economic Growth Fell to Near-Historic Lows as Covid Took a Bite  The Wall Street Journal\r\n</li><li>China’s population drops for the first time in decades  CNBC\r\n</li><li>China records second-lowest economic growth figure in almost 50 years aft…",
            url: "https://www.wsj.com/articles/chinas-economic-growth-fell-to-near-historic-lows-as-covid-took-a-bite-11673921199",
            urlToImage: "https://images.wsj.net/im-704314/social",
            publishedAt: "2023-01-17T07:32:00Z",
            content:
              "SINGAPOREChinas economy grew at one of its slowest rates in decades last year as repeated lockdowns hammered households and businesses, emphasizing the high cost of zero-tolerance Covid-19 policies t… [+448 chars]",
          },
        ],
      },
      status: 200,
      statusText: "",
      headers: {
        "cache-control": "no-cache",
        "content-type": "application/json; charset=utf-8",
        expires: "-1",
        pragma: "no-cache",
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        adapter: ["xhr", "http"],
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {},
        headers: {
          Accept: "application/json, text/plain, */*",
        },
        method: "get",
        url: "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a25d005bfaba46caade2c9ad228c260d",
      },
      request: {},
    };
    console.log(this.newsFeed);
    // makeAPICall("everything?domains=wsj.com");
  },
  methods: {},
};
</script>
