$(document).ready(function(){
  var i;
  var data = {
    1: {"starthour" : 9,
        "startminute" : 0,
        "endhour" : 10,
        "endminute" : 0,
        "breaktime" : 0
      },
    2: {"starthour" : 9,
          "startminute" : 0,
          "endhour" : 10,
          "endminute" : 0,
          "breaktime" : 0
        },
    3: {"starthour" : 9,
            "startminute" : 0,
            "endhour" : 10,
            "endminute" : 0,
            "breaktime" : 0
        }
      };
$(".total").text(0);
function realtimeupdate () {
      function calculateSum(a) {
              var sum=0;
              sum = (parseFloat(data[a]["endhour"]) + parseFloat(data[a]["endminute"])) - (parseFloat(data[a]["starthour"]) + parseFloat(data[a]["startminute"])) - parseFloat(data[a]["breaktime"]);
              var location = $("#tableToModify tr")[a];
              $(location).find(".total").text(sum);
              console.log(sum);
            }
      function tableSum () {
              var tbSum = 0;
              $(".total").each(function(){
                tbSum += parseFloat($(this).text());
              });
              $(".totalSum").text(tbSum);
            }
            $(".starthour").change(function(){
              console.log($(this).closest("tr").index());
              data[$(this).closest("tr").index()]["starthour"] = $(this).find("option:selected").val();
              calculateSum($(this).closest("tr").index());
              tableSum();
            });
            $(".startminute").change(function(){
              console.log($(this).closest("tr").index());
              data[$(this).closest("tr").index()]["startminute"] = $(this).find("option:selected").val();
              calculateSum($(this).closest("tr").index());
              tableSum();
            });
            $(".endhour").change(function(){
              console.log($(this).closest("tr").index());
              data[$(this).closest("tr").index()]["endhour"] = $(this).find("option:selected").val();
              calculateSum($(this).closest("tr").index());
              tableSum();
            });
            $(".endminute").change(function(){
              console.log($(this).closest("tr").index());
              data[$(this).closest("tr").index()]["endminute"] = $(this).find("option:selected").val();
              calculateSum($(this).closest("tr").index());
              tableSum();
            });
            $(".breaktime").change(function(){
              console.log($(this).closest("tr").index());
              data[$(this).closest("tr").index()]["breaktime"] = $(this).find("option:selected").val();
              calculateSum($(this).closest("tr").index());
              tableSum();
            });
}
realtimeupdate();
  $("button").click(function () {
            var rowCount = $("#tableToModify tr").length;
            var clone = $("#rowToClone").clone().appendTo("#tableToModify");
            var day = $(clone).find("td:first");
            $(clone).find("td:last").text(0);
            day.attr("class","daycount");
            $(".daycount:last").text(rowCount);
            data[rowCount] = {
                  "starthour" : 9,
                  "startminute" : 0,
                  "endhour" : 10,
                  "endminute" : 0,
                  "breaktime" : 0
            };
            realtimeupdate();
        });
});
