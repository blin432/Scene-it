
/*document.addEventListener('DOMContentLoaded',function(){
}); commented out to defined function saveToWatchList*/      

var newData;
    function saveToWatchlist(imdbID){
        
        var movie = newData.find(function(currentMovie){
            return currentMovie.imdbID == imdbID; 
         });
            var watchlistJSON =localStorage.getItem('watchlist');
            var watchlist= JSON.parse(watchlistJSON);
                if(watchlist==null){
                    watchlist=[];
                } ;
               watchlist.push(movie);
                watchlistJSON=JSON.stringify(watchlist);
                localStorage.setItem('watchlist', watchlistJSON);
            
          
    }




    function renderMovies(movieArray){
   
               var movieHTML= movieArray.map(function(currentMovie){
                var finalHTML = 
                `
                        <div class="m-1 p-2">
                        <div class="card "  style="width: 14rem; height:470px;">
                            <img class="card-img-top" src=${currentMovie.Poster}style="width:60px; height:200px" alt="Card image cap">
                            <div class="card-body" style="height:50px;">
                            <h5 class="card-title">${currentMovie.Title} ${currentMovie.Year}</h5>
                           
                            <button onclick="saveToWatchlist('${currentMovie.imdbID}')" class="btn btn-primary">Add</button>
                          </div>  
                        </div>
                        </div>
                `
                return finalHTML;
                
            });
            
            return `<div class="d-flex flex-row flex-wrap "> ${movieHTML.join('')}

            </div>`
        };
        


    document.getElementById('search-form').addEventListener('submit',function(e){
        e.preventDefault();

        var searchString = document.getElementById('search-bar').value;
        var urlEncodedSearchString= encodeURIComponent(searchString);
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response){
            console.log(response.data);
            document.getElementsByClassName('movie-container')[0].innerHTML=renderMovies(response.data.Search);
            newData= response.data.Search;
        });


    });


