import {useState,useEffect} from 'react'
const Timer = () =>{
  

    const [day,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)
    //######################################
    const [dayDigit,setDayDigit] = useState('')
    const [hourDigit,setHourDigit] = useState('')
    const [minuteDigit,setMinuteDigit] = useState('')
    const [secondDigit,setSecondDigit] = useState('')
    //adding 0 to the <span> element if any of the times are less than 10
   
    

    useEffect(() =>{

        const target = new Date("07/18/2022 16:00:00")

        const intervalFunc =  setInterval( () =>{
            
            const present = new Date();
            const difference = target.getTime() - present.getTime();
           
            //setting the differences...
            const dayDiff = Math.floor(difference / (1000 * 60 *60 * 24));
            setDays(dayDiff);

            const hourDiff = Math.floor(
                difference % (1000 * 60 * 60* 24 ) / (1000 * 60 * 60 )
            )
            setHours(hourDiff);

            const minuteDiff = Math.floor(
                difference % (1000 * 60 * 60 ) / (1000 * 60)
            )
            setMinutes(minuteDiff);

            const secondDiff = Math.floor(
                (difference % ((1000 * 60)) / 1000)
            )
            setSeconds(secondDiff)   
        },1000)

        //return clearInterval(intervalFunc)
    },[])

    return (
        <>
        <span>
            {dayDigit}
            {day}
        </span>:
        <span>
            {hourDigit}
            {hours}
        </span>:
        <span>
            {minuteDigit}
            {minutes}
        </span>:
        <span>
            {secondDigit}
            {seconds}
        </span>
        </>
    )
}
export default Timer