import './StudentPage.css'
import React from 'react';
import Web3 from 'web3';
import Portis from '@portis/web3';

const portis = new Portis('211b48db-e8cc-4b68-82ad-bf781727ea9e', 'rinkeby');
const web3 = new Web3(portis.provider);



// var course = new web3.eth.Contract (JSON.parse('courseabi'))
// var token =  new web3.eth.Contract (JSON.parse('Ierc20'), '0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108')



// token.methods.transfer(await course.methods.getCurrentPool().call(), 
// 	await course.methods.buyInPrice().call())
// 	.send({from: /*some address here*/});


// var token =  new web3.eth.Contract (JSON.parse('Ierc20'),'0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108');

// async function  getTotalsupply (){
//     console.log(await token.methods.totalSupply().call());   
// }

// getTotalsupply();




export class StudentPage extends React.Component{
var token =  new web3.eth.Contract (JSON.parse('Ierc20'),'0xf80A32A835F79D7787E8a8ee5721D0fEaFd78108');

    handleClick = async () => {
        console.log(await token.methods.totalSupply().call())
    }


render() 
{


    return(
        <div className = "AppA">
        <p className = "IntroA">Learn & Earn with</p>
        <p className = "KhanA"></p>
        <p className = "MottoA">Ready to take the next step in  your education with Art History?  Earn interest while you learn!</p>
        <p className = "Step01studentA">Step 1 Deposit $100 in crypto to  be eligible to gain interest</p>
        <p className = "DepositmottoA">Deposit $100 for </p>
        <button className="ConfirmA" onClick={this.handleClick}> Confirm & Stake</button>
        <p className = "Depositmotto2A">Don't have $100 in DAI to deposit?</p>
        <p className = "GetitwithA">Get it with</p>
        <p className = "PortisA"></p>
        <p className = "Line2A"></p>
        <p className = "Step02studentA">Step 2 Complete all modules before  the course period ends</p>
        <p className = "Module01A">Prehistoric Art History</p>
        <button className= "Button01A"></button>
        <p className = "ButtonText01B">Take the Test</p>
        <p className = "Module02A">Modern Art History</p>
        <button className = "Button02A"></button>
        <p className = "ButtonText02B"> Take the Test </p>
        <p className = "Module03A">Asian Art History</p>
        <button className= "Button03A"> </button>
        <p className = "ButtonText03B"> Take the Test </p>
        <p className = "Line3A"></p>
        <p className = "ArtHistoryA">Art History</p>
        <p className = "DaysLeftA">Days left in the course Period</p>
        <p className = "DaysHoursA">90 Days, 10 hours left to go</p>
        <p className = "DepositedPoolA">Amount Deposited in Pool</p>
        <p className = "Amount01A">$ 10,009.1351</p>
        <p className = "AccruedA">Pool’s Accrued Interest</p>
        <p className = "Amount02A">$ 309.1314</p>
        <p className = "FundsDepositedA">Your funds currently deposited </p>
        <p className = "Amount03A">$ 100</p>
        </div>
    );
};

};


