function Profile( props ){
    console.log( props );
    return <h1>Name: {props.name} Last Name: {props.lastName}
    {props.children} <p>But no, it requires a props.children reference.</p>
    </h1>
}

export default Profile;