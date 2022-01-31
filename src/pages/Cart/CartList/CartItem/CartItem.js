import React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
  return (
    <div className="cartItem">
      <div className="cartItemContent">
        <div className="cartItemImg">
          <img src={item.imageUrls} alt="" />
        </div>
        <div className="cartItemContent">
          <div className="cartItemContentHead">
            <div className="cartItemContentTitle">
              <h3>{item.name}</h3>
              <p>USD ${item.price}</p>
            </div>
            <div className="cartItemSubCate">
              <p>{item.category}</p>
            </div>
          </div>
          <div className="cartItemContentBody">
            <ul className="cartItemInfo">
              <li>
                <div className="cartItemInfoSize">
                  <p>Size: </p>
                  <span>50ml</span>
                </div>
              </li>
              <li>
                <div className="cartItemInfoQuantity">
                  <p>Quantity: </p>
                  <div className="quantityControl">
                    <button>-</button>
                    <input type="text" value="3" readOnly />
                    <button>+</button>
                  </div>
                </div>
              </li>
            </ul>

            <div className="cartItemInfoRemove">
              <p>Remove</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
