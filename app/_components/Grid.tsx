import { gridItems } from "../_data"
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"


function Grid() {
    return (
        <section id="about">
            <BentoGrid className="w-full py-20">
                {gridItems.map((item)=>(
                    <BentoGridItem
                    id={item.id}
                    key={item.id}
                    className={item.className}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    imgClassName={item.imgClassName}
                    titleClassName={item.titleClassName}
                    spareImg={item.spareImg}

                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid