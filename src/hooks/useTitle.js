import  { useEffect } from 'react'

const useTitle = (title) => {

useEffect(()=>{
    document.title =`${title} - Pet_Shop`
},[title])


 return null
}

export default useTitle
