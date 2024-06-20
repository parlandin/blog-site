import Giscus from "@giscus/react";
import React from "react";
import { useTheme } from "styled-components";

const Comments = () => {
  const theme = useTheme();

  return (
    <div>
      <div>
        <Giscus
          repo="parlandin/parlan-blog-comments"
          repoId="R_kgDOMLndrw"
          category="General"
          categoryId="DIC_kwDOMLndr84CgNMn"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme.name === "light" ? "light" : "transparent_dark"}
          lang="pt"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Comments;
