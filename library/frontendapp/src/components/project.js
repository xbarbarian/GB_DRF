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
                {project.users_list}
            </td>

        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <div className="outer">

            <div className="inner">
                <table className="Table">
                    <th>
                        project name
                    </th>
                    <th>
                       URl
                    </th>
                    <th>
                        Users List
                    </th>

                    {projects.map((project) => <ProjectItem project={project}/>)}

                </table>
            </div>

        </div>
    )
}


export default ProjectList