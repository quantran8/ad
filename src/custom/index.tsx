import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export const Prev = (props:any) => {
    const {onClick} = props
    return(
     <div onClick={onClick} className='arrow-prev'>
         <NavigateBeforeIcon  />
     </div>
    )
}
export const Next = (props:any) => {
    const {onClick} = props
    return(
     <div onClick={onClick} className='arrow-next'>
         <NavigateNextIcon />
     </div>
    )
}