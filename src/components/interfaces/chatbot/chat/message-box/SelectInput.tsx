import React from "react";
import Message from '../message-window/Message';

export default function SelectInput({ convoState, history, handleSubmit }: any) {
    console.log(convoState.value.responseInfo.responses)
    return (<div className="text-center px-3 py-1">
        <div className="font-bold text-lg">Which response do you prefer?</div>
        <div className="flex flex-col md:gap-x-4 gap-y-1 md:flex-row justify-center align-middle mb-2">
            {convoState.value.responseInfo.responses.map((r: any, i: number) => <button
                key={i}
                onClick={(e: any) => {
                    handleSubmit(e, convoState, history, i);
                }}
                disabled={convoState.value.turn.includes("wikichat-reads")}
                className={"mx-auto md:mx-0 rounded-3xl w-fit md:w-1/2 px-4 py-3 mt-1.5 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl break-words bg-gray-200 hover:bg-gray-300"}
            >
                {r}
            </button>)}
        </div>
    </div>)
}

