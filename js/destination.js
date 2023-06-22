$(function () {


    $(".gallery>li").slice(9).hide();

    $(".plus>button").click(function () {
        number = $(".gallery>li:visible").length;
        number = Math.floor(number / 3) * 3;
        if (number > $(".gallery>li:visible").length + 2)
            return false;
        else {
            $(".gallery>li").hide();
            $(".gallery>li:nth-child(-n+" + (number + 6) + ")").show();
        }
        return false;
    });

    $("#country").change(function () {
        if ($('#country option:selected').val() == 1) {
            $(".gallery>li").hide();
            $(".gallery>li[title=asia]").show();
        } else if ($('#country option:selected').val() == 2) {
            $(".gallery>li").hide();
            $(".gallery>li[title=eu]").show();
        } else if ($('#country option:selected').val() == 3) {
            $(".gallery>li").hide();
            $(".gallery>li[title=southa]").show();
        } else if ($('#country option:selected').val() == 4) {
            $(".gallery>li").hide();
            $(".gallery>li[title=northa]").show();
        } else if ($('#country option:selected').val() == 5) {
            $(".gallery>li").hide();
            $(".gallery>li[title=oc]").show();
        } else if ($('#country option:selected').val() == 6) {
            $(".gallery>li").hide();
            $(".gallery>li[title=af]").show();
        } else if ($('#country option:selected').val() == 'type') {
            $(".gallery>li").show();
            $(".gallery>li").slice(9).hide();
        }
    });


});