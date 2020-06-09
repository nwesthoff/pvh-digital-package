import Layout from "../components/Layout";
import PageIntroduction from "../components/PageIntroduction";
import { PageWrapper } from "../components/PageWrapper";
import ContentContainer from "../components/ContentContainer";
import Microlink from "@microlink/react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { transparentize } from "polished";
import { MdSmartphone } from "react-icons/md";
import PersonaCarousel from "../components/Personas";

const LinkButton = styled.a`
  background: ${(props: { color?: string }) =>
    transparentize(0.95, props.color || theme.colors.primary)};
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
          style={{ marginBottom: ".4rem", opacity: 0.75, fontWeight: "normal" }}
        >
          PVH Design Package
        </h2>
        <h1 style={{ marginTop: ".4rem" }}>Digital Fashion</h1>
        <p>
          This is an interactive and experiential special on{" "}
          <i>Experience Design</i>. It gives an overview of a design process and
          the tools that could be used during each step of a design process.
          Each step of the process will be backed by a case study, that
          demonstrate the key findings these tools bring. <br />
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
            <a href="https://www.google.com/url?q=https://www.designboom.com/tag/fashion-design-phenomenons/&amp;sa=D&amp;ust=1591717797296000">
              clothes
            </a>{" "}
            that don’t actually exist.{" "}
            <a href="https://www.google.com/url?q=https://www.designboom.com/tag/fashion-technology/&amp;sa=D&amp;ust=1591717797297000">
              Digital fashion
            </a>
            , which refers to 3D-rendered garments that only exist{" "}
            <a href="https://www.google.com/url?q=https://www.designboom.com/tag/virtual-and-augmented-reality/&amp;sa=D&amp;ust=1591717797297000">
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
          Over the weeks of work, we did deep interviews with 19 people from
          different background as a 3D designer, digital influencer, owner of
          futuristic clothes, young conscious people, B Corporations leader,
          people from industry of retail, owner of thrift clothes, young social
          media users, young psychologist, digital fashion designer, a guru of
          community management and digital artist.
        </p>
        <p>
          In the first week of primary research, we talked with users and
          experts in the field and questioned broad issues around fashion,
          sustainability, the behaviour of buying and selling. As a summary of
          the result of their thoughts, we found these key takeaways.
        </p>
        <h4>1. Digital & physical fashion are converging</h4>
        <ul>
          <li>
            You can show that you belong to a certain subculture with digital
            clothes.
          </li>
          <li>
            Spark AR with new computer vision technology gives a lot of freedom
            to actually merge physical clothing and digital extras from brands.
          </li>
        </ul>
        <h4>2. Challenges which digital fashion face</h4>
        <ul>
          <li>You can not touch and sense digital clothes.</li>
          <li>
            Now: the main motivation is just trying something new. Future:
            mainstream.
          </li>
          <li>
            People don't like the idea of wearing basic digital stuff by
            mass-market brands.
          </li>
          <li>
            Digital fashion will remain niche and artsy if it will not be
            promoted by big brands.
          </li>
          <li>
            It's manual labour now: you design the personalized piece of
            clothing and then fit it to the photo, considering the light
            sources, etc.
          </li>
        </ul>
        <h4>3. Shifting to a digital-first approach</h4>
        <ul>
          <li>Now it's mostly manual labour, but the future is AI.</li>
          <li>
            If fashion brands will apply a digital-first approach, they can do
            more inclusive digital fashion shows.
          </li>
          <li>Fun to have a nice spectrum of colours on your body.</li>
        </ul>
        <h4>
          4. Digital as an eco-friendly & accessible alternative to physical
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
        <h4>5. DIY going mainstream?</h4>
        <ul>
          <li>
            Imagine that you can make shorts out of your jeans, and it's planned
            by the manufacturer.
          </li>
          <li>Handmade clothes are really easy to sell.</li>
        </ul>
        <h4>6. Second-hand clothes: exclusivity and sustainability</h4>
        <ul>
          <li>
            More and more people are moving towards the sustainable side, more
            and more people are caring about these issues.
          </li>
          <li>Second-hand fashion is: elegance and exclusivity.</li>
        </ul>
        <h4>
          7. Desire to support small, local and independent businesses/designers
        </h4>
        <ul>
          <li>
            Prefers to buy from Local - micro manufacturers - quality better,
            and support value-driven businesses.
          </li>
          <li>
            Small companies with a strong culture can boost big players in the
            industry.
          </li>
          <li>
            Secondary production is eco and on the edge, but you can't scale it.
          </li>
        </ul>
        <h4>
          8. Potential roles of brands to transition to sustainable options
        </h4>
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
        <h4>9. Behaviour paradox: minimalism x impulse to buy</h4>
        <ul>
          <li>Following minimalism isn't easy, you need to be creative.</li>
          <li>Maybe living on less would be better.</li>
          <li>People buy for pleasure and impulse.</li>
        </ul>
        <h4>10. Value and Sustainability at the core level</h4>
        <ul>
          <li>
            Sustainability is not only about the manufacturing process. It's
            also about values you translate.
          </li>
          <li>Necessary to change the measurement of success.</li>
          <li>
            Companies have to create a mission that has sustainability at the
            core.
          </li>
          <li>
            The challenge of B Corps certification is to break the bubble and
            reach other companies (that the core business is questionable).
          </li>
        </ul>
        <h4>
          11. Ways to increase the physical and fashion life-span of clothes
        </h4>
        <ul>
          <li>Clothes that you can recolour every year</li>
          <li>
            Functional clothing with a lifetime warranty is ok. But I want to
            look different with my day-to-day clothing
          </li>
        </ul>
        <h4>12. The needs addressed by fashion</h4>
        <ul>
          <li>
            The way you dress expresses not only your aesthetic preferences but
            also your beliefs
          </li>
          <li>
            For me fashion is content, it's a story I consume and expose to
            others. It's like watching a movie or reading a book
          </li>
        </ul>
      </ContentContainer>
    </PageWrapper>
    <PersonaCarousel />
    <PageWrapper>
      <ContentContainer>
        {/* FIXME: Add images of prototype */}
        <h3>Prototypes</h3>
        <p>
          These key takeaways and the brief lead us to find our problem
          statements:{" "}
          <b>
            How might we make people have an endless wardrobe without owning
            stuff?
          </b>
          <br />
          With this insight and a section of PVH feedback we develop different
          ideas and prototypes.
        </p>
        <LinkButton
          href="https://framer.com/share/Wearby-y991fGX5lY5J08zcTOqD?fullscreen=1"
          color={theme.colors.azure}
          target="blank"
        >
          <MdSmartphone />
          Prototype 1
        </LinkButton>
        <LinkButton
          href="https://framer.com/share/Digital-Clothes-g6MgvoodoVkwO28Uvuvc?fullscreen=1"
          color={theme.colors.violet}
          target="blank"
        >
          <MdSmartphone />
          Prototype 2
        </LinkButton>
        <LinkButton
          href="https://framer.com/share/Manifest-aPC34vm0dLqf2BJAJxU3?fullscreen=1"
          target="blank"
        >
          <MdSmartphone />
          Prototype 3
        </LinkButton>

        <p>
          <b>Manifest</b>: A digital wardrobe with digital trendy clothes and a
          subscription to use exclusive pieces.
        </p>
        <figure>
          <video src="/img/digital-fashion-prototype.mp4" autoPlay muted loop />
          <figcaption>Figure: Our prototype to test Digital Fashion</figcaption>
        </figure>
        <p>
          Connecting causes and an endless wardrobe to share contents and become
          a more conscious person.
        </p>
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
    </PageWrapper>
  </Layout>
);

export default IndexPage;
