import React, { useState } from "react";

interface ExampleProps {
    name: string;
    age: number;
    icon:React.ReactElement;
}

interface PersonState {
    name: string;
    age: number;
    isStudent: boolean;
}

const Icon = ():JSX.Element =>{
    return(
        <img src="www.google.com" alt="icon"/>
    )
}

const Example = ({name,age,icon}:ExampleProps): JSX.Element =>{

    const [counter, setCounter] = useState<number | null>(0);

    const [person, setPerson] = useState<PersonState>({name:"Luis",age:29,isStudent:false})

    return (
        <section>
            <h1>Hola, ${name}</h1>
            <p>Tienes ${age} años de edad.</p>
            {icon}
        </section> 
    )
}

const Main = () : JSX.Element => {

    const handleClick = (e: React.MouseEvent) =>{
        e.preventDefault();
        alert("Click!")
    }

    const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return(
        <main>
            <Example name="Juan" age={58} icon={<Icon/>}/>
            <input type="password" onChange={handlerOnChange}/>
            <button onClick={handleClick}>Click</button>
        </main>
    )
}

//este no se debe usar, es la version anterior
const exampleTwo: React.FC<ExampleProps> = ({name,age}) =>{
    return (
        <section>
            <h1>Hola, ${name}</h1>
            <p>Tienes ${age} años de edad.</p>
        </section> 
    )
}

export default Main;