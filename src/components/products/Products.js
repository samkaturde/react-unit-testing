import React from 'react'

const Products = ({ items = [] }) => {
        if (items.length <= 0) {
            return  <div>
                        No item found!
                    </div>
        } else {
            return <ol>
                {
                    items.map((item, ind) => {
                        return <li key={ind}>{item}</li>
                    })
                }
            </ol>
        }
}

export default Products;
