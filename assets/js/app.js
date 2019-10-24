

const tweetList = document.getElementById('tweet-list');
const formvalidation = document.querySelector('#form');
//const t_area = document.querySelector('#tweet');


formvalidation.addEventListener('submit', printevent);
tweetList.addEventListener('click', removeTweet);
document.addEventListener('DOMContentLoaded', localStorageOnLoad);




function printevent(e){
    e.preventDefault();
    const textarea = document.getElementById('tweet').value;

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    
    
    const li = document.createElement('li');
    li.textContent = textarea;



    li.appendChild(removeBtn);
    tweetList.appendChild(li);
    ls(textarea);
    alert("tweet added");
    
    this.reset();
}

function removeTweet(e){

    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();
    }
    
   removeTweetLocalStorage(e.target.parentElement.textContent);     
}


function ls(textarea){

    let tweets = getTweetFromLs();
    tweets.push(textarea);
    localStorage.setItem('tweets', JSON.stringify(tweets));

}
function getTweetFromLs(){
    let tweets;
    const tweetsLs = localStorage.getItem('tweets');

    if(tweetsLs === null) {
        tweets = [];
    } else{
        tweets = JSON.parse(tweetsLs);
    }
    return tweets;

    
}
function localStorageOnLoad(){
    let tweets = getTweetFromLs();
    tweets.forEach(function(textarea){
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = 'X';
        
        
        const li = document.createElement('li');
        li.textContent = textarea;

        li.appendChild(removeBtn);
    
    
        
    
        tweetList.appendChild(li);
        
    
    });
}


function removeTweetLocalStorage(textarea){
    let tweets = getTweetFromLs();
   // console.log(tweets);
    const tweetDelete = textarea.substring(0, textarea.length -1);
    // loop thru tweet and remove
    tweets.forEach(function(tweetsLs, index){

        if(tweetDelete === tweetsLs){
            //console.log('yees');
           tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
   //console.log(tweets);
   
}
