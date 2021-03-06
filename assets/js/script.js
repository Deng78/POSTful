$(document).ready(() => {
    $('#send').on('click', (e) => {
        let method = document.getElementById('method').value;
        let query = $('#url').val();
        if(query == '' || query == ' '){
            console.log('empty');
            document.getElementById('code').innerHTML = '';
        } else{
            if(method == 'get'){
                getRequest(query);
            } else if(method == 'post'){
                postRequest(query);
            } else if(method == 'put'){
                putRequest(query);
            } else {
                deleteRequest(query);
            }
        e.preventDefault();
        }
    });
});
function output(response){
    let data = JSON.stringify(response.data, null, "\t");
    let headers = JSON.stringify(response.headers, undefined, 2);
    document.getElementById('code').innerText = data;
    document.getElementById('headers').innerText = headers;
    document.getElementById('status').innerText = response.status;
}
function outputError(error){
    // document.getElementById('code').innerText = 'Error '+ error.message;
    // document.getElementById('status').innerText = error.response.status;
    if (error.response) {
        let headers = JSON.stringify(error.response.headers, undefined, 2);
        document.getElementById('code').innerText = 'Error '+ error.message;
        document.getElementById('headers').innerText = headers;
        document.getElementById('status').innerText = error.response.status;
    } else if (error.request) {
        // The request was made but no response was received
        let errorReq = JSON.stringify(error.request, undefined, 2);
        document.getElementById('code').innerText = errorReq + ' 500 (Internal Server Error)';
        document.getElementById('status').innerText = '';
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    Materialize.toast('There was an error :(', 4000, 'red')
    console.log(error.config);
}
function showLoading(){
    document.getElementById('loading').classList.remove('hiddendiv');
}
function hideLoading(){
    document.getElementById('loading').classList.add('hiddendiv');
}
function getRequest(query){
    showLoading();
    // Make a request for a user with a given ID
    axios.get(query)
    .then(function (response) {
        hideLoading();
        console.log(response);
        output(response);
    })
    .catch(function (error) {
        // console.log(error);
        // console.log(error.response.status);
        outputError(error);
        hideLoading();
    });
}

function postRequest(query){
    showLoading();
    axios.post(query)
    .then(function (response) {
        hideLoading();
        console.log(response);
        output(response);
    })
    .catch(function (error) {
        outputError(error);
        hideLoading();
    });
}

function putRequest(query){
    showLoading();
    axios.put(query)
    .then(function (response) {
        hideLoading();
        console.log(response);
        output(response);
    })
    .catch(function (error) {
        outputError(error);
        hideLoading();
    });
}

function deleteRequest(query){
    showLoading();
    axios.delete(query)
    .then(function(response) {
        hideLoading();
        output(response);
        console.log(response);
    })
    .catch(function(error){
        outputError(error);
        hideLoading();
    });
}
