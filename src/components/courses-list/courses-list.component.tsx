import './courses-list.css'

interface IProps {
    Name : string;

}

const Course = (props :IProps) => {
    return (
        <div>
            <b>Course Name :</b>+ {props.Name}
        </div>
    )
}

export default Course ; 