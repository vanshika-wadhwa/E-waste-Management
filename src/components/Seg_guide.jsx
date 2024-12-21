import {Introduction_to_Waste_Segregation} from "../constants/segContent"
import {TypesOfWaste} from "../constants/segContent"
import {SegregateWasteEffectively} from "../constants/segContent"
import {BenefitsOfWasteSegregation} from "../constants/segContent"
import {ConclusionandCalltoAction} from "../constants/segContent"

const Seg_guide = () => {
  return (
    <div>
      <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'> Segeration Guide</h1>
      <div>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Introduction to Waste Segregation: </span>
      <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{Introduction_to_Waste_Segregation}</p>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Types Of Waste</span>
       <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{TypesOfWaste}</p>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Segregate Waste Effectively</span>
       <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{SegregateWasteEffectively}</p>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Benefits of Waste Segregation</span>
       <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{BenefitsOfWasteSegregation}</p>
      <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>Conclusion and Call to Action</span>
       <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{ConclusionandCalltoAction}</p>
      </div>
    </div>
  )
}

export default Seg_guide
