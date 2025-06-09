import React from "react"
import Place from './Place'

//images
import Blank_Street from '../assets/blank_street.webp'
import Terry from '../assets/TerryandYaki.webp'
import Dunkin from '../assets/Dunkin.webp'
import Gongcha from '../assets/GC.webp'
import KoreanExpress from '../assets/KE.webp'
import McDonald from '../assets/MCD.webp'
import PandaExpress from '../assets/PE.webp'
import Starsbuck from '../assets/SB.webp'
import TacoBell from '../assets/TB.webp'
import Wonder from '../assets/wonder.webp'



const Meal = ()=>{
    return(
        <div className='Meal'>
            <table className="table">
                <thead> 
                    
                </thead>
                <tbody>
                    <tr>
                        <Place image={Blank_Street} name="Blank Street Coffee" link="https://www.blankstreet.com/" />
                        <Place image={Terry} name ="Terry and Yaki" link="https://nyfta.org/terry-and-yaki"/>
                    </tr>
                    <tr>
                        <Place image={Dunkin} name="Dunkin" link="https://nyfta.org/terry-and-yaki"/>
                        <Place image={Gongcha} name ="GongCha" link="https://gongchausa.com/"/>
                    </tr>
                    <tr>
                        <Place image={KoreanExpress} name="Korean Express" link="https://www.koreantakeout.com/"/>
                        <Place image={McDonald} name="McDonald" link="https://www.mcdonalds.com/us/en-us.html"/>
                    </tr>
                    <tr>
                        <Place image={PandaExpress} name="Panda Express" link=""/>
                        <Place image={Starsbuck} name="Starbucks" link=""/>
                    </tr>
                    <tr>
                        <Place image={TacoBell} name="Taco Bell" link="https://www.tacobell.com/"/>
                        <Place image={Wonder} name="Wonder" link="https://www.wonder.com/"/>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default Meal