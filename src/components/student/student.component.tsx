
import './student.css'
interface IProps{
    name:string;
    GPA:number;
}
const Student = (props:IProps) => {
    return (
        <div className='stdwrapper'>
            {props.name + ' Is a web development Queen '}
        </div>
    )
        

}

export default Student ; 