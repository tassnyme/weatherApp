import React from 'react'

function TopButtons({setQuery,hover}) {

    const cities=[
        {id:1,name:'Mahdia'},
        {id:2,name:'Nabeul'},
        {id:3,name:'Tunis'},
        {id:1,name:'Palestine'},
        {id:1,name:'Sudan'},

    ]
  return (
    <div className={`flex items-center justify-around my-6 shadow-xl `}>
        {cities.map((item)=>(
             <button 
             key={item.id}
             onClick={()=>setQuery({q: item.name})}
             className={` ${hover} text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in`}>{item.name}</button>
        ))}
      
    </div>
  )
}

export default TopButtons
