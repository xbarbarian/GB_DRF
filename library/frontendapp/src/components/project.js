import React from "react";

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>
                {project.name}
            </td>
            <td>
                {project.url}
            </td>
            <td>
                {project.users_list[0].username}
                </td>

        </tr>
    )
}

const ProjectList = ({projects}) => {
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
                    {projects.map((project, idx) => <ProjectItem project={project} key={project.id}/>)}
                    </tbody>
                </table>
            </div>

        </div>
    )
}


export default ProjectList