let getIdFromURL = () => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var c = url.searchParams.get("id");
    console.log(c);

}

export default getIdFromURL;