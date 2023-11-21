import { PackageList, Service } from "../interfaces/interfaces";

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

export const packageList: PackageList[] = [
    { 
      id: 1,
      description: "PWE Weddings & Events Workbook"
    },
    {id: 1,
      description: "Unlimited access to expert wedding advice (via e-mail)"},
    {
      id: 3,
      description: "Access to Preferred Vendors List"
    },
    { id:4,
      description: "Wedding Assistant for wedding day"},
    {
      id: 5,
      description:"Oversee and help with ceremony/reception site set up & tear down"},
    {
      id: 6,
      description:"Review of Vendor contracts"},
    {
      id: 7,
      description: "Distribute final payments and gratuities to vendors as necessary"},

  ]

  export const packagePlans = [ 
    {
        id: 1,
        name: "Ceremony",
        price: 2500,
        includes: [
            {
                id: 1,
                description: 'Decoration'
            },
            {
                id: 2,
                description: 'Dj & Sound'
            },
            {
                id: 3,
                description: 'Celebrant'
            }
        ]
    },
    {
        id: 2,
        name: "Party",
        price: 3500,
        includes: [
            {
                id: 1,
                description: 'Decoration'
            },
            {
                id: 2,
                description: 'Dj & Sound'
            },
            {
                id: 3,
                description: 'Photographer'
            },
            {
                id: 4,
                description: 'Party Planner'
            },
        ]
    },
    {
        id: 3,
        name: "Full Wedding",
        price: 6500,
        includes: [
            {
                id: 1,
                description: 'Decoration'
            },
            {
                id: 2,
                description: 'Dj & Sound'
            },
            {
                id: 3,
                description: 'Photographer'
            },
            {
                id: 4,
                description: 'Make Up & Hair Dresser'
            },
        ]
           
        
    }
  ]