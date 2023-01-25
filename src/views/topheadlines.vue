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
    ><newsFeed :articles="newsFeed.data.articles" />
  </v-container>
</template>
<script>
// import { fetchNewsData } from "@/services/apiCall";
import newsFeed from "@/components/newsFeed.vue";
export default {
  components: { newsFeed },
  name: "topheadlines-component",
  data: () => ({
    newsFeed: {},
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
        totalResults: 68,
        articles: [
          {
            source: {
              id: null,
              name: "The Points Guy",
            },
            author: "Meghna Maharishi",
            title:
              "There's a new $13 way to get from midtown Manhattan to JFK - The Points Guy",
            description:
              "The MTA will launch LIRR service from Grand Central Madison to Jamaica, Queens, on Jan. 25, providing customers another way of reaching JFK Airport.",
            url: "https://thepointsguy.com/news/new-nyc-jfk-lirr-service-grand-central-madison/",
            urlToImage:
              "https://thepointsguy.global.ssl.fastly.net/us/originals/2023/01/Grand-Central-Direct-LIRR_MTA.jpg",
            publishedAt: "2023-01-25T20:37:30Z",
            content:
              "Savvy, budget-minded travelers know that one of the cheapest ways to travel to New York's John F. Kennedy International Airport (JFK) is via the Long Island Rail Road from Penn Station. However, for … [+7871 chars]",
          },
          {
            source: {
              id: "the-wall-street-journal",
              name: "The Wall Street Journal",
            },
            author: "Berber Jin, Alexander Saeedy",
            title:
              "Elon Musk Explores Raising Up to $3 Billion to Help Pay Off Twitter Debt - WSJ - The Wall Street Journal",
            description:
              "Billionaire has held talks with investors about selling new Twitter shares",
            url: "https://www.wsj.com/articles/elon-musk-explores-raising-up-to-3-billion-to-pay-off-twitter-debt-11674669412",
            urlToImage: "https://images.wsj.net/im-710037/social",
            publishedAt: "2023-01-25T18:58:00Z",
            content: null,
          },
          {
            source: {
              id: null,
              name: "CNET",
            },
            author: "Imad Khan",
            title:
              "DOJ Sues Google Again, Attacking Its Online Ad Dominance - CNET",
            description:
              "The Department of Justice and eight states want to try to increase competition by forcing Google to sell off its ad business.",
            url: "https://www.cnet.com/news/politics/doj-sues-google-again-attacking-its-online-ad-dominance/",
            urlToImage:
              "https://www.cnet.com/a/img/resize/41feca2626d543bae8db1f2299cace512d024a23/hub/2019/12/03/31b01982-b8bd-4844-9f96-410777c5ecbb/sundar-pichai-google-ceo-7786.jpg?auto=webp&fit=crop&height=630&width=1200",
            publishedAt: "2023-01-25T18:57:00Z",
            content:
              "The US Department of Justice and eight states on Tuesday sued Google over its online advertising business, alleging that the company abused its monopoly power and harmed advertisers and publishers.\r\n… [+5560 chars]",
          },
          {
            source: {
              id: null,
              name: "Yahoo Entertainment",
            },
            author: "Daniel Howley",
            title:
              "Microsoft's big ChatGPT investment should have the competition shaking - Yahoo Finance",
            description:
              "Microsoft's $10 billion investment in OpenAI is a shot directly at Amazon, Google, and the rest of Big Tech.",
            url: "https://finance.yahoo.com/news/microsofts-big-chatgpt-investment-should-have-the-competition-shaking-185621022.html",
            urlToImage:
              "https://s.yimg.com/ny/api/res/1.2/Vm5JuBuwZU0VhuL1ayER2Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NzA-/https://s.yimg.com/os/creatr-uploaded-images/2023-01/1c7b47e0-9cd2-11ed-99df-f3e29e3c5ae0",
            publishedAt: "2023-01-25T18:56:21Z",
            content:
              "Wednesday, Jan. 25, 2023\r\nMicrosoft's $10 billion investment in OpenAI puts Amazon, Google, and others on notice\r\nMicrosoft (MSFT) is pulling out all of the stops in an effort to ensure that its the … [+6826 chars]",
          },
          {
            source: {
              id: null,
              name: "CNBC",
            },
            author: "Michelle Fox",
            title:
              "Stocks making the biggest moves midday: Sunrun, U.S. Bancorp, Alphabet, AT&T and more - CNBC",
            description:
              "These are the stocks posting the largest moves midday.",
            url: "https://www.cnbc.com/2023/01/25/stocks-making-the-biggest-moves-midday-sunrun-us-bancorp-alphabet-att-and-more.html",
            urlToImage:
              "https://image.cnbcfm.com/api/v1/image/107164575-1670848692261-gettyimages-1245553229-kingofprussia-12212022-markmakela59.jpeg?v=1674668844&w=1920&h=1080",
            publishedAt: "2023-01-25T17:47:24Z",
            content:
              "Check out the companies making the biggest moves midday:\r\nNews Corp, Fox News Corp rallied 5.4%, while Fox news gained more than 2%, after Rupert Murdoch called off plans to merge the two companies.\r… [+3179 chars]",
          },
          {
            source: {
              id: null,
              name: "Fox Business",
            },
            author: "Chris Pandolfo",
            title:
              "Border Protection warns travelers face fines for smuggling eggs to US from Mexico as prices soar - Fox Business",
            description:
              "U.S. Customs and Border Protection has reported an increase in attempts by travelers to bring eggs into the U.S. from Mexico as prices soar because of an outbreak of avian influenza.",
            url: "https://www.foxbusiness.com/economy/border-protection-warns-travelers-face-fines-smuggling-eggs-us-mexico-prices-soar",
            urlToImage:
              "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/01/0/0/eggs-seized-by-customs-and-border-protection-e1674671926691.jpg?ve=1&tl=1",
            publishedAt: "2023-01-25T17:12:20Z",
            content:
              "Americans living near the southern border apparently are crossing into Mexico for their grocery shopping to dodge high prices in the United States. \r\nU.S. Customs and Border Protection recently warne… [+3913 chars]",
          },
          {
            source: {
              id: null,
              name: "Barron's",
            },
            author: "Al Root",
            title:
              "Boeing Still Can't Turn a Profit. The Stock Is Dropping. - Barron's",
            description:
              "The aerospace company lost money in the fourth quarter, but free cash flow came in at $3.1 billion, better than the $2.9 billion analysts were projecting.",
            url: "https://www.barrons.com/articles/boeing-earnings-stock-price-51674594696",
            urlToImage: "https://images.barrons.com/im-709273/social",
            publishedAt: "2023-01-25T16:59:00Z",
            content:
              "Boeing\r\nappears to have turned the cash flow corner. Thats good news, but the company still couldnt turn a profit, as earnings missed expectations once again, which sent the stock lower in Wednesday … [+124 chars]",
          },
          {
            source: {
              id: null,
              name: "CNBC",
            },
            author: "Leslie Josephs",
            title:
              "Southwest CEO maps out a recovery after holiday meltdown: 'We have work to do' - CNBC",
            description:
              "Southwest said it canceled about 16,700 flights between Dec. 21 through Dec. 31, failing to recover from severe winter weather.",
            url: "https://www.cnbc.com/2023/01/25/southwest-airlines-tries-to-improve-its-system-after-holiday-meltdown.html",
            urlToImage:
              "https://image.cnbcfm.com/api/v1/image/107171339-1672155184954-gettyimages-1245833369-AA_27122022_1004221.jpeg?v=1674667293&w=1920&h=1080",
            publishedAt: "2023-01-25T16:51:28Z",
            content:
              "Passengers lined up by the Southwest Airlines counter at San Francisco International Airport (SFO) in San Francisco, California, United States on December 26, 2022 as Southwest cancels more than 2,80… [+7628 chars]",
          },
          {
            source: {
              id: null,
              name: "Electrek",
            },
            author: "Scooter Doll",
            title:
              "Ford snags CR crown from GM in driver assistance rankings, Tesla 'falls behind' to 7th - Electrek.co",
            description:
              "Consumer Reports has released its latest rankings comparing the active driving assistance systems (ADAS) of EV automakers like Ford, GM,...",
            url: "https://electrek.co/2023/01/25/ford-gm-consumer-reports-driver-assistance-rankings-tesla/",
            urlToImage:
              "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/01/Ford-Tesla-rankings-BlueCruise.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            publishedAt: "2023-01-25T16:41:00Z",
            content:
              "Consumer Reports has released its latest rankings comparing the active driving assistance systems (ADAS) of EV automakers like Ford, GM, Rivian, and of course Tesla. The independent, non-profit consu… [+4926 chars]",
          },
          {
            source: {
              id: "cnn",
              name: "CNN",
            },
            author: "Chris Isidore",
            title:
              "Winter storm cancels hundreds of US flights, with Southwest again hit hardest - CNN",
            description:
              "Bad weather canceled hundreds of flights on Wednesday, with Southwest Airlines once again hit particularly hard.",
            url: "https://www.cnn.com/2023/01/25/business/canceled-flights/index.html",
            urlToImage:
              "https://media.cnn.com/api/v1/images/stellar/prod/230125103618-file-southwest-airlines-plane-midway-airport-chicago-1228.jpg?c=16x9&q=w_800,c_fill",
            publishedAt: "2023-01-25T16:09:00Z",
            content:
              "Bad weather canceled hundreds of flights on Wednesday, with Southwest Airlines once again hit particularly hard.\r\nAs of 10:30 am ET the cancellations had totaled 482 flights to, from or within the Un… [+1646 chars]",
          },
          {
            source: {
              id: null,
              name: "Yahoo Entertainment",
            },
            author: "Thyagaraju Adinarayan, Subrat Patnaik and Craig Trudell",
            title:
              "US Short Seller Takes On Asia’s Richest Man After Targeting Nikola and Twitter - Yahoo Finance",
            description:
              "(Bloomberg) -- US short seller Hindenburg Research LLC is targeting Asia’s richest man with accusations of market manipulation and fraud after a run of often...",
            url: "https://finance.yahoo.com/news/us-short-seller-takes-asia-120057556.html",
            urlToImage:
              "https://media.zenfs.com/en/bloomberg_markets_842/ab99e2c98bfbd126ce19521cefc1c38f",
            publishedAt: "2023-01-25T15:47:00Z",
            content:
              "(Bloomberg) -- US short seller Hindenburg Research LLC is targeting Asias richest man with accusations of market manipulation and fraud after a run of often-successful bets against companies ranging … [+5352 chars]",
          },
          {
            source: {
              id: null,
              name: "Fox Business",
            },
            author: "Ken Martin",
            title:
              "Latest Stock Market News Today: Microsoft, Boeing earnings, Morgan Stanley's recession call and Tesla's new US factories | January 25, 2023 | Live Updates from - Fox Business",
            description:
              "Stocks slip as investors digest cautious earnings from Boeing and Microsoft, NYSE pinpoints cause of glitch and more crypto fallout. FOX Business is providing real-time updates on the markets, commodities and all the most active stocks on the move.",
            url: "https://www.foxbusiness.com/live-news/stock-market-news-today-january-25-2023",
            urlToImage:
              "https://livenews.foxbusiness.com/images/2023/01/b4cae617b6430c31226aa179e998519a.jpg",
            publishedAt: "2023-01-25T15:00:25Z",
            content:
              "<table><tr><th>Symbol</th><th>Price</th><th>Change</th><th>%Change</th></tr>\r\n<tr><td>GD</td><td>$227.26</td><td>-8.19</td><td>-3.48</td></tr>\r\n</table>U.S. defense contractor General Dynamics Corp o… [+1280 chars]",
          },
          {
            source: {
              id: null,
              name: "KSBY San Luis Obispo News",
            },
            author: "Associated Press",
            title:
              "Regulators nix proposal on California's last nuclear plant - KSBY News",
            description:
              "Federal regulators have rejected a request from the operator of California’s last nuclear power plant that could have smoothed its pathway to securing a longer operating life.",
            url: "https://www.ksby.com/news/local-news/regulators-nix-proposal-on-californias-last-nuclear-plant",
            urlToImage:
              "https://ewscripps.brightspotcdn.com/dims4/default/6c28fe1/2147483647/strip/true/crop/3000x1575+0+172/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fa7%2Ffa%2F83b144f7464cab5320f19efe3aa7%2Fap23024806636885.jpg",
            publishedAt: "2023-01-25T14:59:37Z",
            content:
              "LOS ANGELES (AP) In pointed language, federal regulators rebuffed a request Tuesday from the operator of Californias last nuclear power plant that could have smoothed its pathway to securing a longer… [+3514 chars]",
          },
          {
            source: {
              id: null,
              name: "ABC15 Arizona",
            },
            author: "abc15.com staff",
            title:
              "Phoenix could see 2008-like plummet in housing prices, Goldman Sachs report says - ABC15 Arizona in Phoenix",
            description:
              "Phoenix is among 4 markets projected by Goldman Sachs",
            url: "https://www.abc15.com/news/region-phoenix-metro/phoenix-could-see-2008-like-plummet-in-housing-prices-goldman-sachs-report-says",
            urlToImage:
              "https://ewscripps.brightspotcdn.com/dims4/default/f2145c4/2147483647/strip/true/crop/1500x788+0+338/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F8e%2F7f%2Fdef66b794e8e9e82b9d66bace91b%2Fap09071601167.jpg",
            publishedAt: "2023-01-25T14:52:00Z",
            content:
              "PHOENIX Is a 2008-like housing plummet headed for the Valley? It could happen, according to a recent Goldman Sachs forecast sent to clients.\r\nThe New York Post cited the Goldman Sachs note, saying fo… [+1190 chars]",
          },
          {
            source: {
              id: null,
              name: "Investor's Business Daily",
            },
            author: "Investor's Business Daily",
            title:
              "AT&T Earnings, Full-Year Free Cash Flow Top Estimates - Investor's Business Daily",
            description:
              "Wireless subscriber growth slightly beat views, while broadband gains fell short.",
            url: "https://www.investors.com/news/technology/t-stock-att-earnings-q4-2022/",
            urlToImage:
              "https://www.investors.com/wp-content/uploads/2019/07/Stock-ATTstorefront-09-shut.jpg",
            publishedAt: "2023-01-25T14:49:00Z",
            content:
              "AT&amp;T (T) early Wednesday reported fourth-quarter earnings that topped estimates while revenue came in just below Wall Street targets. T stock popped, moving into a buy zone, as full-year free cas… [+3214 chars]",
          },
          {
            source: {
              id: null,
              name: "WRAL Tech Wire",
            },
            author: null,
            title:
              "Microsoft: Teams, Outlook, other services hit by outage are now ‘stable’ - WRAL TechWire",
            description:
              "Microsoft is investigating a networking issue after tens of thousands of users around the world have reported being unable to access services like Teams and Outlook.",
            url: "https://wraltechwire.com/2023/01/25/nmicrosoft-teams-outlook-other-services-hit-by-outage-are-now-stable/",
            urlToImage:
              "https://wraltechwire.com/wp-content/uploads/2019/11/microsoft-teams-e1574254609713.png",
            publishedAt: "2023-01-25T14:26:15Z",
            content:
              "Microsoft is investigating a networking issue after tens of thousands of users around the world have reported being unable to access services like Teams and Outlook. Most are now “stable,” the tech g… [+1565 chars]",
          },
          {
            source: {
              id: "ars-technica",
              name: "Ars Technica",
            },
            author: "Jonathan M. Gitlin",
            title:
              "Manchin writes bill to stop temporary electric vehicle tax credits - Ars Technica",
            description:
              "The senator wants his domestic minerals requirement implemented immediately.",
            url: "https://arstechnica.com/cars/2023/01/manchin-wants-to-block-temporary-electric-vehicle-tax-credit-rules/",
            urlToImage:
              "https://cdn.arstechnica.net/wp-content/uploads/2023/01/GettyImages-1243595790-760x380.jpg",
            publishedAt: "2023-01-25T14:19:08Z",
            content:
              'Enlarge/ "The IRA and the EV tax credits must be implemented according to the Congressional intent to ensure the United States, as the superpower of the world, is not beholden to countries that dont … [+3647 chars]',
          },
          {
            source: {
              id: null,
              name: "CNBC",
            },
            author: "Ryan Browne",
            title:
              "DCG-owned crypto exchange Luno axes 35% of staff, citing market turbulence - CNBC",
            description:
              "London-based crypto exchange Luno informed employees Wednesday of the redundancies at 12 p.m. GMT in a live-streamed town hall.",
            url: "https://www.cnbc.com/2023/01/25/dcg-owned-crypto-exchange-luno-axes-35percent-of-staff.html",
            urlToImage:
              "https://image.cnbcfm.com/api/v1/image/107167409-1671184641667-gettyimages-1234311542-sindeyev-notitle210729_npFdq.jpeg?v=1674654921&w=1920&h=1080",
            publishedAt: "2023-01-25T13:55:21Z",
            content:
              "A worsening macroeconomic climate and the collapse of industry giants like FTX and Terra have weighed on bitcoin's price this year.\r\nCryptocurrency exchange Luno is the latest company in the industry… [+2971 chars]",
          },
          {
            source: {
              id: null,
              name: "CNBC",
            },
            author: "Michael Bloom",
            title:
              "Top Wall Street analyst calls on Wednesday include Tesla & Robinhood - CNBC",
            description: "Here are Wednesday's biggest calls on Wall Street.",
            url: "https://www.cnbc.com/2023/01/25/top-wall-street-analyst-calls-on-wednesday-include-tesla-robinhood.html",
            urlToImage:
              "https://image.cnbcfm.com/api/v1/image/106918987-16275791572021-07-29t162622z_1786553888_rc2cuo9whxgh_rtrmadp_0_robinhood-ipo.jpeg?v=1674654253&w=1920&h=1080",
            publishedAt: "2023-01-25T13:44:13Z",
            content: null,
          },
          {
            source: {
              id: "reuters",
              name: "Reuters",
            },
            author: null,
            title:
              "Tesla plans $3.6 bln Nevada expansion to make Semi truck, battery cells - Reuters",
            description:
              'Tesla Inc <a href="https://www.reuters.com/companies/TSLA.O" target="_blank">(TSLA.O)</a> said on Tuesday it would invest more than $3.6 billion to expand its Nevada Gigafactory complex with two new factories, one to mass produce its long-delayed Semi electri…',
            url: "https://www.reuters.com/markets/deals/tesla-invest-over-36-bln-nevada-build-two-new-factories-2023-01-24/",
            urlToImage:
              "https://www.reuters.com/resizer/Nwu17kHr25SOrH-2nU30wY1QPWI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7JGTD2DSLVPWDM4C4MKLQ5WCQ4.jpg",
            publishedAt: "2023-01-25T13:26:00Z",
            content:
              "Jan 24 (Reuters) - Tesla Inc (TSLA.O) said on Tuesday it would invest more than $3.6 billion to expand its Nevada Gigafactory complex with two new factories, one to mass produce its long-delayed Semi… [+2492 chars]",
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
        url: "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a25d005bfaba46caade2c9ad228c260d",
      },
      request: {},
    };
    // fetchNewsData("top-headlines?country=us&category=business").then(
    //   (response) => {
    //     this.newsFeed = response;
    //     console.log(response);
    //   }
    // );

    console.log(this.newsFeed);
  },
};
</script>
