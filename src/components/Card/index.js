import iconAddMember from "../../assets/card/iconAddMember.svg"
import iconDelete from "../../assets/card/iconDelete.svg"
import {Cards} from "./styles"

function Card() {
    return (
        <Cards>
            <div>
               <div>
                   <img src={iconAddMember} />
               </div>
               <div>
                   <img src={iconDelete} />
               </div>
            </div>

        </Cards>
    );
}

export default Card;