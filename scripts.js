   $(function () {

var grandTotal = function () {
        var sumTotal = 0;
           $("tr").find("#Total").each(function () {
                var innputVal = $(this).closest(this).val();
                    if ($.isNumeric(innputVal)) {
                        sumTotal += parseFloat(innputVal)
             }
                 $("#Ftotal").text(sumTotal)
                 $('#ViewTotal').text(sumTotal)
      })
}

function counter() {
          var i = 0;
          $("tr").each(function () {
       $(this).find("#serial").html(i);
              i++;
     })
 }
 var closeW = function () {
         $(".alert").hide();
 }
$(".close").click(function () { 
        closeW(); 
});

var trDisabled = function () {
        $("tr").each(function () {
         $("tr").prev().find("#Items").attr("readonly", "readonly");
         $("tr").prev().find("#Price").attr("readonly", "readonly");
         $("tr").prev().find("#Quantity").attr("readonly", "readonly");
        })
 }
var subTotal = function () {
         $("tr").each(function () {
        $(this).closest("tr").find("#Total").val($(this).closest("tr").find("#Price").val() * $(this).closest("tr").find("#Quantity").val());
        })
 }
$(document).on("keyup", "#Item", function () { 
       $("#Warning1").hide(2000); 
}); 
$(document).on("keyup", "#Price", function () {
        $("#Warning2").hide(2000);
 })
$(document).on("keyup", "#Quantity", function () {
         subTotal();
         grandTotal()
 })
$(document).on("keyup", "#Price", function () {
        subTotal();
        grandTotal();
})
$("#plus").click(function () {
     if ($("tr").last().find("#Item").val() == '')
     {
         $("#Warning1").show(1000);
    }
else if ($("tr").last().find("#Price").val() == '') 
    {
        $("#Warning2").show(1000);
    }
   else 
   {
         var tr = "<tr><td><span id='serial'></span></td><td><input type='text' value='' id='Items' class='form-control rounded-0 form-control-sm'></td><td><input type='number' value='' id='Price' class='form-control rounded-0 form-control-sm' ></td><td><input type='number' value='1' id='Quantity' class='form-control rounded-0 form-control-sm' ></td><td><input type='number' value='' id='Total' disabled class='form-control rounded-0 form-control-sm' ></td><td style='width:90px'><button id='edit' class='btn btn-secondary rounded-0 btn-sm mr-2'><i id='i1' class='fa fa-edit'></i></button><button id='delete' class='btn btn-danger rounded-0 btn-sm mr-2'><i id='i2' class='fa fa-trash'></i></button></td></tr>";
        $("tbody").append(tr);
        trDisabled();
        counter();
     }
})

$(document).on("click", "#delete", function () {
        $(this).closest("tr").remove();
          grandTotal();
         counter();
 })
 $(document).on("click", "#clear", function () {
        $("tbody").find("tr").remove("tr");
        $("#Ftotal").text('')
        

})
$(document).on("click", "#edit", function () {
        if ($(this).closest("tr").find("#Price").attr("readonly")) {
            $(this).closest("tr").find("#Price").removeAttr("readonly", "readonly");
            $(this).closest("tr").find("#Quantity").removeAttr("readonly", "readonly");
            $(this).closest("tr").find("#Items").removeAttr("readonly", "readonly");
            $(this).closest("tr").find("#i1").attr("class", "fa fa-edit");
        } 
        else 
        {          
            $(this).closest("tr").find("#Price").attr("readonly", "readonly");
            $(this).closest("tr").find("#Quantity").attr("readonly", "readonly");
             $(this).closest("tr").find("#Items").attr("readonly", "readonly");
             $(this).closest("tr").find("#i1").attr("class", "fa fa-save");
        }
    })

        
        
    var RTable;
    $('#Preview').on("click", ()=>{
        RTable = $('#ReceiptTable');
         $('#modal_RTable').html(RTable);
         $('td:last-child').each(function () {
             $(this).last('td').hide();

         });
         $('td .form-control').each(function () {
             $(this).last('td').css('border', '0');
             $(this).removeAttr("readonly", "readonly");
         });
         $('thead tr th:last').hide();
         

    })

    $('#closeRTable').on('click', ()=> {
        $('#TRU').html(RTable);
        $('thead tr th:last').show();
        $('td:last-child').each(function () {
             $(this).last('td').show();
         });
        $('td .form-control').each(function () {
             $(this).last('td').css('border', '1');
             $(this).attr("readonly", "readonly");
         });

    })
});