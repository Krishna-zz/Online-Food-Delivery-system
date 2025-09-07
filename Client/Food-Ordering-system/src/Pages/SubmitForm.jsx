import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SubmitForm(){

    const navigate = useNavigate()

    const [food , setFood] = useState({
         name:"",
        category:"",
        price:""
    })



    const handleChange = (e) => {
        setFood({...food, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = fetch('http://localhost:3000/user/setcard', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
        
            },
            body:JSON.stringify(food)
        })

        const data = await res.json()
        alert(data.message)

        if((await res).ok){
            navigate('/foods')
        }
    }

    return(
        <div>
            <div  className="bg-gray-600 ">
                <form onSubmit={handleSubmit}  action=""  className="p-4 space-y-2 flex flex-col w-100">
                    <input  className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={handleChange}  name="name" placeholder="Name" />
                    <input className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={handleChange}  name="category" placeholder="Category" />
                    <input className="bg-white rounded-xl mb-3 shadow-xl px-4 py-2 shadow-black" onChange={handleChange}  name="price" placeholder="Price" />
                    <button className=" rounded-xl px-4 py-2 shadow-xl bg-blue-500 text-white" type="submit" >Add Food Item</button>
                </form >
            </div>
        </div>
    )

}

export default SubmitForm