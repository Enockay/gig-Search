

//using fetch supply request Option
async function getGig(url='',data={}){
    const response = await fetch(url,{
        mode : 'cors',
        method : 'GET', // can be post get,delete,
        cache : 'no-cache',
        credentials : 'same-origin',
        headers : {
            "content-type" : "application/json"
        },
        redirect : 'follow',
        body : JSON.stringify(data),
    });
    return response.json();
}
getGig('',{answer : 42}).then((data)=>{
    console.log(data);
})

let downLoadBtn = document.querySelector('.button');
let abortDownload = document.querySelector('.button2');

const controller = new AbortController();
const signal = controller.signal;
const url = 'https://api.giphy.com/v1/gifs/translate?key=130FcRNv0JjdaqV2JYgRJsPZjSeeuogj&s=dogs';

downLoadBtn.addEventListener('click',download);

async function download(){
    try{
    const response = await fetch(url,{signal});
    console.log('download Complete',response)
    
        }
        catch(error){
            console.error(`download failed ${error.message}`)
        }

    }

abortDownload.addEventListener('click',()=>{
    controller.abort();
    console.log('download aborted')
})

//uploading json data
const url1 = ''
async function postJson(data){
    try{
        const response = await fetch(url1,{
            method : 'POST',
            headers:{
                "content-type" : "application/json"
            },
            credentials : 'same-origin',
            body : JSON.stringify(data),
        })
        const result = await response.json();
        console.lod("success",result)
    }
    catch(error){
        console.error('error',error)
    }
}

const data = {
    userName : 'example'
}
postJson(data);




















