$(document).ready(() => {
  $('#send').on('click', (e) => {
    let method = document.getElementById('method').value;
    let query = $('#url').val();
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
  });
});
let key = 'posts';
let value = '1';
const config = {
    method: method,
    params: {
        key: value
    }
};
function getRequest(query){
    // Make a request for a user with a given ID
   /* axios.get(query)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    */
    let method = 'delete';
    axios.get(query, config)
    .then(function(response) {
        console.log(response);
    });
}


function postRequest(query){
    let config = {
        
    }
    
}


function putRequest(query){
    console.log(query);

}


function deleteRequest(query){
    axios(query, {
    method:'delete',
    })
    .then(function(response) {
        console.log(response);
    });
}


/// Check to see if response if empty then allow to be downloaded
if(jQuery.isEmptyObject(response) == false){
            document.getElementById('download').classList.remove('disabled');
             document.getElementById('download').onclick = function(){
                uriContent = "data:plain/text," + encodeURIComponent(data);
                newWindow = window.open(uriContent, 'data.json');
            }
        } else{
            
        }