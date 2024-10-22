// @ts-nocheck
import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import * as S from "@src/templates/portfolio/portfolioStyle";
import Title from "@components/Title";
import { StaticImage } from "gatsby-plugin-image";
import useProjectsData from "@hooks/useProjectsData";
import "react-vertical-timeline-component/style.min.css";
import SEO from "@components/SEO";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const PortfolioPage: React.FC<PageProps<Queries.AllProjectsQuery>> = ({
  data,
}) => {
  const projects = useProjectsData();
  const projectsList = data.allMdx.nodes;

  return (
    <S.Container>
      <Title>Meus projetos</Title>
      <S.AboutText>
        Aqui você encontra todos os meus projetos em ordem cronologicamente
        !!incorreta.
      </S.AboutText>

      <S.TimelineContainer animate={true} layout="2-columns">
        {projectsList &&
          projectsList.map((project) => (
            <VerticalTimelineElement
              key={project.id}
              className="vertical-timeline-element"
              contentArrowStyle={{ borderRight: "10px solid  " }}
              date={project.frontmatter.date}
              iconStyle={{
                background: "transparent",
                width: "30px",
                height: "30px",
                alignItems: "center",
                alignSelf: "center",
              }}
              icon={""}
            >
              <S.ProjectContainer>
                <S.ProjectImage>
                  <GatsbyImage
                    image={getImage(project.frontmatter.image)}
                    alt={project.frontmatter.title}
                    placeholder="blurred"
                  />
                </S.ProjectImage>

                <S.ProjectContent>
                  <S.ProjectTitle>{project.frontmatter?.title}</S.ProjectTitle>

                  <S.ProjectDescription>
                    {project.frontmatter.description}
                  </S.ProjectDescription>

                  <S.TagsContainer>
                    {project.frontmatter.tags.map((tag) => (
                      <S.Tag key={tag}>{tag}</S.Tag>
                    ))}
                  </S.TagsContainer>
                </S.ProjectContent>
              </S.ProjectContainer>
            </VerticalTimelineElement>
          ))}

        {projects.map((project) => (
          <VerticalTimelineElement
            key={project.id}
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "10px solid  " }}
            date={project.date}
            iconStyle={{
              background: "transparent",
              width: "30px",
              height: "30px",
              alignItems: "center",
              alignSelf: "center",
            }}
            icon={project.icon}
          >
            <S.ProjectContainer>
              <S.ProjectImage>
                <StaticImage
                  src="../images/projects/react-js.png"
                  alt={project.title}
                  placeholder="blurred"
                />
              </S.ProjectImage>

              <S.ProjectContent>
                <S.ProjectTitle>{project.title}</S.ProjectTitle>

                <S.ProjectDescription>
                  {project.description}
                </S.ProjectDescription>

                <S.TagsContainer>
                  {project.tags.map((tag) => (
                    <S.Tag key={tag}>{tag}</S.Tag>
                  ))}
                </S.TagsContainer>
              </S.ProjectContent>
            </S.ProjectContainer>
          </VerticalTimelineElement>
        ))}
      </S.TimelineContainer>
    </S.Container>
  );
};

export const query = graphql`
  query AllProjects {
    allMdx(
      filter: { fields: { sourceName: { eq: "projects" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          icon
          description
          date(formatString: "MMMM D, YYYY")
          title
          tags
          image {
            childImageSharp {
              gatsbyImageData(
                transformOptions: { fit: COVER }
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
        id
        fields {
          slug
        }
      }
    }
  }
`;

export const Head: HeadFC = () => {
  return <SEO title="Portfolio" />;
};

export default PortfolioPage;
