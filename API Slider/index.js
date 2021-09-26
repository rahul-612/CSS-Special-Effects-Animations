const centerDiv=document.getElementById('centerDiv');

fetch("https://jsonplaceholder.typicode.com/photos?_limit=20").then((apidata)=>{
    // console.log(apidata.json());
    return apidata.json();
})
.then((jsondata)=>{
    
    // console.log(jsondata[0].url);
    jsondata.map((val)=>{
        key=val.id;
        let img=document.createElement('img');
        img.src=`https://picsum.photos/100/200?random=${val.id}`;    
        centerDiv.appendChild(img);  
    
    })
});