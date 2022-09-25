import { ProfileImage } from "./ProfileImage"
import { About } from "./About"
import { Contacts } from "./Contacts"



export const Card = (props) => {
    return (
        <div className="borderline">
            <div className="card">
                <ProfileImage />
                <About name={props.name} />
                <Contacts msg= "Vishal"/>
            </div>

        </div>
      
    )
}
