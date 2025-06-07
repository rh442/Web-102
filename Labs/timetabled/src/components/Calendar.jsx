import React from "react"
import Event from './Events'

const Calendar=()=>{
    return(
        <div className="Calendar">
        <table>
            <thead>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </thead>
            <tbody>
                <tr>
                    <td className="time">8 AM</td>
                    <Event event='Breakfast' color='green' location="Restaurant"/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">9 AM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">10 AM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">11 AM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">12 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event = 'work' color='pink' location='123 st'/>
                </tr>
                <tr>
                    <td className="time">1 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">2 PM</td>
                    <td></td>
                    <td></td>
                    <Event event='Lunch w/ Friends' color='blue' location='TBD'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">3 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">4 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='' color='pink' location=''/>
                </tr>
                <tr>
                    <td className="time">5 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event="Online course" color='pink' location='home'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
        
    )
}
export default Calendar;