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
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Scripts & Code Snippets",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"APIs & Integrations",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Dev Tools & Utilities",
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
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Mockups & Prototypes",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"3D Models & Animations",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Audio & Sound Effects",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Video Templates",
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
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Ebooks & Guides",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Marketing & Branding Kits",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Fonts & Typography",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Digital Art & Illustrations",
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
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Coding Challenges",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Project Blueprints",
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
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Design Projects",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Consulting & Troubleshooting",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Learning Mentorship",
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
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Problem-Solving",
                    products:[
                        { id: 1, name: 'iPhone 12', price: 799 },
                        { id: 2, name: 'Samsung Galaxy S21', price: 699 },
                    ]
                },
                {
                    name:"Resource Libraries",
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
