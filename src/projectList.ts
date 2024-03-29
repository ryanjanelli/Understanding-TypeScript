// /// <reference path="models/drag-drop.ts" />
// /// <reference path="models/project.ts" />
// /// <reference path="state/project-state.ts" />
// /// <reference path="util/validation.ts" />
// /// <reference path="decorators/autobind.ts" />
// /// <reference path="components/base-component.ts" />
// /// <reference path="components/project-item.ts" />
// /// <reference path="components/project-list.ts" />
// /// <reference path="components/project-input.ts" />

import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

// search other files for syntax and useful functions with SAVETHIS
new ProjectInput();

new ProjectList("active");
new ProjectList("finished");

console.log("hi");
