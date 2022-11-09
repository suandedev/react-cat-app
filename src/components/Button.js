import {Link} from "react-router-dom";
var Button = (props) => {
    return <Link className="button" to="/posts/detail">{props.value}</Link>
}
export default Button;