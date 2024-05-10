import './App.css'

export const Dice = (props) => {
    return(
        <div className="die-face">
            <h2 className="die-num">{props.value}</h2>
        </div>
    );
}