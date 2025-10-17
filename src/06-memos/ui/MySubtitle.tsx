import { memo } from "react";

interface Props {
    subtitle: string;
}

export const MySubtitle = memo(({ subtitle }: Props) => {
    console.log('mi sbutitle re-render');
    console.log('tarea superpesada');


    return (
        <>
            <div className="text-2xl font-bold">{subtitle}</div>
            <button className="bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer">Llamar a función</button>
        </>

    )
})
