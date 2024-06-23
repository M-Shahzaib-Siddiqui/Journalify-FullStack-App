import React from "react";
import { useState } from "react";
import QuoteData from "../assets/Quotes";
import "../styles/Quote.css"

function DailyQuote() {

    function getQuotes() {
        let quotes = QuoteData();
        let sortedQuotes = []
        for (let i=0; i<7; i++) {sortedQuotes.push([])}
        for (let j=0; j<quotes.length; j++) {sortedQuotes[j%7].push(quotes[j])}
        return sortedQuotes;
    }

    const dailyPicker = () => {
        const currDate = new Date();
        const currDay = currDate.getDay();

        const quoteList = getQuotes();
        const quoteNum = Math.floor(Math.random()*quoteList[currDay].length);
        const selected = quoteList[currDay][quoteNum];
        return selected;
    }
    const quote = dailyPicker();

    return (
        <div className="flex justify-center items-center pt-[120px] pb-[60px]">
        <div className="font-sans font-bold card items-center bg-white rounded-3xl bg-black text-[#116399] w-1/2 min-w-[350px] h-64 flex-col content-center border-[6px] border-[#034069]">
            <h1 className="text-center text-[3.5em]">Quote of the Day</h1>
            <h2 className="text-center py-2 text-2xl">{quote.text}</h2>
            <h2 className="text-center text-xl">-{quote.author}</h2>
        </div>
        </div>
    )
}

export default DailyQuote