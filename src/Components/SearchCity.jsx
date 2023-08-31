import { useState } from "react";

function SearchCity({onChange}) {
const [inputValue,setInputValue] = useState('')

    function TargetValue(e){
        setInputValue(e.target.value)
       // console.log(inputValue);
        
    }
    function EnterKeyDown(e){
        if(e.key === 'Enter'){
           // console.log('enter marche');
            onChange(inputValue)
        }
        else{
            console.log('Error');
        }
        
    }
    return (
        <div>
            
            <div>
                <input type="text"
                onChange={TargetValue}
                onKeyDown={EnterKeyDown}/>
            </div>
        </div>
    );
}

export default SearchCity;