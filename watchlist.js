document.addEventListener('DOMContentLoaded',function(){
    var addedMovies= JSON.parse(localStorage.getItem('watchlist'));

function renderMovies(movieArray){
           
           var movieHTML= movieArray.map(function(currentMovie){
            var finalHTML = 
            `
                    <div class="m-1 p-2">
                    <div class="card "  style="width: 14rem; height:470px;">
                        <img class="card-img-top" src=${currentMovie.Poster}style="width:60px; height:200px" alt="Card image cap">
                        <div class="card-body" style="height:50px;">
                        <h5 class="card-title">${currentMovie.Title} ${currentMovie.Year}</h5>
                       
                       
                      </div>  
                    </div>
                    </div>
            `
            return finalHTML;
            
        });
        
        return `<div class="d-flex flex-row flex-wrap "> ${movieHTML.join('')}

        </div>` 
        

    };
    
    document.getElementsByClassName('movie-container')[0].innerHTML=renderMovies(addedMovies);
   
});  
