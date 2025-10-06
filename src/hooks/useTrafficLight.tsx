import { useEffect, useState } from "react";


const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    blue: 'bg-blue-500 animate-pulse',
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {

    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);


    //countdown effect
    useEffect(() => {
        if (countdown === 0) return;


        const intervalId = setInterval(() => {
            console.log('setInterval llamado');
            setCountdown(prev => prev - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }

    }, [countdown])

    //change light color effect
    useEffect(() => {
        if (countdown > 0) return;
        console.log('efecto color llamado');

        setCountdown(5);

        if (light === 'red') {
            setLight('green')
            return;
        }
        if (light === 'yellow') {
            setLight('red')
            return;
        }
        if (light === 'green') {
            setLight('yellow')
            return;
        }
        return;

    }, [countdown, light])
    return {
        //Propertys
        light,
        countdown,
        colors,

        //Computed
        percentage: (countdown / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    }
}
