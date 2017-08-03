var proceedings = []

function addProceeding(){
    var value = proceedings.length+1;
    proceedings.push ({
        textarea: document.getElementById("textarea"+value),
        names: document.getElementById("names"+value),
        date: document.getElementById("date"+value),
        title: document.getElementById("title"+value),
        button: document.getElementById("button"+value)
    });
}

function getProceedings (button){
    console.log(button);
    var returnValue;
    proceedings.forEach(function(element) {
        if(element.button==button){
            console.log (element);
            returnValue = element;
        }
    }, this);
    return returnValue;
}

function editProceeding (event) {
    var element = getProceedings(event.target);
    if(!element.button.classList.contains ("activated")) {
        element.textarea.classList.toggle("active");
        element.names.classList.toggle("fieldentry_active");
        element.date.classList.toggle("fieldentry_active");
        element.title.classList.toggle("fieldentry_active");
        element.button.classList.add("activated");
    }else {
        element.button.classList.remove("activated");
        element.textarea.classList.toggle("active");
        element.names.classList.toggle("fieldentry_active");
        element.date.classList.toggle("fieldentry_active");
        element.title.classList.toggle("fieldentry_active");
    }
}

function createNewProceeding () {
    var list = document.getElementsByName("listEntry");
    var main = document.getElementById("main_list");
    var li = document.createElement("li");
        li.setAttribute("name", "listEntry");
    var div1 = document.createElement("div");
        div1.setAttribute("name", "proceedings"+(list.length+1));
    var div2 = document.createElement("div");
        div2.setAttribute("name","header");
        div2.setAttribute("class", "header");
    var div3 = document.createElement("div");
        div3.setAttribute("name","Textbox");
    var table = document.createElement("table");
    var tr1 = document.createElement("tr");
    var tr2 = document.createElement("tr");
    var tr3 = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var img1 = document.createElement("img");
        img1.setAttribute("width","16px");
        img1.setAttribute("src","assets/001-interface.png");
    var img2 = document.createElement("img");
        img2.setAttribute("width","16px");
        img2.setAttribute("src","assets/003-time.png");
    var img3 = document.createElement("img");
        img3.setAttribute("width","16px");
        img3.setAttribute("src","assets/002-users.png");
    var img4 = document.createElement("img");
        img4.setAttribute("src","assets/001-draw.png");
    var input1 = document.createElement("input");
        input1.setAttribute("id", "title"+(list.length+1));
        input1.setAttribute("type", "text");
        input1.setAttribute("class", "fieldentry title");
        input1.setAttribute("placeholder", "Title der Notiz");
    var input2 = document.createElement("input");
        input2.setAttribute("id", "date"+(list.length+1));
        input2.setAttribute("type", "text");
        input2.setAttribute("placeholder", "Datum");
        input2.setAttribute("class", "fieldentry");
    var input3 = document.createElement("input");
        input3.setAttribute("id", "names"+(list.length+1));
        input3.setAttribute("type", "text");
        input3.setAttribute("placeholder", "Beteiligte Personen");
        input3.setAttribute("class", "fieldentry");
    var btn = document.createElement("button");
        btn.setAttribute("id", "button"+(list.length+1));
    var ta = document.createElement("textarea");
        ta.setAttribute("id","textarea"+(list.length+1));
        ta.setAttribute("placeholder", "Platz für deine Notizen!");
    
    li.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(table);
    div2.appendChild(btn);
    btn.appendChild(img4);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    td1.appendChild(img1);
    td2.appendChild(input1);
    td3.appendChild(img2);
    td4.appendChild(input2);
    td5.appendChild(img3);
    td6.appendChild(input3);
    div1.appendChild(div3);
    div3.appendChild(ta);
    main.insertBefore(li, main.childNodes[0]);

    addProceeding();
    console.log(proceedings.length);
    document.getElementById("button"+proceedings.length).addEventListener('click', editProceeding);
}
document.getElementById("add").addEventListener('click', createNewProceeding);

createNewProceeding();
