'use strict';

$(document).scannerDetection({
    //https://github.com/kabachello/jQuery-Scanner-Detection

    timeBeforeScanTest: 200, // wait for the next character for upto 200ms
    avgTimeByChar: 40, // it's not a barcode if a character takes longer than 100ms
    preventDefault: true,
  
    endChar: [13],
        onComplete: function(barcode, qty){
    validScan = true;
     
     
        $('#scannerInput').val (barcode);
      
    } // main callback function ,
    ,
    onError: function(string, qty) {
  
    $('#userInput').val ($('#userInput').val()  + string);
  
      
    }
});