import './StudentPage.css'
import React from 'react';
import { View, Text } from "react-native";

function StudentPage() {
    return(
        <div className = "App">
        <p className = "Intro">Learn & Earn with</p>
        <p className = "Khan"></p>
        <p className = "Motto">Ready to take the next step in  your education with Art History?  Earn interest while you learn!</p>
        <p className = "Step01student">Step 1 Deposit $100 in crypto to  be eligible to gain interest</p>
        <p className = "Depositmotto">Deposit $100 for </p>
        <View style={{flexDirection: 'row'}}>
        <p className = "Depositmotto">Deposit $100 for </p> 
        <button className="Confirm"> Confirm & Stake</button>
        </View>
]
        </div>
    );
}
export default StudentPage;