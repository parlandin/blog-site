import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import * as S from "@styles/portfolioStyle";
import Title from "@components/Title";
import { StaticImage } from "gatsby-plugin-image";
import useProjectsData from "@hooks/useProjectsData";
import "react-vertical-timeline-component/style.min.css";
import SEO from "@components/SEO";

const PortfolioPage: React.FC<PageProps> = () => {
  const projects = useProjectsData();
  return (
    <S.Container>
      <Title>Meus projetos</Title>
      <S.AboutText>
        Aqui você encontra todos os meus projetos em ordem cronologicamente
        !!incorreta.
      </S.AboutText>

      <S.TimelineContainer animate={true} layout="2-columns">
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

export const Head: HeadFC = () => {
  return <SEO title="Portfolio" />;
};

export default PortfolioPage;
