import { IoIosCloseCircle } from "react-icons/io";
const VehiRegister = () => {
  return (
    <div className="register border rounded-lg bg-transparent m-6 h-10% w-50%">
      <div className="flex flex-row gap-96">
      <h1 className="text-3xl ">Register!</h1>
      <IoIosCloseCircle />
      </div>
      <div className="card ">
        <h6>User Name:</h6>
        <span><input type="text" placeholder='Username...' /></span>
        <h6>Email:</h6>
        <span><input type="email" placeholder='Email...'/></span>
        <h6>Contact</h6>
        <span><input type="text" placeholder='Contact...' /></span>
        <button type="submit">Submit</button>
      </div>
    </div>
  )
}

export default VehiRegister
