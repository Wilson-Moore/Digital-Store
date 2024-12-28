import Link from "next/link"
import { useSelector } from "react-redux"
import "./../styles/discoverCategories.css"
const DiscoverCategories = () => {

    const allCategories = useSelector((state) => state.products.categories)

    return (
        <div className="discover-Categories">
            <h1>Explore Our Products</h1>
            <div className="explore-categories">
                {allCategories.map((category) => {
                    return (
                        <div>
                            <Link href={`/category/${category.name.split(" ").join("_")}`}>
                                <img src={category.image} />
                                <p>{category.name} </p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DiscoverCategories