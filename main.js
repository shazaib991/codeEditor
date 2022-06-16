const Html = document.getElementById("html");
const Css = document.getElementById("css");
const Javascript = document.getElementById("javascript");
const editor = document.getElementById("code-output");

const compile = () =>{
    document.body.onkeyup = function(){
        try{
            editor.contentDocument.body.innerHTML = Html.value + "<style>" + Css.value + "</style>";
            editor.contentWindow.eval(Javascript.value);
        }
        catch(err){
            editor.contentDocument.body.innerHTML = `${err}`;
        }
    }
}
console.log(editor.contentWindow);

compile();