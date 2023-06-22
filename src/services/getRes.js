const getRes = async (url) => {
    const res = await fetch(url)

    return await res.json();
}

export default getRes;

// getRes('http://localhost:3000/TopCharts')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const postRes = async (url) => {
//     let res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/josn'
//         },
//         body: JSON.stringify(res)
//     })
// };