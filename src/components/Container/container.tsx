import React from 'react'
import { ContainerProps } from './types'
import { DropZone } from '@measured/puck'

export function Container({ background, dimension, content, columns, postionToWindow, fontFamily }: ContainerProps) {
    const constainerStyling: React.CSSProperties = {
        backgroundColor: background.backgroundColor,
        backgroundImage: `url(${background.backgroundImage})`,
        backgroundPositionX: background.backgroundPositionX,
        backgroundPositionY: background.backgroundPositionY,
        minHeight: dimension.height,
        lineHeight: dimension.lineHeight,
        // margin: dimension.margin,
    }

    const wrapperStyling: React.CSSProperties = {
        width: dimension.width,
        color: content.textColor,
        gap: content.spacing,
        padding: dimension.padding,
        gridTemplateColumns: columns.distribution === "manual"
            ? "repeat(12, 1fr)"
            : `repeat(${columns.columns.length}, 1fr)`,
    }
    return (
        <section
            style={constainerStyling}
            className={`section-container w-full ${postionToWindow}
            after:content-[""] after:absolute after:inset-0 bg-no-repeat text-base bg-cover 
            after:bg-inherit after:z-[-1] isolate ${background.tint}
            ${fontFamily}
            flex flex-col ${content.position}
            `}>
            <div
                style={wrapperStyling}
                className={`container-content-wrapper grid max-sm:!grid-cols-1`}>
                {
                    columns.columns.map((item, index) => (
                        // if there is a value in the span of item, and the distribution
                        // is set to "manual" span the column                        
                        <div
                            key={index}
                            className={`${content.textAlign}`}
                            style={{
                                gridColumn: (item.span && columns.distribution === "manual") ?
                                    `span ${Math.max(Math.min(item.span, 12), 1)}` : ""
                            }}>
                            <DropZone zone={`column-${index}`} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
