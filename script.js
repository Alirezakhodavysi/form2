var u = 0;
function myFunction() {
    var element = document.body;
    let children = document.body.children;  
    for (let i = 0; i < document.body.children.length; i++){
        console.log('Child: ', children[i]);
        children[i].classList.toggle("light-mode");
    }
    var nodes = document.getElementById('divch').childNodes;
    if(u == 0){
        for(var i=0; i<nodes.length; i++) {
            
            if (nodes[i].nodeName.toLowerCase() == 'input') {
             nodes[i].style.background = "#ffffff";
             u=1;
    }
}
}  else{
    
    for(var o=0; o<nodes.length; o++) {
        
        if (nodes[o].nodeName.toLowerCase() == 'input') {
          
         nodes[o].style.background = "#000";
         u=0;
         
     }


} 
}
   
        
    element.classList.toggle("light-mode");
 }