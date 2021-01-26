import React from "react"

const Projects = () => {
  return (
    <div className="row projects-container-row container-row">
      <div className="col my-auto">
        <div className="row project-grid">
          <div className="col-7 project-grid-left-col p-0">
            <div className="row h-25">
              <div className="col d-flex flex-column">
                <div className="project-box" id="project1">
                  project 1
                </div>
              </div>
            </div>
            <div className="row h-75">
              <div className="col pr-0 d-flex flex-column">
                <div className="project-box" id="project3">
                  project 3
                </div>
                <div className="project-box" id="project4">
                  project 4
                </div>
              </div>
              <div className="col pl-0 d-flex flex-column">
                <div className="project-box" id="project5">
                  project 5
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 project-grid-right-col p-0">
            <div className="row h-75">
              <div className="col d-flex flex-column">
                <div className="project-box" id="project2">
                  project 2
                </div>
              </div>
            </div>

            <div className="row h-25">
              <div className="col d-flex flex-column">
                <div className="project-box" id="project6">
                  project 6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
