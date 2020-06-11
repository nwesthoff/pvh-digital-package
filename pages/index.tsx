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
        <p>All our research can be found on our Miro board:</p>
        <LinkButton
          color="#ffd02f"
          target="blank"
          href="https://miro.com/app/embed/o9J_krZHydI=/?"
        >
          <MdWeb style={{ marginRight: ".4rem" }} /> Miro Board
        </LinkButton>
      </ContentContainer>
      <ContentContainer>
        <h3>Trends+</h3>
        <ul>
          <li>Digital & physical fashion are converging.</li>
          <li>Values and Sustainability at the core level.</li>
          <li>Transparency Ethical Values</li>
          <li>
            Desire to support small, local and independent businesses/designers
          </li>
          <li>Digital Parties</li>
          <li>AR - try-on</li>
          <li>
            Comfy -&nbsp;‘inactive-wear’; really comfortable clothes for wearing
            at home.
          </li>
          <li>3D printing</li>
          <li>New kinds of Influencers</li>
          <li>Co-creation</li>
          <li>New digital communities</li>
          <li>Digital Sales</li>
          <li>Industry's Carbon</li>
          <li>Sustainable Impact</li>
          <li>Anti-excess consumerism</li>
          <li>Slow fashion</li>
          <li>Digitalization of everything</li>
          <li>Lower or zero waste lifestyle</li>
          <li>Values Exchanges (Money, data, power, time, support)</li>
          <li>Monetary returns to an ORG with each purchase</li>
          <li>Clothing that lasts long</li>
          <li>Digital fashion</li>
        </ul>
        <h4>Socio-economic, Ecologic & Politics</h4>
        <ul>
          <li>Covid-19</li>
          <li>Physical Stores Close</li>
          <li>
            As people settle into self-isolation, consumers have a newfound
            appreciation for nature + space
          </li>
          <li>
            Post-virus, consumers will seek out brands that they align with
            morally more than ever before, with an emphasis placed on conscious
            products.
          </li>
          <li>Fashion events are democratized</li>
          <li>IRL fashion shows</li>
          <li>100% digital design by 2022</li>
          <li>Fashion designers are now being trained in 3D design</li>
          <li>
            Augmented reality, virtual reality and mixed reality solutions are
            all under consideration
          </li>
          <li>Purpose-driven companies</li>
          <li>
            DIGITAL CLOTHES: a solution to one of the world’s major eco problems
            might involve creating{" "}
            <a href="https://www.designboom.com/tag/fashion-design-phenomenons/">
              clothes
            </a>{" "}
            that don’t actually exist.{" "}
            <a href="https://www.designboom.com/tag/fashion-technology/">
              Digital fashion
            </a>
            , which refers to 3D-rendered garments that only exist{" "}
            <a href="https://www.designboom.com/tag/virtual-and-augmented-reality/">
              virtually
            </a>
            , is a very real idea that offers much greener, zero-waste
            alternatives in a world with growing fears over waste and concerns
            about the negative effects of manufacturing.
          </li>
        </ul>
      </ContentContainer>
      <ContentContainer>
        <h3>Experts</h3>
        <blockquote>
          “Considering that all of us — I mean us designers — have been
          complaining about the pace of fashion, about the unsustainable speed
          that the delivery calendar had us keep, this is for sure a chance to
          rethink a lot of things, including seasonality.”
          <span className="quoteBy">Donatella Versace</span>
        </blockquote>
        <blockquote>
          “Less garments, less shows, less travel, less logistics transport,
          less but better fabrics — less, less, less but better thinking on
          usefulness for our future. There is always fashion, but the question
          is, what is it going to be, and how do we need clothing, bags,
          jewellery, and accessories in the world to come?”
          <span className="quoteBy">Marine Serre</span>
        </blockquote>
        <blockquote>
          “There could be more of a shift to on-demand production, which is a
          way to mitigate risk, and obviously there is a huge waste-reduction
          and material-use benefit because you aren’t purchasing and selling the
          excess. I could see more companies thinking about real-time production
          responding to consumer demand.”
          <span className="quoteBy">Saskia van Gessen</span>
        </blockquote>
        When Dominique Drakeford was asked what's most important for a
        sustainable fashion industry, she said:
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
      </ContentContainer>

      <ContentContainer>
        <h3>Numbers</h3>
        <p>
          The fashion industry produces 10% of all humanity’s carbon emissions
          and is the second-largest consumer of the world’s water supply.
        </p>
        <p>
          Here are the most significant impacts fast fashion has on the planet.
        </p>
        <p>Clothing production has roughly doubled since 2000.</p>
        <p>
          While people bought 60% more garments in 2014 than in 2000, they only
          kept the clothes for half as long.
        </p>
        <p>
          In Europe, fashion companies went from an average offering of two
          collections per year in 2000 to five in 2011.
        </p>
        <p>
          Some brands offer even more. Zara puts out 24 collections per year,
          while H&M offers between 12 and 16.
        </p>
        <p>
          A lot of this clothing ends up in the dump. The equivalent of one
          garbage truck full of clothes is burned or dumped in a landfill every
          second.
        </p>
        <p>
          In total, up to 85% of textiles go into landfills each year. That’s
          enough to fill the Sydney harbour annually.
        </p>
        <p>
          Washing clothes, meanwhile, releases 500,000 tons of microfibers into
          the ocean each year — the equivalent of 50 billion plastic bottles.
        </p>
        <p>
          Many of those fibres are polyester, a plastic found in an estimated
          60% of garments. Producing polyester releases two to three times more
          carbon emissions than cotton, and polyester does not break down in the
          ocean.
        </p>
        <figure>
          <img src="/img/waste-clothing.png" loading="lazy" />
          <figcaption>
            Figure: How much clothing do we waste (
            <a
              href="https://www.weforum.org/agenda/2019/01/by-the-numbers-the-economic-social-and-environmental-impacts-of-fast-fashion"
              target="blank"
            >
              source
            </a>
            )
          </figcaption>
        </figure>
      </ContentContainer>

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
        <h4>The needs addressed by fashion</h4>
        <ul>
          <li>
            Fashion is content. It's a story being consumed and exposed to
            others. It's similar to watching a movie or reading a book.
          </li>
        </ul>
      </ContentContainer>
    </PageWrapper>
    <PersonaCarousel />
    <PageWrapper>
      <ContentContainer>
        <h3>Prototypes</h3>
        <p>
          These key takeaways and the brief lead us to find our problem
          statements:{" "}
          <b>
            How might we make people have an endless wardrobe without owning
            stuff?
          </b>
        </p>
        <p>
          With this insight and a section of PVH feedback we develop different
          ideas and prototypes.
        </p>

        <h4>Prototype 1: Wearby</h4>
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

        <h4>Prototype 2</h4>
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
          <figcaption>Video: Our prototype to test digital fashion</figcaption>
        </figure>
        <h4>Prototype 3: Manifest</h4>
        <p>
          Connecting causes and an endless wardrobe to share contents and become
          a more conscious person.
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
      </ContentContainer>
      <ContentContainer>
        <h3>Interviews</h3>
        <blockquote>
          “It would be nice to see yourself in endless combinations of outfits.”
          <span className="quoteBy">Fernando, 22</span>
        </blockquote>
        <blockquote>
          “People can develop personality in clothing and not always use the
          same neutral colours.”
          <span className="quoteBy">Fernando, 22</span>
        </blockquote>
        <blockquote>
          “I'd like to have such endless possibilities — it's freedom.”
          <span className="quoteBy">Ayrton, 24</span>
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
    </PageWrapper>
  </Layout>
);

export default IndexPage;
