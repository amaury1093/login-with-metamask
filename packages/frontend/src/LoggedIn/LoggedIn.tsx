import './LoggedIn.css'
import React from 'react';


function LoggedIn() {
    return(
        <div className = "App">
        <p className = "Intro">Learn & Earn with</p>
        <p className = "Khan"></p>
        <p className = "Motto">Ready to take the next step in  your education with Art History?  Earn interest while you learn!</p>
        <p className = "Step01student">Step 1 Stake 100$ in crypto to  be eligible to gain interest</p>
        <p className = "Depositmotto">Deposit $100 for </p>
        <button className="Confirm"> Confirmed</button>
        <p className = "Depositmotto2">Don't have aUSD to stake?</p>
        <p className = "Getitwith">Get it with</p>
        <p className = "Portis"></p>
        <p className = "Line2"></p>
        <p className = "Step02student">Step 2 Pass all Course Modules in Time Period</p>
        <p className = "Module01">Course Module 1</p>
        <button className= "Button01">Passed </button>
        <p className = "Module02">Course Module 2</p>
        <button className= "Button02">Passed </button>
        <p className = "Module03">Course Module 3</p>
        <button className= "Button03" >Passed </button>
        <p className = "Line3"></p>
        <p className = "ArtHistory">Art History</p>
        <p className = "DaysLeft">Days left in the course Period</p>
        <p className = "DaysHours">90 Days, 10 hours left to go</p>
        <p className = "DepositedPool">Amount Deposited in Pool</p>
        <p className = "Amount01">$ 10,009.1351</p>
        <p className = "Accrued">Pool’s Accrued Interest</p>
        <p className = "Amount02">$ 309.1314</p>
        <p className = "FundsDeposited">Your funds currently deposited </p>
        <p className = "Amount03">$ 100</p>

        </div>
    );
}
export default LoggedIn;
