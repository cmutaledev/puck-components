import { HeadingBlockProps } from "./types"

export function HeadingBlock({ content, align, size, fontFamily, fontWeight }: HeadingBlockProps) {
    return (
        <div className={`w-full relative ${align}`}>
            <h1 className={`heading-block text-wrap break-words ${fontFamily} ${fontWeight} ${size}`}>{content}</h1>
        </div>
    )
}
