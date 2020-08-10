function submit(){
    firebase.firestore().collection('BlogPost').doc().set({
        title:document.getElementById('title').value,
        content:document.getElementById('content').value
    }).then(function(error){
        if (error){
            alert(error);
            
        }
       else{
           alert('Post submit');
       }
    })

    getData();
}

function getData(){
    firebase.firestore().collection('BlogPost').get().then(function(snapshot){
        var village=document.getElementById('wrapper');
        var m="<div>"
        snapshot.forEach(function(doc){
            m=m+"<h1>"+doc.data().title+"</h1>"+
            "<p>"+doc.data().content+"</p><br>"+
           "<button id='"+doc.id+"' onclick='deletePost("+doc.id+")'>Delete</button>";



        });
        m=m+"</div>";
        village.innerHTML=m;

    });



}
window.onload=function(){
    this.getData();
}
function deletePost(key){
    console.log(key.id.toString());
    var doc1=key.id.toString();
firebase.firestore().collection('BlogPost').doc(doc1).delete();
getData();
}