// Immediately Invoked Function Expression - IIFE

(function chai() {
    console.log(`DB Connected`)
})();

(() => {
    console.log(`DB Connected again`)
}) ();

((name) => {
    console.log(`DB Connected 3rd time ${name}`)
}) ('Animesh');

