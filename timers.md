# Timers Exercise (3.3 JavaScript Timers)

### countDown
Write a function called countdown that accepts a number as a parameter and every 1000 miliseconds decrements the value and console.logs it. Once the value is 0, it should log "DONE!" and stop.

>countDown(4);
>
>// 3
>
>// 2
>
>// 1
>
>// "DONE!"

```function countDown(time) {
    let timer = setInterval(function () {
        time--;
        clearInterval(timer);
        if (time <= 0) {
            console.log("DONE!");
        }
        else {
            console.log(time);
        }
    }, 1000)
}
```