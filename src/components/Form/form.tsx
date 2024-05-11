import { DropZone } from "@measured/puck";
import { FormProps } from "./types";

export function Form({ action, inputs }: FormProps) {
    return (
        <div>
            <form action={action}>
                {
                    inputs.map((input, index) => (
                        input.type === "textarea" ?
                            <div key={index}>
                                <label
                                    className={`${input.displayLabel}`}
                                    htmlFor={input.id}>{input.label}</label>
                                <textarea
                                    placeholder={input.placeholder}
                                    id={input.id} />
                            </div>
                            :
                            <div key={index}>
                                <label
                                    className={`${input.displayLabel}`}
                                    htmlFor={input.id}>{input.label}</label>
                                <input
                                    placeholder={input.placeholder}
                                    id={input.id}
                                    type={input.type} />
                            </div>
                    ))
                }
                <div>
                    <DropZone zone="form-area" />
                </div>
            </form>
        </div>
    )
}
