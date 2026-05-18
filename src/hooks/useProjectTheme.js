import { useEffect } from "react";

export function useProjectTheme(project) {
  useEffect(() => {
    const root = document.documentElement;

    if (!project) {
      root.removeAttribute("data-project-theme");
      return;
    }

    root.dataset.projectTheme = project.theme;
    root.style.setProperty("--project-accent", project.accent);

    return () => {
      root.removeAttribute("data-project-theme");
      root.style.removeProperty("--project-accent");
    };
  }, [project]);
}
