import { assets } from "@/assets/assets.js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [
        {
            name:"Software & Development",
            image: assets.Software_Developement,
            subcategories:[
                {
                    name:"Extensions & Plugins",
                    image: assets.Plugin_Extention,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Scripts & Code Snippets",
                    image: assets.Plugin_Extention,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"APIs & Integrations",
                    image: assets.APIs_Integrations,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Dev Tools & Utilities",
                    image: assets.Dev_Tools_Utilities,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
            ]
        },
        {
            name:"Design & Multimedia",
            image: assets.Design_Multimedia,
            subcategories:[
                {
                    name:"Graphics & UI Kits",
                    image: assets.Graphics_UI_Kits,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Mockups & Prototypes",
                    image: assets.Mockups_Prototypes,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"3D Models & Animations",
                    image: assets.D3_Models_Animations,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Audio & Sound Effects",
                    image: assets.Audio_Sound_Effects,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Video Templates",
                    image: assets.Video_Templates,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
            ]
        },
        {
            name:"Content Creation Tools",
            image: assets.Content_Creation_Tools,
            subcategories:[
                {
                    name:"Presentation Templates",
                    image: assets.Presentation_Templates,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Ebooks & Guides",
                    image: assets.Ebooks_Guides,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Marketing & Branding Kits",
                    image: assets.Marketing_Branding_Kits,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Fonts & Typography",
                    image: assets.Fonts_Typography,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Digital Art & Illustrations",
                    image: assets.Digital_Art_Illustrations,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
            ]
        },
        {
            name:"Learning Resources",
            image: assets.Learning_Resources,
            subcategories:[
                {
                    name:"Tutorials & Courses",
                    image: assets.Tutorials_Courses,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Coding Challenges",
                    image: assets.Coding_Challenges,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Project Blueprints",
                    image: assets.Project_Blueprints,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
            ]
        },
        {
            name:"Project Requests",
            image: assets.Projects_Requests,
            subcategories:[
                {
                    name:"Custom Development",
                    image: assets.Custom_Development,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Design Projects",
                    image: assets.Design_Projects,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Consulting & Troubleshooting",
                    image: assets.Consulting_Troubleshooting,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Learning Mentorship",
                    image: assets.Learning_Mentorship,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
            ]
        },
        {
            name:"Community & Resources",
            image:assets.Community_Resources,
            subcategories:[
                {
                    name:"Community Plugins/Modules",
                    image:assets.Community_Plugins_Modules,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Problem-Solving",
                    image:assets.Problem_Solving,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799, image:assets.iPhone_12 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699, image:assets.Samsung_Galaxy_S21 },
                    ]
                },
                {
                    name:"Resource Libraries",
                    image:assets.Resource_Libraries,
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
            ]
        }
    ]
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
})

export default productSlice.reducer;
