import PropTypes from 'prop-types'
import Imagechild from './Imagechild'
import profilePic from './assets/Bill-Gates.jpg'

function Profile(props){
    var MyStyle = {
        width: "40%",
        height: "40%",
        marginLeft: "30%",
        marginTop: "1%",
        marginBottom: "1%",
        border: "solid 1px black",
        borderRadius: "25px",
        backgroundColor: "#eee",
    }

    var ItemStyle = {
        margin: "5%"
    }

    var ButtonStyle = {
        color: "white",
        borderRadius : "5px",
        border : "none",
        backgroundColor : "#0d6efd",
        padding: "5px"
    }

    return(
    <>
    <div style={MyStyle} >
        <Imagechild><img src={profilePic} width="100%"  height="350px"  /></Imagechild>
        <div style={ItemStyle} >
            <h1>{props.fullName}</h1>
            <h3>{props.profession}</h3>
            <p>{props.bio}</p>
            <button onClick={props.handleName} style={ButtonStyle} >Click Me</button>
        </div>
    </div>
        
    </>
    )
}

Profile.defaultProps = {
    fullName: "Hubert Warcisław" ,
    profession : "IT consultant" ,
    bio : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquam praesentium earum, totam, corrupti assumenda amet obcaecati molestias debitis magnam fugit quasi laudantium laboriosam quia porro alias, accusamus possimus repellat sunt adipisci quas non odit qui veniam. Autem reprehenderit minima necessitatibus consequatur impedit voluptatum laborum vel fugit."
};

Profile.propTypes = {
    fullName : PropTypes.string,
    profession : PropTypes.string,
    bio : PropTypes.string,
    handleName : PropTypes.func
}

export default Profile