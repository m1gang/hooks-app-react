import { useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";


export const MemoHook = () => {
    const [title, setTitle] = useState('hola');
    const [subtitle, setSubtitle] = useState('hola');
    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-thin text-white'>MemoApp</h1>

            <MyTitle title={title} />

            <MySubtitle subtitle={subtitle} />

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Cambiar título
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Cambiar subtítulo
            </button>
        </div>
    )
}
