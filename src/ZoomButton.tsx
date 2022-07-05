import { useBounds } from "@react-three/drei"


export default function ZoomButton(){
    const api = useBounds()
    const handleBack = ()=>{
        api.refresh().fit()
    }
    return(
        <div style={{
            position:'absolute',
            bottom: 10,
            left:'48%',
            // display:'none'
        }}>
            <button onClick={handleBack}>
                Back
            </button>
        </div>
    )
}