import React from "react"

const Project = props => {
  console.log(props.project)
  return (
    <div className="d-flex flex-row project-box">
      <div
        className={
          "d-flex flex-column project-img " +
          (props.projNum % 2 === 1 ? "order-0" : "order-1")
        }
      >
        <img src={props.project.imageURL} alt={`${props.project.name}`} />
      </div>
      <div
        className={
          "d-flex flex-column project-text " +
          (props.projNum % 2 === 1 ? "text-right" : "text-left")
        }
      >
        <h1>{props.project.name}</h1>
        <p>{props.project.description}</p>
        <p
          className="mb-0"
          dangerouslySetInnerHTML={{
            __html: props.project.techStack.join(" &middot; "),
          }}
        />
      </div>
    </div>
  )
}

export default Project
