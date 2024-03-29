import Component from "./base-component";
import { DragTarget } from "../models/drag-drop";
import { Project, ProjectStatus } from "../models/project";
import { AutoBind } from "../decorators/autobind";
import { ProjectItem } from "./project-item";
import { projectState } from "../state/project-state";

// List of Projects
export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignedProjects: Project[];

  // constructor(private type: "active" | "finished", p: Array<SingleProject>) {
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  @AutoBind
  dragOverhandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const list = this.element.querySelector("ul")!;
      list.classList.add("droppable");
    }
  }
  @AutoBind
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }
  @AutoBind
  dragLeaveHandler(_: DragEvent) {
    const list = this.element.querySelector("ul")!;
    list.classList.remove("droppable");
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverhandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dropHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        } else {
          return prj.status === ProjectStatus.Finished;
        }
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    ) as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }
}
