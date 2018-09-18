document.getElementById("login").addEventListener("click", login);
document.getElementById("create-post").addEventListener("click", writeNewPost);

//getPosts();

function login() {

	 https://firebase.google.com/docs/auth/web/google-signin
	// Provider
	var provider = new firebase.auth.GoogleAuthProvider();
	// How to Log In
	firebase.auth().signInWithPopup(provider)
		.then(function () {
			console.log(firebase.auth());
		})
		.catch(function () {
			alert("Something went wrong");
		});
}

function writeNewPost() {

	 https://firebase.google.com/docs/database/web/read-and-write

	// Values
	var text = document.getElementById("textInput").value;
	var userName = firebase.auth().currentUser.displayName;
	// A post entry
	var post = {
		name: userName,
		body: text
	};
	// Get a key for a new Post.
	var newPostKey = firebase.database().ref().child('general').push().key;
	//Write data
	var updates = {};
	updates[newPostKey] = post;
	return firebase.database().ref('general').update(updates);
}

function getPosts() {

	firebase.database().ref('general').on('value', function (data) {
		var posts = document.getElementById("posts");
		posts.innerHTML = "";
		var messages = data.val();
		for (var key in messages) {
			var text = document.createElement("div");
			var element = messages[key];
			text.append(element.body);
			posts.append(text);
		}
	})
	console.log("getting posts");
}

//////////////////////////////////////////////cerrar///////////////////////////////////////
var modal = document.getElementById('id01');

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function login() {

//     var provider = new firebase.auth.GoogleAuthProvider();

//     firebase.auth().signInWithPopup(provider);
//     console.log("Login!!");

// }


// function writeNewPost() {

//     var text = document.getElementById("textInput").value;
//     var userName = firebase.auth().currentUser.displayName;

//     // A post entry.
//     var postData = {
//         name: userName,
//         body: text
//     };

//     // Get a key for a new Post.
//     var newPostKey = firebase.database().ref().child('myMessages').push().key;


//     var updates = {};

//     updates[newPostKey] = postData;

//     firebase.database().ref().child('myMessages').update(updates);


// }


// function getPosts() {


//     firebase.database().ref('myMessages').on('value', function (data) {
//         var posts = document.getElementById("posts");
//         posts.innerHTML = "";

//         var posts = data.val();

//         for (var key in posts) {
//             var text = document.createElement("div");
//             var element = posts[key];

//             text.append(element.body);
//             posts.append(text);
//         }

//     })
// }
