import React,{useRef,useContext} from "react";
import classes from "./Form.module.css";
import Input from "../UI/Input";
import CartContext from "../../Store/cart-context";
const Form = (props) => {
    const crtx = useContext(CartContext);

    const nameRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    // const mRef = useRef();
    
    const addProductHandler = (e) => {
        e.preventDefault();
        const obj = {
            name : nameRef.current.value,
            descriptionRef : descriptionRef.current.value,
            price :priceRef.current.value
      }
      // if (obj.name === '' || obj.descriptionRef === '' || obj.price < 0)
      // {
      //   return;
      // }
      
      crtx.addListItems(obj);
        
    }


  return (
    <form className={classes.form}>
      <label>T-Shirt Name</label>
      <select id="t-shirt" ref={nameRef}>
        <option>Polo collar t-shirt</option>
        <option value="V-neck t-shirt">V-neck t-shirt</option>
        <option>Douche bag neck t-shirt (Scoop neck)</option>
        <option>Henley collar T-shirt</option>
        <option>Baseball Tshirt</option>
      </select>
      <label>Description</label>
      <select id="description" ref={descriptionRef}>
        <option>100% Cotton</option>
        <option>Polyester</option>
        <option>Mix</option>
      </select>
      <label>Price</label>
          <input ref={priceRef} />

      <label>Quantity Available</label>
      <div className={classes.qty}>
        <span>M:</span>
              <Input input={
                  {
                      type: 'number',
                      min: '1',
                      max: '20',
                      step: '1',
                      default: '1'
                  }} />
        <span>L:</span>
        <Input />
        <span>XL:</span>
        <Input />
        
      </div>

      <button onClick={addProductHandler}>Add-Product</button>
    </form>
  );
};

export default Form;
