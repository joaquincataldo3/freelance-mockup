import { Service } from "../interfaces/interfaces";

const preUrl = `${window.location.origin}/services-images/`

export const services: Service[] = [
    {
        id: 1,
        src: `${preUrl}services1.jpg`,
        subtitle: "weddings",
        title: "wedding planner",
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 2,
        src: `${preUrl}services2.jpg`,
        subtitle: "weddings",
        title: "master of ceremonies",
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 3,
        src: `${preUrl}services3.jpg`,
        subtitle: "weddings",
        title: "special events",
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
    {
        id: 4,
        src: `${preUrl}services4.jpg`,
        subtitle: "weddings",
        title: "destination wedding",
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    },
]