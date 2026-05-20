import { useEffect } from "react";

export function useProjectTheme(project) {
  useEffect(() => {
    const root = document.documentElement;

    if (!project) {
      root.removeAttribute("data-project-theme");
      return;
    }

    root.dataset.projectTheme = project.theme;
    root.style.setProperty("--project-accent", project.themeStyle?.accent ?? project.accent);
    if (project.themeStyle?.gradient) {
      root.style.setProperty("--project-gradient", project.themeStyle.gradient);
    }

    return () => {
      root.removeAttribute("data-project-theme");
      root.style.removeProperty("--project-accent");
      root.style.removeProperty("--project-gradient");
    };
  }, [project]);
}
