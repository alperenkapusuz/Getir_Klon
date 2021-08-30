import { useState, useEffect } from "react"
import categoryData from '../api/categories.json'
import Category from "./ui/Category"


export default function Categories() {

    const [categories,setCategories] = useState([])

    useEffect(() => {
        setCategories(categoryData)
    }, [])

    return (
        <div className="bg-white py-4">
            <div className="container mx-auto">
                <h3 className="text-sm font-semibold mb-3">Categories</h3>
                <div className="grid grid-cols-10">
                    {!categories.length && 'Yükleniyor..'}
                    {categories && categories.map((category, index) => <Category key={index} category={category}/>)}
                </div>
            </div>
        </div>
    )
}
