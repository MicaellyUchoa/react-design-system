import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function TextInput(props: TextInputProps) {
    return (<div className="py-4 px-3 bg-gray-800 rounded outline-none text-gray-100 text-xs placeholder:text-gray-400 w-full focus:ring-2 focus:ring-cyan-300">
        <div></div>
        <input  {...props} />
    </div>
    )
}
