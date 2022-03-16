var a =0;
// window.onload = clearFunction;
function postFunction()
{
    var write = document.getElementById("text1").value;
    if(a ==0)
    {
        var comment = document.getElementById("topic1");
        comment.textContent = write;
        a++;
        
    }
    else if(a ==1)
    {       
        var comment = document.getElementById("comment1");
        comment.textContent = write;
        a++;
    }
    else if(a ==2)
    {
      
        var comment = document.getElementById("comment2");
        comment.textContent = write;
        a++;
    }
    else if(a >2)
    {
       alert("Full");
    }   
}
function clearFunction()
        { 
            var topic1 = document.getElementById("topic1");
            var comment1 = document.getElementById("comment1");
            var comment2 = document.getElementById("comment2");
            topic1.textContent = " ";
            comment1.textContent = " ";
            comment2.textContent = " ";
            a=0;
        }
