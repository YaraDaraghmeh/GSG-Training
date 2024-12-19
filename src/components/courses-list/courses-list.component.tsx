import './courses-list.css'
interface IProps {
    list: string[];
}

const CoursesList = (props: IProps) => {
    return (
        <ul>
            {
                props.list.map((item, index) => <li key={index + item}>{item}</li>)

            }
            {
        /* { Who w to write it in anothe way 
فنكشن الماب بلف ع العناصر عنصر عنصر وبترحعلي ليست من الايتم وبنطبعوا 
        props.list.map(item =>{
            return (
                <li>{item}</li>
            )
        })
        //Note for loop cant br used here in this case coz we cant let the loop return only one value 
        // Index is not recommended to be used as a key AND THE KEY MUST BE ADDED TO THE ROOT PARENT 
        //Map function returns the item and its index its possible to get mulfunction seprcially wehen we add or delete elements 
        // currently our KEY IS A COMBINATION FRON THE KEY AND THE ITEM THAT HAS BEEN PROCESSED BY THE MAP 
        } */}
        </ul>
    )
}

export default CoursesList;