import React from 'react'
import { useState, useEffect } from 'react'

function CountField({ tittle, bill, person, tip, plus }) {

    const [tipAmount, setTipAmount] = useState("0")
    const [total, setTotal] = useState("0")



    useEffect(() => {

        if (parseInt(person) === 0) {
            setTipAmount("0")
            setTotal("0")
            return;
        }

        if (parseInt(person) > 0) {
            const res1 = (parseFloat(bill) * parseInt(tip) / 100 + parseFloat(plus)) / parseInt(person)
            const res2 = res1 + parseFloat(bill) / parseInt(person);

            setTipAmount(res1 ? Math.round(res1.toLocaleString('en-US')*100)/100 : "0")
            setTotal(res2 ? Math.round(res2.toLocaleString('en-US')*100)/100 : "0")
            return;
        }
    }, [bill, person, tip, plus])

    return (
        <div className="flex flex-row justify-between mb-4">
            <div className="inline-block">
                <h3 className=" text-grayish-light text-sm">{tittle}</h3>
                <p className="text-grayish text-xs">/ person</p>
            </div>
            <p className="text-primary font-medium text-3xl">
                ${tittle === "Tip Amount" ? tipAmount : total}
            </p>
        </div>

    )
}

function ResultBoard({ states }) {

    const [bill, setBill, tip, setTip, person, setPerson, plus, setPlus] = states;

    function handleClick() {
        setBill(0);
        setTip(0);
        setPerson(0);
    }

    return (
        <div className="rounded-xl p-5 bg-dark flex-1 flex flex-col justify-between">
            <div>
                <CountField tittle={"Tip Amount"} bill={bill} person={person} tip={tip} plus={plus} />
                <CountField tittle={"Total"} bill={bill} person={person} tip={tip} plus={plus} />
            </div>
            <button onClick={handleClick} className="buttonType2 hover:bg-grayish-light">RESET</button>
        </div>
    )
}

export default ResultBoard