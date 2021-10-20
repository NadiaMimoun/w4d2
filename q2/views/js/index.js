$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        $("#text").val(data);
        $("#msg").text("Data added successfully");     
        setTimeout(clearMsg, 3000);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add").submit(() => {
        
        $.get({
            url: "/8ball",
           
            contentType: "application/json; charset=utf-8"
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});