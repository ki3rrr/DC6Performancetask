export const metadata = {
    title: "Projects | Kier Marvin  ",
};

const project = [
    {
        id: 1, name: "Book Management System", description: "This tool to manage book inventories."
    }, 
    {
        id: 2, name: "Patient Record Management System", description: "This system to manage patient records."
    },
    {
        id: 3, name: "Pet Health and Appointment Monitoring System", description: "This system to monitor pet health and appointments."
    }
]

export default function AboutPage() {
    return(
        <main>
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="mt-2">
                Here are some of the projects I've worked on
            </p>

            <table border={1} className="mt-4 border border-gray-300 border-collapse solid black border-collapse">
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {project.map((project) => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </main>
    );
}
