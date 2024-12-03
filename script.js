let ul = document.querySelector("ul");
let input = document.querySelector("input");
let Add = document.querySelector("#Add");
let remove = document.querySelector("#remove");
let li;

Add.addEventListener("click", function () {
    if (
        input.value.trim() == ""
    ) { }
    else {
        li = document.createElement("li");
        li.textContent = input.value.trim();
        ul.appendChild(li);
        input.value="";
    }

});
remove.addEventListener("click",function()
{
    ul.removeChild(li);
});