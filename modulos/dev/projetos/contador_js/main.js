var div_counter = document.getElementById("div_counter");

function runCounter(counter){
    setTimeout(() => {
        counter = counter + 1;
        //console.log(counter);

        document.getElementById("counter").remove();
        g = document.createElement('P');
        g.setAttribute("id", "counter");
        g.classList.add("counter");

        var t = document.createTextNode(counter);
        g.appendChild(t);  

        div_counter.appendChild(g);

        runCounter(counter);
    }, 1000);
}