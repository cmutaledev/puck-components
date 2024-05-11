"use client"
import { ThemeConfig } from '../types'

type Props = {
    onChange: any
    config: ThemeConfig
}

export default function ImagePicker({ onChange, config }: Props) {
    return (
        <div className="relative flex flex-wrap gap-2">
            {
                config.images.map((item, index) => (
                    <div key={index}>
                        <img
                            src={item.url}
                            alt={item.alt}
                            width={64}
                            height={64}
                            className='w-full h-full object-cover'
                            onClick={() => onChange(item.url)} />
                    </div>
                ))
            }
            <div
                onClick={() => onChange('')}
                className='w-[64px] aspect-square cursor-pointer flex justify-center items-center border'>
                None
            </div>
        </div>
    )
}
