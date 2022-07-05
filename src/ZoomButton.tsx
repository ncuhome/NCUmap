import { useBounds } from "@react-three/drei"
import { useTrackedStore } from "./store"

export default function ZoomButton(){
    const {isZoomed,setZoomed} = useTrackedStore()
    const api = useBounds()
    const handleBack = ()=>{
        api.refresh().fit()
    }
    return(
        <div style={{
            position:'absolute',
            bottom: 10,
            left:'48%',
            display:isZoomed?'block':'none'
        }}>
            <button onClick={()=>(setZoomed(false))}>
                OverView 
            </button>
        </div>
    )
}