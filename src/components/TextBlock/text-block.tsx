import { TextBlockProps } from "./types";

import React from 'react'

export function TextBlock({ text, size, textAlign, dimension, fontFamily }: TextBlockProps) {
    const TextBoxStyling: React.CSSProperties = {
        width: dimension.width,
        padding: dimension.padding,
        lineHeight: dimension.lineHeight,
    }
    return (
        <div style={TextBoxStyling}>
            <p className={`break-words text-wrap ${size} ${textAlign} ${fontFamily}`}>{text}</p>
        </div>
    )
}
