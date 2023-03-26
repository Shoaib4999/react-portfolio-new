export default function Greetings(props){
    return(

        <>

            <h1> Hello {props.username} {props.password && `- ${props.password}`}</h1>

        </>
    )

}