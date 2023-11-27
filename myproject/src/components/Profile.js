function Profile( props ){
    // This does not work!  
    // props.name = "Johnny"
    return <h1>Name: {props.name} Last Name: {props.lastName}

    </h1>
}

export default Profile;