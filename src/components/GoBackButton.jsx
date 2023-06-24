import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

function GoBackButton() {
  return (
    <div>
      <Link to="/">
      <AiOutlineArrowLeft size={30} className="shake-horizontal"/>
      </Link>
      
    </div>
  )
}

export default GoBackButton