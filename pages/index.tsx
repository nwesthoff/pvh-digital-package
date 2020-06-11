import Layout from "../components/Layout";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import ContentContainer from "../components/ContentContainer";
import Microlink from "@microlink/react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { transparentize } from "polished";
import { MdSmartphone, MdWeb } from "react-icons/md";
import PersonaCarousel from "../components/Personas";
import LazyLoad from "react-lazy-load";
import ImageCarousel from "../components/ImageCarousel";

const ThreeColumnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;
  margin: -2.4rem 0 0 -2.4rem;
`;

const Col = styled.div`
  margin: 2.4rem 0 0 2.4rem;
  flex-basis: 30%;
  flex-grow: 1;
  min-width: 250px;

  figcaption {
    text-align: left;
  }

  img,
  video {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ResponsiveIFrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 60%;
`;
const ResponsiveIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const LinkButton = styled.a`
  background: ${(props: { color?: string }) =>
    transparentize(0.97, props.color || theme.colors.primary)};
  padding: 1.2rem 2rem;
  color: ${(props: { color?: string }) => props.color || theme.colors.primary};
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0.4rem 0.8rem;
  display: inline-flex;
  flex-flow: row wrap;
  align-items: center;

  &:hover {
    background: ${(props) =>
      transparentize(0.85, props.color || theme.colors.primary)};
  }
`;

const LinkGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  margin: 0 -0.4rem;

  & > a {
    min-width: 260px;
    flex-basis: 30%;
    flex-grow: 1;
    margin: 0.8rem;
  }
`;

const IndexPage = () => (
  <Layout title="Digital Fashion - PVH Design Package">
    <PageWrapper>
      <PageIntroduction>
        <h2
          style={{
            marginBottom: ".4rem",
            color: "#b3b3b3",
            fontWeight: "normal",
          }}
        >
          PVH Design Package
        </h2>
        <h1 style={{ marginTop: ".4rem" }}>Digital Fashion</h1>
        <p>
          To complement our pitch, we have created this handover package. It's a
          digest of all the findings, exploration and research we did for this
          project. It includes secondary research like trend analysis, as well
          as primary research, interviewing potential users as well as experts.
          We also show in greater detail the different ideas we explored and how
          it evolved during our process. <br />
        </p>
        <p
          style={{
            fontSize: ".8em",
            border: "none",
            opacity: 0.8,
            textTransform: "uppercase",
          }}
        >
          MADE BY: Debora Viegas, Marcos Arruda, Albert Urchukov & Nils Westhoff
          <br />
          12 JUNE 2020
        </p>
      </PageIntroduction>

      <ContentContainer>
        <h2>Secondary research</h2>
        <p>
          The point of this secondary research was to collect data that deepens
          our understanding of the problem space.
        </p>

        <h3>Trends</h3>
        <h4>Industry</h4>
        <ul>
          <li>Digital & physical fashion are converging at high speed.</li>
          <li>
            Fashion industry faces an ‘existential crisis’,{" "}
            <a href="https://www.theguardian.com/fashion/2020/apr/22/lockdown-fashion-wakeup-call-coronavirus-lockdown">
              the lockdown has been a wakeup call for the whole industry
            </a>
            &nbsp;and Gucci has just announced{" "}
            <a href="https://www.highsnobiety.com/p/gucci-seasonless/">
              it is going seasonless
            </a>
            .
          </li>
          <li>
            Fashion needs a shared purpose, with a sustainable future as a pole
            star, as it’s now responsible{" "}
            <a href="https://www.businessinsider.com/fast-fashion-environmental-impact-pollution-emissions-waste-water-2019-10?r%3DUS%26IR%3DT">
              for 10% of all humanity's carbon emissions.
            </a>
          </li>
          <li>
            ‘Radical transparency’ and ‘ethical fashion’ are no longer
            buzzwords.
          </li>
          <li>
            Fashion is going digital: digital clothes (like{" "}
            <a href="https://digitalcollection.carlings.com/">Carlings</a>
            &nbsp;and <a href="https://r-o-h-b-a-u.com/">Rohbau</a>
            ), virtual fashion shows, virtual influencers,{" "}
            <a href="https://divante.com/blog/examples-of-ar-powered-virtual-try-ons-in-the-fashion-industry/">
              AR-powered virtual try-ons
            </a>
            .
          </li>
          <li>
            A new way of values exchange are emerging (Money, data, power, time,
            support).
          </li>
          <li>
            Mainstream brands (like Tommy Hilfiger) are starting to committing
            to 100% digital design.
          </li>
          <li>
            Fashion and beauty brands{" "}
            <a href="https://www.voguebusiness.com/technology/fashion-beauty-brands-taking-ar-seriously">
              are starting to take AR more seriously
            </a>
          </li>
        </ul>
      </ContentContainer>
    </PageWrapper>

    <ImageCarousel
      imageArr={[
        {
          src: "/img/virtual-army.png",
          desc: (
            <span>
              Balmain commissioned the former fashion photographer Cameron-James
              Wilson to create a “virtual army” of digital models, including,
              from left, Margot, Shudu and Zhi. (
              <a
                href="https://www.balmain.com/lu/balmain/balmains-new-virtual-army"
                target="blank"
              >
                source
              </a>
              )
            </span>
          ),
        },
        {
          src: "/img/seenowbuynow.png",
          desc: (
            <span>
              Pinko staged a “See Now, Buy Now” runway show, featuring 25 looks
              from its current collection against a virtual backdrop (
              <a
                href="http://www.wearglobalnetwork.com/news/pinko-staged-see-now-buy-now-virtual-runway-show-as-part-of-shanghai-fashion-week/"
                target="blank"
              >
                source
              </a>
              ).
            </span>
          ),
        },
        {
          src: "/img/coronavirus-store.png",
          desc: (
            <span>
              Kenneth Cole sums up the coronavirus reality while retaining his
              signature humor (
              <a
                href="https://wwd.com/business-news/business-features/fashion-retail-covid-19-coronavirus-bankrtupcies-pandemic-giorgio-armani-saks1203549193-1203549193/"
                target="blank"
              >
                source
              </a>
              ).
            </span>
          ),
        },
      ]}
    />

    <PageWrapper>
      <ContentContainer>
        <h4>Consumer</h4>
        <ul>
          <li>
            Consumers are starting to shift towards supporting small, local and
            independent brands and designers. &nbsp;
          </li>
          <li>
            <a href="https://www.adweek.com/brand-marketing/influencers-created-world-normal-people-hold-sway/">
              Tastemaking has been democratized by influencers
            </a>
            .
          </li>
          <li>
            <a href="https://www.ribbonfarm.com/series/domestic-cozy/">
              Domestic cosy
            </a>
            : as gen Z are more likely to stay at home (not only because of
            coronavirus), ‘inactive-wear’ is becoming a thing.
          </li>
          <li>
            Internet users are moving from sharing as a method of broadcasting
            themselves, into a way of sharing{" "}
            <a href="https://blog.globalwebindex.com/chart-of-the-week/online-communities/">
              that has community at its heart
            </a>
            .
          </li>
          <li>
            A decade-long build-up of bargain shopping culture{" "}
            <a href="https://www.mckinsey.com/~/media/mckinsey/industries/retail/our%2520insights/its%2520time%2520to%2520rewire%2520the%2520fashion%2520system%2520state%2520of%2520fashion%2520coronavirus%2520update/the-state-of-fashion-2020-coronavirus-update-vf.ashx">
              will be exacerbated by a rise in anticonsumerism
            </a>
            .
          </li>
          <li>
            Consumers seek out brands that they align with morally more than
            ever before,{" "}
            <a href="https://edited.com/resources/coronavirus-and-sustainable-fashion/">
              with an emphasis placed on conscious products
            </a>
            .
          </li>
        </ul>

        <h3>Experts</h3>
        <p>
          We were guided by the principle of authenticity to make sure these
          quotes offer PVH a first-hand introduction to powerful patterns in the
          data. According to the fashion industry leaders, the COVID-19
          pandemic, which has demanded a rethink of so many industry practices,
          can finally generate an era of slower fashion with fewer seasonal
          collections, deliveries suited to the weather and fewer markdowns.
        </p>
        <blockquote>
          “Considering that all of us — I mean us designers — have been
          complaining about the pace of fashion, about the unsustainable speed
          that the delivery calendar had us keep, this is for sure a chance to
          rethink a lot of things, including seasonality.”
          <span className="quoteBy">Donatella Versace</span>
        </blockquote>
        <p>
          Designers and business people are supporting fewer, smaller and more
          season-less collections, and this movement was accelerated in 2020
          with a global crisis;
        </p>
        <blockquote>
          “Less garments, less shows, less travel, less logistics transport,
          less but better fabrics — less, less, less but better thinking on
          usefulness for our future. There is always fashion, but the question
          is, what is it going to be, and how do we need clothing, bags,
          jewellery, and accessories in the world to come?”
          <span className="quoteBy">
            Marine Serre (
            <a href="https://wwd.com/fashion-news/fashion-features/coronavirus-effect-sustainable-1203562958/">
              source
            </a>
            )
          </span>
        </blockquote>
        <p>
          The next quote is illustrative of the proper mindset change inside the
          fashion industry and how to address customer needs.
        </p>
        <blockquote>
          “There could be more of a shift to on-demand production, which is a
          way to mitigate risk, and obviously there is a huge waste-reduction
          and material-use benefit because you aren’t purchasing and selling the
          excess. I could see more companies thinking about real-time production
          responding to consumer demand.”
          <span className="quoteBy">Saskia van Gessen</span>
        </blockquote>
        <p>
          It is time to rethink new business models, more collaboration and a
          sense of individual responsibility when it comes to consuming fashion.
          When Dominique Drakeford was asked what's most important for a
          sustainable fashion industry, she said:
        </p>
        <blockquote>
          “People. You, me, us. We have to understand ourselves first before we
          can fix fashion.”
          <span className="quoteBy">
            Dominique Drakeford (
            <a href="https://wtvox.com/sustainable-fashion/sustainable-fashion-influencers/">
              source
            </a>
            )
          </span>
        </blockquote>
        <p>
          More people are engaging in environmental issues movements, social
          causes and supporting communities around the world.
        </p>
        <blockquote>
          “But we’re also seeing some of the most beautiful parts of humanity —
          the global sense of connection, realizing your actions make a
          difference not just for you and your household, but for the community
          and public good”
          <span className="quoteBy">
            Kathleen Talbot (
            <a href="https://wwd.com/fashion-news/fashion-features/coronavirus-effect-sustainable-1203562958/">
              source
            </a>
            )
          </span>
        </blockquote>

        <h3>Numbers</h3>
        <ul>
          <li>
            The fashion industry produces 10% of all humanity’s carbon emissions
            and is the second-largest consumer of the world’s water supply.
          </li>
          <li>
            Here are the most significant impacts fast fashion has on the
            planet.
          </li>
          <li>Clothing production has roughly doubled since 2000.</li>
          <li>
            While people bought 60% more garments in 2014 than in 2000, they
            only kept the clothes for half as long.
          </li>
          <li>
            In Europe, fashion companies went from an average offering of two
            collections per year in 2000 to five in 2011.
          </li>
          <li>
            Some brands offer even more. Zara puts out 24 collections per year,
            while H&amp;M offers between 12 and 16.
          </li>
          <li>
            A lot of this clothing ends up in the dump. The equivalent of one
            garbage truck full of clothes is burned or dumped in a landfill
            every second.
          </li>
          <li>
            In total, up to 85% of textiles go into landfills each year. That’s
            enough to fill the Sydney harbour annually.
          </li>
          <li>
            Washing clothes, meanwhile, releases 500,000 tons of microfibers
            into the ocean each year — the equivalent of 50 billion plastic
            bottles.
          </li>
          <li>
            Many of those fibres are polyester, a plastic found in an estimated
            60% of garments. Producing polyester releases two to three times
            more carbon emissions than cotton, and polyester does not break down
            in the ocean.
          </li>
        </ul>
      </ContentContainer>
    </PageWrapper>
    <ImageCarousel
      imageArr={[
        {
          src: "/img/waste-clothing.png",
          desc: (
            <span>
              Figure: How much clothing do we waste (
              <a
                href="https://www.weforum.org/agenda/2019/01/by-the-numbers-the-economic-social-and-environmental-impacts-of-fast-fashion"
                target="blank"
              >
                source
              </a>
              )
            </span>
          ),
        },
        { src: "/img/image2.jpg" },
        { src: "/img/image3.jpg" },
      ]}
    />
    <PageWrapper>
      <ContentContainer wide>
        <h3>Useful Links</h3>
        <LinkGrid>
          <Microlink url="https://www.weforum.org/agenda/2020/01/fashion-industry-carbon-unsustainable-environment-pollution/" />
          <Microlink url="https://wtvox.com/sustainable-fashion/can-fashion-learn-about-sustainability-from-the-food-industry/" />
          <Microlink url="https://wtvox.com/sustainable-fashion/sustainable-fashion-influencers/" />
          <Microlink url="https://wtvox.com/sustainable-fashion/ten-slow-fashion-brands-leading-the-sustainability-revolution/" />
          <Microlink url="https://www.voguebusiness.com/technology/fashion-beauty-brands-taking-ar-seriously" />
          <Microlink url="https://www.springwise.com/virtual-influencer-has-very-real-impact-on-fashion-industry/" />
          <Microlink url="https://www.forbes.com/sites/veronikasonsev/2019/11/27/patagonias-focus-on-its-brand-purpose-is-great-for-business/#2132826b54cb" />
          <Microlink url="https://www.kleiderly.com/our-blog/impact-of-clothing-waste" />
          <Microlink url="https://www.nature.com/articles/s43017-020-0039-9" />
          <Microlink url="https://www.thedrum.com/opinion/2019/12/05/virtual-influencer-trends-overview-the-industry" />
          <Microlink url="https://www.nytimes.com/2019/12/17/style/fast-fashion-gen-z.html" />
        </LinkGrid>
      </ContentContainer>

      <ContentContainer>
        <h2>Primary Research</h2>
        <p>
          Over the weeks of work, we did deep interviews with 20 people from
          various backgrounds. During the first week of primary research, we
          spoke with users and experts in the field. We questioned broad issues
          around fashion, sustainability and the behaviour of buying and
          selling.
        </p>
        <h3>User Research</h3>
        <p>
          Our user research was done with a spread of young conscious people to
          (slightly less young) avid shoppers. To summarize their thoughts, we
          found these key takeaways.
        </p>
        <h4>Challenges which digital fashion face</h4>
        <ul>
          <li>
            Currently, the most prevalent use-case is just trying something new.
            The future might take it mainstream.
          </li>
          <li>
            People don't like the idea of wearing basic digital stuff by
            mass-market brands.
          </li>
        </ul>
        <h4>
          Desire to support small, local and independent businesses/designers
        </h4>
        <ul>
          <li>
            Prefers to buy from local stores, micro manufacturers. The quality
            is perceived as better, and supports value-driven businesses.
          </li>
        </ul>
        <h4>Behaviour paradox: minimalism x impulse to buy</h4>
        <ul>
          <li>Following minimalism isn't easy, you need to be creative.</li>
          <li>
            Even heavy consumers see that maybe living on less would be better.
          </li>
          <li>People buy for pleasure. It's an impulsive decision.</li>
        </ul>
        <h4>Ways to increase the physical and fashion life-span of clothes</h4>
        <ul>
          <li>Clothes that you can recolour every year</li>
          <li>
            Functional clothing with a lifetime warranty is ok. But I want to
            look different with my day-to-day clothing.
          </li>
        </ul>
        <h4>The needs addressed by fashion</h4>
        <ul>
          <li>
            The way you dress expresses not only your aesthetic preferences but
            also your beliefs
          </li>
          <li>Fun to have a nice spectrum of colours on your body.</li>
        </ul>
        <h3>Expert Interviews</h3>
        <p>
          For our expert interviews we spoke with digital fashion designers,
          digital influencers, a young psychologist, a leader of B-Corps, people
          from the retail industry, owner of thrift clothes, a guru of community
          management and a digital artist. See the following summary, which is a
          result of their view on the problems around the fashion industry.
        </p>
        <h4>Digital & physical fashion are converging</h4>
        <ul>
          <li>
            You can show that you belong to a certain subculture with digital
            clothes.
          </li>
          <li>
            Tools like SparkAR offer new computer vision technologies that give
            a lot of freedom to merge physical clothing and digital extras from
            brands with the real world.
          </li>
        </ul>
        <h4>Challenges which digital fashion face</h4>
        <ul>
          <li>
            It's manual labour now: you design the personalized piece of
            clothing and then fit it to the photo, considering the light
            sources, etc.
          </li>
          <li>
            Digital fashion will remain niche and artsy if it will not be
            promoted by big brands.
          </li>
          <li>You can not touch and sense digital clothes.</li>
        </ul>
        <h4>Shifting to a digital-first approach</h4>
        <ul>
          <li>Now it's mostly manual labour, but the future is AI.</li>
          <li>
            If fashion brands will apply a digital-first approach, they can do
            more inclusive digital fashion shows.
          </li>
        </ul>
        <h4>
          Digital as an eco-friendly & accessible alternative to physical
          fashion
        </h4>
        <ul>
          <li>
            Digital fashion democratizes high fashion and makes it accessible to
            more people.
          </li>
          <li>
            Digital fashion is eco fashion, there's no waste and it's
            carbon-neutral.
          </li>
          <li>Digital fashion as a subscription: several looks per month.</li>
        </ul>
        <h4>DIY going mainstream?</h4>
        <ul>
          <li>
            Imagine that you can make shorts out of your jeans, and it's planned
            by the manufacturer.
          </li>
          <li>Handmade clothes are really easy to sell.</li>
        </ul>
        <h4>Second-hand clothes: exclusivity and sustainability</h4>
        <ul>
          <li>
            More and more people are moving towards the sustainable side, more
            and more people care about these issues.
          </li>
          <li>Second-hand fashion is: elegance and exclusivity.</li>
        </ul>
        <h4>
          Desire to support small, local and independent businesses/designers
        </h4>
        <ul>
          <li>
            Small companies with a strong culture can boost big players in the
            industry.
          </li>
          <li>
            Secondary production is eco and on the edge, but you can't scale it.
          </li>
        </ul>
        <h4>Potential roles of brands to transition to sustainable options</h4>
        <ul>
          <li>
            Future is personal, brands will gather data about us and offer
            personalized looks.
          </li>
          <li>Communication is the key to changing people's behaviour.</li>
          <li>
            What about a brand that can speak directly to you as a friend?
          </li>
        </ul>
        <h4>Value and Sustainability at the core level</h4>
        <ul>
          <li>
            Sustainability is not only about the manufacturing process. It's
            also about values you translate.
          </li>
          <li>It's necessary to change the measurement of success.</li>
          <li>
            Companies have to create a mission that has sustainability at the
            core.
          </li>
          <li>
            The challenge of B Corps certification is to break the bubble and
            reach other companies (that the core business is questionable).
          </li>
        </ul>
        <h4>The needs addressed by fashion</h4>
        <ul>
          <li>
            Fashion is content. It's a story being consumed and exposed to
            others. It's similar to watching a movie or reading a book.
          </li>
        </ul>
      </ContentContainer>
      <ContentContainer>
        <h2>Personas</h2>
        <p>
          From these insights, we created 3 personas. They summarised our
          research, and helped us design a solution that matches the research we
          have done leading up to the next phase.
        </p>
      </ContentContainer>
    </PageWrapper>
    <PersonaCarousel />
    <PageWrapper>
      <ContentContainer>
        <h3>How might we?</h3>
        <p>
          Despite the rise of the sustainability movement, the majority of young
          fast fashion lovers still just want{" "}
          <a href="https://www.nytimes.com/2019/12/17/style/fast-fashion-gen-z.html">
            cute, cheap outfits that look great on Instagram
          </a>
          . Even those who are concerned by environmental issues, still want to
          look different every day — they don’t really want clothes that last
          long (like 5–10 years).
        </p>
        <blockquote>
          “Dresses become old when you’ve worn them twice”
          <span className="quoteBy">Mia, 16, UK</span>
        </blockquote>
        <p>
          These key takeaways and the brief lead us to find our problem
          statement:{" "}
          <b>
            How might we make people feel they have an endless wardrobe without
            owning stuff?
          </b>
        </p>
      </ContentContainer>
      <ContentContainer>
        <h3>Area of Opportunity</h3>
        <p>
          Designers are exploring the future of digital clothing.{" "}
          <b>Digital Fashion</b> is the visual representation of clothes
          designed and created using computer technologies and 3D softwares. As
          our experts told us, there are two types of digital clothing, one is
          'digitized' versions of regular clothes (they can be used in virtual
          fitting rooms), and the other is conceptual clothes, which are
          designed without the intention to produce them in real life. They can
          be eccentric, extravagant, made of non-conventional materials like
          cellulose, glass, metal, and sometimes they just don’t follow any
          fashion rules and standards. We’re focusing mostly on the second type,
          because it’s more about sustainability and less about consumerism.
        </p>
      </ContentContainer>
      <ContentContainer>
        <h2>Prototypes</h2>
        <p>
          With this insight and a section of PVH feedback, we develop different
          ideas and prototypes.
        </p>

        <h3>Prototype 1: Wearby</h3>
        <p>
          A digital wardrobe with digital trendy clothes and a subscription to
          use exclusive pieces.
        </p>
        <p>
          Play with:{" "}
          <LinkButton
            href="https://framer.com/share/Wearby-y991fGX5lY5J08zcTOqD?fullscreen=1"
            color={theme.colors.azure}
            target="blank"
          >
            <MdSmartphone />
            Prototype 1
          </LinkButton>
        </p>
        <figure>
          <video
            src="/img/prototype-1-mockup.mp4"
            autoPlay
            muted
            loop
            controls={true}
          />
          <figcaption>
            Video: Our prototype to test a digital fashion subscription service
          </figcaption>
        </figure>

        <h4>Feedback</h4>
        <p>
          We interviewed young people from 4 countries to test, learn and
          improve our service.
        </p>
        <ol>
          <li>
            Cool but just to post a nice photo
            <blockquote className="small">
              “I don't think that I would use it so much that it would be worth
              $15 a month.”
              <span className="quoteBy">Aileen, 24 yrs</span>
            </blockquote>
            <blockquote className="small">
              “That kind of fabric [shiny metallic], you can't get this kind of
              look from fabric, so that's really cool to have it on digital and
              make a cool photo of it.”
              <span className="quoteBy">Aileen, 24 yrs</span>
            </blockquote>
            <blockquote className="small">
              “I don’t like to just post a photo on Instagram, but to change a
              behaviour is powerful.”
              <span className="quoteBy">Daniela, 19 yrs</span>
            </blockquote>
          </li>
          <li>
            Digital clothes can allow people to try new things and develop new
            personalities
            <blockquote className="small">
              “Is really important that the clothes resonate with the person
              using the service.”
              <span className="quoteBy">Aileen, 24 yrs</span>
            </blockquote>
          </li>
          <li>
            Endless possibilities are freedom
            <blockquote className="small">
              “it would be nice to see yourself in endless combinations of
              outfits.”
              <span className="quoteBy">Fernando, 22yrs, Spain</span>
            </blockquote>
            <blockquote className="small">
              “I'd like to have such endless possibilities — it's freedom.”
              <span className="quoteBy">Artyom, 24</span>
            </blockquote>
            <blockquote className="small">
              “I would love to try some digital fashion, which I would not be so
              brave to wear outside.”
              <span className="quoteBy">Elya, 27 yrs</span>
            </blockquote>
            <blockquote className="small">
              “I like the idea of more test & learning experiences without
              wasting things.”
              <span className="quoteBy">Daniela, 19 yrs</span>
            </blockquote>
          </li>
        </ol>
        <h3>Prototype 2</h3>
        <p>
          A digital wardrobe and a treasure hunt to find digital clothes to use
          in specific places around the world connecting people, brands and
          places.
        </p>
        <p>
          Play with:{" "}
          <LinkButton
            href="https://framer.com/share/Digital-Clothes-g6MgvoodoVkwO28Uvuvc?fullscreen=1"
            color={theme.colors.violet}
            target="blank"
          >
            <MdSmartphone />
            Prototype 2
          </LinkButton>
        </p>
        <figure>
          <video
            src="/img/prototype-2-mockup.mp4"
            autoPlay
            muted
            loop
            controls={true}
          />
          <figcaption>
            Video: Our prototype to test a digital fashion hunt
          </figcaption>
        </figure>
        <h4>Feedback</h4>
        <p>
          Our second phase of collecting user feedback was done to test another
          prototype which integrated an endless wardrobe with a treasure hunt
          experience. Here are the main takeaways:
        </p>
        <ol>
          <li>
            People want to be better for the world
            <blockquote className="small">
              “If it helps people to become more conscious about consumerism, it
              is really nice.”
              <span className="quoteBy">Diego, 23yrs</span>
            </blockquote>
            <blockquote className="small">
              “If this solution connects with social impact many friends will
              use it.”
              <span className="quoteBy">Daniela, 19yrs</span>
            </blockquote>
            <blockquote className="small">
              “What if you can support a cause or your fav band and buy this
              piece of digital merchandise?”
              <span className="quoteBy">Natasha, 23 yrs</span>
            </blockquote>
          </li>
          <li>
            Your outfit can express what you stand for
            <blockquote className="small">
              “I like to post about causes, this year I was really engaged with
              the Black Lives Matter movement and the fashion revolution.”
              <span className="quoteBy">Catarina, 18 yrs</span>
            </blockquote>
            <blockquote className="small">
              “Fashion is a story I consume and expose to others.”
              <span className="quoteBy">Daniel, 32 yrs</span>
            </blockquote>
          </li>
          <li>
            I want to show more content and story behind a piece of clothes
            <blockquote className="small">
              “For me, it is important to know how to help a cause and the real
              story behind, not just a photo.”
              <span className="quoteBy">Catarina, 18 yrs</span>
            </blockquote>
          </li>
        </ol>
        <p>
          For some of our expert interviewees to post a photo is about
          representation, not just having fun, and for fashion bloggers, it’s
          like a part-time job. Here are the main takeaways:
        </p>
        <ol>
          <li>
            Ideas for a new post is wealth
            <blockquote className="small">
              “It's cool to use it when you don't have time for ideas for new
              posts.”
              <span className="quoteBy">Varya, 20yrs, fashion influencer</span>
            </blockquote>
            <blockquote className="small">
              “During the lockdown, it's hard to be an influencer — stores are
              closed, and you need to come up with ideas or lose the audience.”
              <span className="quoteBy">Artyom, 24yrs, stylist</span>
            </blockquote>
            <blockquote className="small">
              “I have to post selfies and outfits in order to demonstrate my
              social value.”
              <span className="quoteBy">
                Yulia, 34 yrs, influencer marketing manager
              </span>
            </blockquote>
          </li>
          <li>
            I would like to have exclusive pieces
            <blockquote className="small">
              “I'd like to have clothes which you can't find anywhere else.”
              <span className="quoteBy">Varya, 20yrs</span>
            </blockquote>
          </li>
          <li>
            Not every brand has a future vision
            <blockquote className="small">
              “I think this app is not just for mass-market brands, but mostly
              for top pieces, luxury brands, hype brands and brands with a
              future vision.”
              <span className="quoteBy">Yulia, 34 yrs</span>
            </blockquote>
            <blockquote className="small">
              “Asian fashion is made for this app.”
              <span className="quoteBy">Varya, 20yrs</span>
            </blockquote>
          </li>
        </ol>
        <h3>Prototype 3: Manifest</h3>
        <p>
          After incorporating the feedback, we created our final solution.
          <b>Manifest</b>: a digital fashion platform for real-life impact.
          Connecting causes and an endless wardrobe, so what you wear becomes a
          statement.
        </p>
        <p>
          Play with:{" "}
          <LinkButton
            href="https://framer.com/share/Manifest-aPC34vm0dLqf2BJAJxU3?fullscreen=1"
            target="blank"
          >
            <MdSmartphone />
            Prototype 3
          </LinkButton>
        </p>
        <figure>
          <video
            src="/img/prototype-3-mockup.mp4"
            autoPlay
            muted
            loop
            controls={true}
          />
          <figcaption>
            Video: Our prototype that drives social impact through digital
            fashion
          </figcaption>
        </figure>

        <blockquote className="small">
          “You guys are solving a real problem.”
          <span className="quoteBy">Wes</span>
        </blockquote>
        <blockquote className="small">
          “Got me excited about the future of fashion!”
          <span className="quoteBy">Kristin</span>
        </blockquote>
      </ContentContainer>

      <ContentContainer>
        <h2>Feasibility</h2>
        <p>
          We see a few prerequisites for Manifest to succeed tech-wise. First,
          relatively fast hardware is needed. Modern android phones are equipped
          with <a href="https://developers.google.com/ar/discover">ARCore</a>
          &nbsp;support and iPhones run{" "}
          <a href="https://developer.apple.com/augmented-reality/">ARKit</a>
          &nbsp;and RealityKit. Both of these are already widely supported by 3D
          render engines like Unity and Unreal, and even dedicated AR tools like{" "}
          <a href="https://sparkar.facebook.com/ar-studio/">SparkAR</a>
          &nbsp;exist. These tools lower the barrier to market, and make
          developing Instagram filters trivial.
        </p>
        <p>
          However, digital fashion brings a few new issues. Currently applying
          digital clothes to a photo require&nbsp;a lot of manual labor. Which
          is caused by three things:
        </p>
      </ContentContainer>
      <ContentContainer wide>
        <ThreeColumnDiv>
          <Col>
            <h4>1. Body types</h4>
            Body types vary, and physical clothes come in different sizes. To
            realistically apply digital clothes to a photo, they have to match
            the size and body shape of the subject.
          </Col>
          <Col>
            <h4>2. Masking</h4>
            Since part of the clothes realistically end up behind the subject,
            the subject has to be isolated from the photo in order to
            convincingly superimpose the model on the subject.
          </Col>
          <Col>
            <h4>3. Draping</h4>
            Textiles are flexible. They have to realistically drape over and
            move with the subject of the photo.
          </Col>
        </ThreeColumnDiv>
      </ContentContainer>
      <ContentContainer>
        <br />
        <h3>Solutions</h3>
        <p>To solve these issues, we suggest a few areas of development.</p>
      </ContentContainer>
      <ContentContainer wide>
        <ThreeColumnDiv>
          <Col>
            <h4>1. Parametric</h4>
            3D fashion has to be parametric; that means, driven by body
            dimensions. These dimensions have to be inferred from the photo
            being taken. It's likely necessary to take a few overview photos of
            the subject before the software will be able to estimate dimensions.{" "}
            <img alt="image8" src="img/image8.png" />
          </Col>
          <Col>
            <h4>2. Subject Separation</h4>
            Currently hardware isn't fast enough to separate a subject from the
            background in realtime, but a static image is easy to process.
            Services like <a href="https://www.remove.bg/">remove.bg</a> go a
            long way to separate subjects. Services like these are likely
            running on open source AI models to achieve pattern recognition like{" "}
            <a href="https://github.com/NathanUA/U-2-Net">Uˆ2-Net</a>
            .
            <br />
            <img alt="Uˆ2-Net model" src="img/U2NETPR.png" />
          </Col>
          <Col>
            <h4>3. Real-time cloth simulation</h4>
            Technologies regarding{" "}
            <a href="https://www.youtube.com/watch?v=wtpPxLmiykk">
              real-time cloth simulation
            </a>
            &nbsp;have come a long way. Which might be a solution, although we
            foresee it could also be faked by 'pre-crumpling' for a few sizes,
            which will then be slightly distorted and morphed to fit the subject
            better.
            <figure>
              <video
                src="/img/realtime-cloth-simulation.mp4"
                autoPlay
                muted
                loop
              />
              <figcaption>
                Video: nvidia real-time cloth simulation demo (
                <a href="https://www.youtube.com/watch?v=wtpPxLmiykk">source</a>
                )
              </figcaption>
            </figure>
          </Col>
        </ThreeColumnDiv>
      </ContentContainer>
      <ContentContainer>
        <p>
          To conclude, we're not saying this will be an easy feat. With this
          section we hope to illustrate the current issues that need to be
          solved, in order to give a better understanding of the road ahead. All
          the parts to achieve the proposed solution are there, however, PVH
          could be the one to bring it all together, to push the industry
          forward.
        </p>
      </ContentContainer>

      <ContentContainer wide>
        <h3>Pitch</h3>
        <LazyLoad height={720}>
          <ResponsiveIFrameContainer>
            <ResponsiveIFrame
              src="https://www.icloud.com/keynote/0nNSSXm5rlCVRMAVkh5AlthNA?embed=true"
              width="100%"
              height="720"
              frameBorder="0"
              allowFullScreen
              // referrer="no-referrer"
            />
          </ResponsiveIFrameContainer>
        </LazyLoad>
      </ContentContainer>
      <ContentContainer>
        <h2>Last words</h2>
        <p>
          If you're done reading everything, and still curious, we have made all
          of our research available on our Miro board:
        </p>
        <LinkButton
          color="#ffd02f"
          target="blank"
          href="https://miro.com/app/embed/o9J_krZHydI=/?"
        >
          <MdWeb style={{ marginRight: ".4rem" }} /> Miro Board
        </LinkButton>
      </ContentContainer>
    </PageWrapper>
  </Layout>
);

export default IndexPage;
