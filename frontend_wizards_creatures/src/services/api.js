let getCreatures = async () => {

    //let token = localStorage.getItem('wu_token');
    let creaturesJSON = {};
    await fetch(process.env.REACT_APP_WP_API_URL +'/wizards_creatures', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            // 'Authorization': 'Bearer ' + token
        },
    }).then(function (response) {
        return response.json();
    }).then(function (creatures) {
        creaturesJSON = creatures;

    });

    //console.log(creaturesJSON)

    return creaturesJSON;
}


let getCreatureById = async (id) => {

    //let token = localStorage.getItem('wu_token');
    let creatureJSON = {};
    await fetch(process.env.REACT_APP_WP_API_URL +'/wizards_creatures/' + id, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            // 'Authorization': 'Bearer ' + token
        },
    }).then(function (response) {
        return response.json();
    }).then(function (creature) {
        creatureJSON = creature;

    });

    //console.log(creaturesJSON)

    return creatureJSON;
}

let getToken = async (username,password) => {

    let token = ''
    await fetch(process.env.REACT_APP_JWT_URL +'/token', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data.token);
        token = data.token
        localStorage.setItem('wu_username', data.user_display_name)
    });

    //save in localstorage, so user doesnt need to login again
    localStorage.setItem('wu_token', token)

    return token
}

let createNewCreature = async (creatureData, token) => {


    await fetch(process.env.REACT_APP_WP_API_URL +'/wizards_creatures', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(creatureData)
    }).then(function (response) {

        return response.json();

    }).then(function (post) {
        console.log(post);
    })


}


let updateCreatureById = async (id, creatureData, token) => {


    await fetch(process.env.REACT_APP_WP_API_URL +'/wizards_creatures/' + id, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(creatureData)
    }).then(function (response) {

        return response.json();

    }).then(function (post) {
        console.log(post);
    })


}


let uploadToMedia = async (imageData, imageName, token) => {

    let id = ''

    await fetch(process.env.REACT_APP_WP_API_URL +'/media', {
        method: "POST",
        headers: {
            //'Content-Type': 'image/png',
            'Content-Disposition': 'attachment; filename=' + imageName,
            'Authorization': 'Bearer ' + token
        },
        body: imageData
    }).then(function (response) {

        return response.json();

    }).then(function (post) {
        //console.log(post);
        id = post.id
    })

    return id

}


let deleteCreature = async (id, token) => {

    //let token = localStorage.getItem('wu_token');
    await fetch(process.env.REACT_APP_WP_API_URL +'/wizards_creatures/' + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    }).then(function (response) {
        return response.json();
    }).then(function (creature) {
        return creature
    });

    //remove from dom
    let creatureCard = document.getElementById('creature' + id)
    //creatureCard.style.display = 'none'
    creatureCard.parentNode.removeChild(creatureCard)


}

export default {
    getCreatures,
    getCreatureById,
    createNewCreature,
    uploadToMedia,
    deleteCreature,
    updateCreatureById,
    getToken
}