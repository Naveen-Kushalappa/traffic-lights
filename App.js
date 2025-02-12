import {useState} from "react"
export default function App() {

    const trafficColors = ["red", "yellow","green"];
    const [activeColor, setActiveColor] = useState(trafficColors[0]);

    const changeState = () => {
        const index = trafficColors.indexOf(activeColor);
        const nextIndex = index + 1 === trafficColors.length ? 0 : index+1;
        setActiveColor(trafficColors[nextIndex]);
    }

    return <>
        {
            trafficColors.map((currrentColor) => {
                return <Circle color={ currrentColor === activeColor ? currrentColor :  "white" }
                />
            })
        }

        <div class="margin-top: 10">
            <Button onclickCallback={ () => changeState()}></Button>
        </div>
    </>
}

const Signal = ({ trafficColors, activeColor }) => {
    // alert(JSON.stringify(trafficColors));
    const showMe = ({ val }) => {
        alert(val);
    }
    return (<>
            {trafficColors.map((val) => {
                <>
                    <div>here {showMe}</div>
                    {/* <Circle color={color} isActive={color === activeColor}></Circle> */}
                </>
            })
            }
        </>

    )
}

const Button = ({ onclickCallback }) => {


    return (<button type="button" onClick={onclickCallback} className="button">Change</button>)
}

const Circle = ({ color, isActive }) => {
    return (
        <div id="circle" className={color}  />
    )
}

const Rectangle = () => {
    return <div id="square"></div>
}