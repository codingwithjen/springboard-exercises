# DOM Manipulation Exerxises (4.2 Manipulating the DOM)

### Getting started
Given the following HTML:

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <div class="header">
    </div>
    <section id="container">
        <ul>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ul>
        <ol>
            <li class="first">one</li>
            <li class="second">two</li>
            <li class="third">three</li>
        </ol>
    </section>
    <div class="footer">
    </div>
</body>
</html>
```

### Exercise
Write the code necessary to do the following:
1. **Select the section with an id of container without using querySelector.**
    - document.getElementById("container");

2. **Select the section with an id of container using querySelector.**
    - document.querySelectorAll("#container");

3. **Select all of the list items with a class of "second."**
    - document.querySelectorAll(".second");

4. **Select a list item with a class of third, but only the list item inside of the ol tag.**
    - document.querySelector("ol .third");

5. **Give the section with an id of container the text "Hello!"**
    - let container = document.getElementById("container");
    - container.innerText = "Hello!";

6. **Add the class main to the div with a class of footer.**
    - let classFooter = document.querySelector(".footer");
    - classFooter.classList.add("main");

7. **Remove the class main on the div with a class of footer.**
    - let footer = document.querySelector(".footer");
    - footer.classList.remove("main");

8. **Create a new li element.**
    - let newLi = document.createElement("li");

9. **Give the li the text "four."**
    - newLi.innerText = "four";

10. **Append the li to the ul element.**
    - let list = document.querySelector("ul");
    - list.appendChild(newLi);

11. **Loop over all of the li's inside the ol tag and give them a background color of "green."**
    - let liInsideOl = document.querySelectorAll("ol li");
    - for (let i = 0; i < liInsideOl.length; i++) {
        liInsideOl[i].style.backgroundColor = "green";
    }

12. **Remove the div with a class of footer.**
    - let footer = document.querySelector(".footer");
    footer.remove();

