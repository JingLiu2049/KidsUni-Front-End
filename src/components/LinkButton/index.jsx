
import './linkButton.less'

export default function LinkButton(props){
    return(
        <button  {...props} >{props.children}</button>
    )
}