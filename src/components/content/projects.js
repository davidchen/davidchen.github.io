import React from "react"
import projectsJSON from "../../content/my-projects.json"
import Project from "../../templates/project"

const Projects = () => {
  return (
    <div className="row projects-container-row container-row">
      <div className="col my-auto">
        <div className="d-flex flex-column projects-container">
          {projectsJSON.content.map((project, index) => {
            console.log("printing", project)
            return (
              <Project
                key={`project_item_${index}`}
                project={project}
                projNum={index + 1}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects
