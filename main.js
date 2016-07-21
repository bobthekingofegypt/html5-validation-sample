
function addLiveMessageTracking(elementName) {
    var input = document.getElementById(elementName);
    var message = document.getElementById(elementName + "-message");

    input.oninput = function() {
        message.innerHTML = input.validationMessage;
    };
}

var elements = [
    "simple-required",
    "simple-maxlength"
];

elements.forEach(addLiveMessageTracking);
