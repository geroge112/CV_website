import { getProjectBySlug, projects } from "../data/projects.js";

export async function fetchProjects() {
  return projects;
}

export async function fetchProject(slug) {
  return getProjectBySlug(slug);
}
