export function GameBoard2(){
    const threeBtnRow =     <div>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>


    return(
 
   { [0,1,2].map((item)=> item+=threeBtnRow)}
    )
}