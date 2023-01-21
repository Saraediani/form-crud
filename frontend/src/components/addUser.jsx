
import React, {useState} from 'react'; 
import { useLocation } from 'react-router-dom'
import  '../index.css';
import  axios  from 'axios' ;
function AddUser() {
  const baseURL = "http://localhost:3000/user";
  const initialFormState = { name: "",
      email: "",
      phone:"" ,
      job:"",
      company:"",
      age:"",
      city:"",
      comingFrom:"",}

      const [AddUser, setaddUser] = useState(initialFormState);
      const { name, email, phone, job, company, age, city } = AddUser;

      const search = useLocation().search;
      const q = new URLSearchParams(search).get('q');

      const handleChage = ({ currentTarget: input }) => {
        setaddUser({ ...AddUser, [input.name]: input.value });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        setaddUser({ ...AddUser, comingFrom:q });
      

        try {
         const response = await axios({ 
            method: "post",
            url: baseURL,
            data: {...AddUser},
          })
          if (response){

            setaddUser(initialFormState)
            alert("Form submitted successfully")
          }

         
          } catch (error) {
          console.log(error)
        }
      }
  return (
<>

<form className="p-2" onSubmit={handleSubmit}>
      <div className="formulaire">
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="inputName">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
              value={name}
              onChange={handleChage}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              value={email}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Phone</label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            id="inputPhone"
            placeholder="Phone"
            value={phone}
            onChange={handleChage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputJob">Job</label>
          <input
            type="text"
            name="job"
            className="form-control"
            id="inputJob"
            placeholder="Job"
            value={job}
            onChange={handleChage}
          />
        </div>
        <div className="form-group">
          <div className="form-group ">
            <label htmlFor="inputCompany">Company</label>
            <input
              type="text"
              name="company"
              className="form-control"
              id="inputCompany"
              placeholder="Company"
              value={company}
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="inputAge">Age</label>
            <input
              type="number"
              name="age"
              className="form-control"
              id="inputAge"
              value={age}
              placeholder="Age"
              onChange={handleChage}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              id="inputCity"
              value={city}
              placeholder="City"
              onChange={handleChage}
            />
          </div>
        </div>


        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
      </form>
    </>
  );
}


export default AddUser;
