export default function Child(props){
    return(
        <>
        <h3>Hello I'm Child</h3>
        {
            props.setfun("My Name is arbiter")
        }
        </>

    );
}