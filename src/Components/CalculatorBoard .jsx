import React from 'react'
import iconDollar from "../images/icon-dollar.svg"
import iconPerson from "../images/icon-person.svg"

function Tittle({ content }) {
    return (
        <h3 className="text-grayish font-medium">
            {content}
        </h3>
    )
}

function TextField({ name, icon, number, setNumber }) {


    function handleChange(e) {
        const value = e.target.value
        setNumber(value>=0 ? value : "0")
    }

    return (
        <div className='relative m-1'>
            {
                icon ? <img className='absolute p-2' src={icon} alt="icon" /> : ""
            }
            <input
                name={name}
                className='h-full'
                type="number"
                value={number}
                onChange={handleChange}
            />
        </div>

    )
}

function TipButton({ content, tip, setTip }) {

    function handleClick(e) {
        setTip(e.target.innerText)
    }

    return (
        <button
            onClick={handleClick}
            className={tip === content ? "buttonType2" : "buttonType1"}
        >
            {content}
        </button>
    )
}


function CalculatorBoard({ states }) {
    const [bill, setBill, tip, setTip, person, setPerson, plus, setPlus] = states;

    const tipList = [
        "5%", "10%", "15%", "25%", "50%"
    ];

    return (
        <div className="flex-1 space-y-2">
            <Tittle content={"Bill"} />
            <TextField name={"bill"} icon={iconDollar} number={bill} setNumber={setBill} />

            <Tittle content={"Select Tip %"} />
            <div className="grid grid-cols-2">
                {
                    tipList.map(element => <TipButton key={element} content={element} tip={tip} setTip={setTip} />)
                }
                <TextField name={"plus"} icon={""} number={plus} setNumber={setPlus} />
            </div>
            <Tittle content={"Number of People"} />
            <TextField name={"people"} icon={iconPerson} number={person} setNumber={setPerson} />
        </div>
    )
}

export default CalculatorBoard 