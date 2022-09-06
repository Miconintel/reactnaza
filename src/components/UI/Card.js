import './Card.css'

function Card(props){
    const classes = 'card ' + props.className
    // this is like setting regular css by seperating with a space incase u have a specific style for an element and also want a particular style to also appear on the html element its like saying <div className="card valu"> content </div>
return <div className={classes}>{props.children}</div>
}

export default Card