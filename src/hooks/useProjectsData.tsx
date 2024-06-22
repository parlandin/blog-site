import React from "react";
import ReactIcon from "@components/Icons/ReactIcon";
import NodeIcon from "@components/Icons/NodeIcon";

const useProjectsData = () => {
  const imagePath = "../images/projects/";
  const projects = [
    {
      id: 1,
      image: `${imagePath}orange-notes.png`,
      title: "Projeto 1",
      description:
        "aqui tem quer ir uma descrição muito grande para testar o layout do projeto e ver se ele se comporta bem com textos grandes, além disso, é importante que o texto seja bem descritivo para que o usuário entenda o que está sendo apresentado.",
      icon: <ReactIcon />,
      tags: ["React", "Node", "Express", "Typescript", "Styled-components"],
      date: "2021 - 2023",
    },
    {
      id: 2,
      title: "Projeto 2",
      image: `${imagePath}itube.png`,
      description: "Descrição do projeto 2",
      icon: <NodeIcon />,
      tags: ["Node", "Express", "Typescript"],
      date: "2024 - present",
    },
    {
      id: 3,
      title: "Projeto 3",
      image: `${imagePath}orange-notes.png`,
      description: "Descrição do projeto 3",
      icon: <ReactIcon />,
      tags: ["React", "Node", "Express", "Typescript", "Styled-components"],
      date: "2020 - 2021",
    },
    {
      id: 4,
      title: "Projeto 4",
      image: `${imagePath}itube.png`,
      description: "Descrição do projeto 4",
      icon: <NodeIcon />,
      tags: ["Node", "Express", "Typescript"],
      date: "2019 - 2020",
    },
    {
      id: 5,
      title: "Projeto 5",
      image: `${imagePath}orange-notes.png`,
      description: "Descrição do projeto 5",
      icon: <ReactIcon />,
      tags: ["React", "Node", "Express", "Typescript", "Styled-components"],
      date: "2018 - 2019",
    },
    {
      id: 6,
      title: "Projeto 6",
      image: `${imagePath}itube.png`,
      description: "Descrição do projeto 6",
      icon: <NodeIcon />,
      tags: ["Node", "Express", "Typescript"],
      date: "2017 - 2018",
    },
    {
      id: 7,
      title: "Projeto 7",
      image: `${imagePath}orange-notes.png`,
      description: "Descrição do projeto 7",
      icon: <ReactIcon />,
      tags: ["React", "Node", "Express", "Typescript", "Styled-components"],
      date: "2016 - 2017",
    },
    {
      id: 8,
      title: "Projeto 8",
      image: `${imagePath}itube.png`,
      description: "Descrição do projeto 8",
      icon: <NodeIcon />,
      tags: ["Node", "Express", "Typescript"],
      date: "2015 - 2016",
    },
    {
      id: 9,
      title: "Projeto 9",
      image: `${imagePath}orange-notes.png`,
      description: "Descrição do projeto 9",
      icon: <ReactIcon />,
      tags: ["React", "Node", "Express", "Typescript", "Styled-components"],
    },
  ];

  return projects;
};

export default useProjectsData;
