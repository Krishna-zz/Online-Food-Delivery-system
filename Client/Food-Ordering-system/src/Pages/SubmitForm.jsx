import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function SubmitForm(){

    const navigate = useNavigate()

    const [food , setFood] = useState({
        name:"",
        category:"",
        price:""
    })

    const [file , setFile] = useState(null)

    const handleChange = (e) => {
        setFood({...food, [e.target.name]: e.target.value})
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData()
        formData.append("name", food.name)
        formData.append("category", food.category)
        formData.append("price", food.price)
        if (file) {
            formData.append("image", file)
        }

        const res = await fetch('http://localhost:3000/user/setcard', {
            method: "POST",
            
            body:formData,
        })

        const data = await res.json()
        alert(data.message)

        if(res.ok){
           navigate('/foods')
        }
    }

    return(
        <div>
            <div  className="bg-gray-600 ">
                <form onSubmit={handleSubmit}  action=""  className="p-4 space-y-2 flex flex-col w-100">
                     <div className="grid w-full max-w-sm items-center gap-3">
                        <Label className= 'text-white' htmlFor="picture">Picture</Label>
                        <Input id="picture"  name="image" onChange={handleFileChange}  className='bg-white' type="file" />
                     </div>
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