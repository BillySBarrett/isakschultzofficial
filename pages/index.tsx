import Link from "next/link";
import { useEffect, useState } from "react";
import { BsSnapchat } from "react-icons/bs";

export default function Home() {

    return (
        <div className="min-w-screen min-h-screen justify-center flex flex-col items-center">
            <p className="font-extralight relative right-20">{"i know it's cliche but"}</p>
            <div className="font-bold text-3xl">
                {/* Text wheel with hello in different languages */ }
                <TextWheel
                    textArray={[
                        "Hei",
                        "Hola",
                        "Hello",
                        "Bonjour",
                        "Ciao",
                        "Hallo",
                        "Hej",
                        "Olá",
                        "Nǐ hǎo",
                        "Konnichiwa",
                        "Namaste",
                        "Salaam",
                        "Sawubona",
                        "Sawasdee",
                        "Ahoj",
                        "Zdravo",
                        "Sveiki",
                        "Szia",
                        "Hei",
                        "Saluton"
                    ]}
                />
                <p className="font-extralight text-4xl"> my name is <span className="font-bold ">isak..</span></p>
            </div>
            <p className="font-extralight text-xl relative md:left-20 left-0 pt-4">tell me something i know nothing about</p>
            <div className="flex flex-col items-center pt-12 text-2xl">
                <p>Add mæ (me) </p>
                <Link href="https://www.snapchat.com/add/isakschultz" className="pt-4">
                    {/* outline the react-icon */}
                    <div className="bg-yellow-200 rounded-full p-8 outline">
                        <BsSnapchat className="text-black" size={70}/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

const TextWheel = ({ textArray }: { textArray: Array<string>}) => {
    const [index, setIndex] = useState(0);
    const [textWheel, setTextWheel] = useState(textArray[0]);

    const changeText = () => {
        if (index < textArray.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        setTextWheel(textArray[index]);
      }
    setTimeout(() => {changeText()}, 4000);
    return (
        <div className="">
            <p>{textWheel}!</p>
        </div>
    )
}