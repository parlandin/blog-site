import styled from "styled-components";
import { VerticalTimeline } from "react-vertical-timeline-component";

export const Container = styled.section`
  height: 100%;
  width: 100%;
`;
export const AboutText = styled.p`
  font-size: 1rem;
  margin: 15px 0 25px;
  color: ${(props) => props.theme.colors.text};
`;

export const TimelineContainer = styled(VerticalTimeline)`
  &::before {
    background-color: ${(props) => props.theme.colors.primary} !important;
    width: 2px !important;
  }

  & .vertical-timeline-element {
    & .vertical-timeline-element-content-arrow {
      top: 10px !important;
      border-right-color: ${(props) => props.theme.colors.primary} !important;
      right: 100.3% !important;
    }

    & .vertical-timeline-element-content {
      padding: 0px !important;
      border: 3px solid ${(props) => props.theme.colors.primary} !important;
      background-color: transparent !important;
      box-shadow: none;
      max-width: 500px !important;
      background-color: transparent !important;

      & .vertical-timeline-element-date {
        color: ${(props) => props.theme.colors.text} !important;

        @media only screen and (min-width: 1170px) {
          top: -9px;
        }
      }
    }

    & .vertical-timeline-element-icon {
      box-shadow: 0 0 0 2px ${(props) => props.theme.colors.text},
        inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
      background: ${(props) => props.theme.colors.secondary} !important;
      left: 3px !important;
      color: #fff !important;

      &.vertical-timeline--two-columns {
        left: 52.4% !important;
      }

      @media only screen and (min-width: 1170px) {
        left: 52.33% !important;
        margin-left: -30px;
      }
    }
  }
`;

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

export const ProjectImage = styled.div`
  width: 100%;
  border-radius: 0.25em;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  overflow: hidden;

  & img,
  & picture {
    border-radius: 0.25em;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ProjectContent = styled.div`
  font-size: 1rem;
  padding: 10px;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem !important;
  color: ${(props) => props.theme.colors.text};
  margin: 10px 0;
  -webkit-line-clamp: 4 !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;

  @media only screen and (min-width: 1170px) {
    max-height: 97px !important;
  }

  @media (max-width: 550px) {
    max-height: 96px !important;
  }
`;

export const TagsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 8px;
  margin-top: 10px;
  //margin-top: 15px;
`;

export const Tag = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 4px;
  padding: 4px 8px;
`;
