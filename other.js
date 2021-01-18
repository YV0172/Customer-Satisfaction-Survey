$(".other").change(function () {
    //check if its checked. If checked move inside and check for others value
    if (this.checked && this.value === "other") {
        //add a text box next to it
        $(this).next("label").after("<input id='other-text' placeholder='Other...' type='text'/>")
    } else {
        //remove if unchecked
        $("#other-text").remove();
    }
});