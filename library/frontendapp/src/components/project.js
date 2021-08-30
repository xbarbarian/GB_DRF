import React from "react";

const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.url}
            </td>
            <td>
                {project.users_list.map((user, idx) => <td>{user}</td>)}

            </td>
            <td>
                <button onClick={() => deleteProject(project.id)} type='button'>DELETE</button>
            </td>

        </tr>
    )
}

const ProjectList = ({projects, deleteProject}) => {
    return (
        <div className="outer">

            <div className="inner">
                <table className="Table">
                    <thead>
                    <tr>
                        <th>
                            Project name
                        </th>
                        <th>
                            URl
                        </th>
                        <th>
                            Users List
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project, idx) => <ProjectItem project={project} key={project.id}
                                                                 deleteProject={deleteProject}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default ProjectList