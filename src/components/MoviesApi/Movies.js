// Class Component 

// import React from 'react'

// class Movies {
//     api = () => {
//         return fetch('https://reactnative.dev/movies.json')
//         .then(response => response.json())
//     }
// }

// export default Movies;


// Functional Component 

import React from 'react'

export default function Movies() {
    return fetch('https://reactnative.dev/movies.json')
        .then(response => response.json())
}
