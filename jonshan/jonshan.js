function req1() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))
            // we print the title and the body of the post recived
        var title = response.data.title;
        var body = response.data.body
        document.getElementById("printTitle").innerHTML = title
        document.getElementById("printBody").innerHTML = body
    }