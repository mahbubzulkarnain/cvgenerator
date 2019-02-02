"use strict";

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('avatar').src = e.target.result;
            model_portfolio.set.item.avatar(e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
