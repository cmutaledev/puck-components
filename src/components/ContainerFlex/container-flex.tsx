import { ContainerFlexProps } from "./types";
import { DropZone } from "@measured/puck";

export function ContainerFlex({ items, minItemWidth, verticalAlignment, horizontalAlignment, alignContent }: ContainerFlexProps) {
    return (
        <section>
            <div className={`flex flex-wrap gap-8 ${verticalAlignment} ${horizontalAlignment}`}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex-1 ${alignContent}`}
                        style={{ minWidth: item.minItemWidth ? item.minItemWidth : minItemWidth }}
                    >
                        <DropZone zone={`item-${idx}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}