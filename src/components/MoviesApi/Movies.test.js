import React from 'react'
import Movies from "./Movies";

// For Class Component
// it('Api Testing', async () => {
//     const res = new Movies()
//     let data = await res.api()
//     expect(data.movies[0].id).toEqual('1');
// })


// For Function Component
it('Api Testing', async () => {
    let data = await Movies()
    expect(data.movies[0].id).toEqual('1');
})